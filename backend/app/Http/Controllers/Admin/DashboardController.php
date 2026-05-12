<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DaiBieu;
use App\Models\Post;
use App\Models\ThongDiep;
use App\Models\VanKien;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'posts_total' => Post::count(),
                'posts_published' => Post::where('status', 'published')->count(),
                'thong_diep_pending' => ThongDiep::where('status', 'pending')->count(),
                'thong_diep_total' => ThongDiep::count(),
                'van_kien_total' => VanKien::count(),
                'dai_bieu_total' => DaiBieu::count(),
            ],
            'recent_posts' => Post::latest()->take(5)->get(['id', 'title', 'status', 'created_at']),
            'recent_messages' => ThongDiep::latest()->take(5)->get(['id', 'name', 'message', 'status', 'created_at']),
        ]);
    }
}
