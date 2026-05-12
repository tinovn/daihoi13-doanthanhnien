<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Public API: danh sách & chi tiết tin tức (chỉ published).
 */
class PostApiController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $posts = Post::published()
            ->when($request->category, fn ($q, $c) => $q->where('category', $c))
            ->when($request->featured, fn ($q) => $q->featured())
            ->latest('published_at')
            ->paginate(min((int) $request->get('per_page', 12), 50));

        return response()->json([
            'success' => true,
            'data' => $posts->items(),
            'meta' => [
                'total' => $posts->total(),
                'page' => $posts->currentPage(),
                'per_page' => $posts->perPage(),
                'last_page' => $posts->lastPage(),
            ],
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $post = Post::published()->where('slug', $slug)->firstOrFail();
        $post->increment('views');
        return response()->json(['success' => true, 'data' => $post]);
    }
}
