<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DaiHoi;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class DaiHoiApiController extends Controller
{
    public function index(): JsonResponse
    {
        $data = Cache::remember('api:dai_hoi:all', 1800, fn () => DaiHoi::orderBy('order')->get());
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function show(string $idOrRoman): JsonResponse
    {
        $dh = is_numeric($idOrRoman)
            ? DaiHoi::findOrFail($idOrRoman)
            : DaiHoi::where('roman', strtoupper($idOrRoman))->firstOrFail();
        return response()->json(['success' => true, 'data' => $dh]);
    }
}
