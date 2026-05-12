<?php

declare(strict_types=1);

use App\Http\Controllers\Api\DaiHoiApiController;
use App\Http\Controllers\Api\PostApiController;
use App\Http\Controllers\Api\ThongDiepApiController;
use Illuminate\Support\Facades\Route;

/**
 * Public JSON API — phục vụ frontend HTML static (GitHub Pages).
 * CORS: cấu hình trong config/cors.php cho domain frontend.
 */
Route::prefix('v1')->group(function () {
    // Posts
    Route::get('/posts', [PostApiController::class, 'index']);
    Route::get('/posts/{slug}', [PostApiController::class, 'show']);

    // Đại hội (13 kỳ)
    Route::get('/dai-hoi', [DaiHoiApiController::class, 'index']);
    Route::get('/dai-hoi/{id}', [DaiHoiApiController::class, 'show']);

    // Thông điệp
    Route::get('/thong-diep', [ThongDiepApiController::class, 'index']);
    Route::post('/thong-diep', [ThongDiepApiController::class, 'store'])
        ->middleware('throttle:5,1'); // 5 lần / phút / IP
});
