<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ThongDiep;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ThongDiepApiController extends Controller
{
    public function index(): JsonResponse
    {
        $messages = ThongDiep::approved()->latest()->take(50)->get();
        return response()->json(['success' => true, 'data' => $messages]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:200',
            'location' => 'nullable|string|max:200',
            'message' => 'required|string|min:10|max:2000',
            'image_url' => 'nullable|url|max:500',
        ]);
        $data['status'] = 'pending';
        $data['ip_address'] = $request->ip();
        $msg = ThongDiep::create($data);
        return response()->json([
            'success' => true,
            'message' => 'Cảm ơn bạn! Thông điệp đang chờ duyệt.',
            'data' => $msg->only(['id', 'name', 'created_at']),
        ], 201);
    }
}
