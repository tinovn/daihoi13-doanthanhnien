<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(Request $request): Response
    {
        $posts = Post::query()
            ->with('author:id,name')
            ->when($request->search, fn ($q, $s) => $q->where('title', 'like', "%{$s}%"))
            ->when($request->category, fn ($q, $c) => $q->where('category', $c))
            ->when($request->status, fn ($q, $s) => $q->where('status', $s))
            ->latest()
            ->paginate(20);

        return Inertia::render('Admin/Posts/Index', [
            'posts' => $posts,
            'filters' => $request->only(['search', 'category', 'status']),
            'categories' => Post::CATEGORIES,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Posts/Create', [
            'categories' => Post::CATEGORIES,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:500',
            'category' => 'required|in:' . implode(',', array_keys(Post::CATEGORIES)),
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'featured_image' => 'nullable|string|max:500',
            'is_featured' => 'boolean',
            'status' => 'required|in:draft,published',
        ]);
        $data['slug'] = Str::slug($data['title']) . '-' . now()->timestamp;
        $data['author_id'] = $request->user()->id;
        if ($data['status'] === 'published') {
            $data['published_at'] = now();
        }

        Post::create($data);
        return redirect()->route('admin.posts.index')->with('success', 'Đã tạo bài viết');
    }

    public function edit(Post $post): Response
    {
        return Inertia::render('Admin/Posts/Edit', [
            'post' => $post,
            'categories' => Post::CATEGORIES,
        ]);
    }

    public function update(Request $request, Post $post): RedirectResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:500',
            'category' => 'required|in:' . implode(',', array_keys(Post::CATEGORIES)),
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'featured_image' => 'nullable|string|max:500',
            'is_featured' => 'boolean',
            'status' => 'required|in:draft,published',
        ]);
        if ($data['status'] === 'published' && !$post->published_at) {
            $data['published_at'] = now();
        }
        $post->update($data);
        return redirect()->route('admin.posts.index')->with('success', 'Đã cập nhật bài viết');
    }

    public function destroy(Post $post): RedirectResponse
    {
        $post->delete();
        return back()->with('success', 'Đã xoá bài viết');
    }
}
