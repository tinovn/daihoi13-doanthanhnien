<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Trạng thái Đại hội Đoàn cấp tỉnh trên bản đồ 63 tỉnh.
 */
class MapStatus extends Model
{
    use HasFactory;

    protected $table = 'map_status';

    protected $fillable = [
        'province', 'event_date', 'delegates', 'status', 'notes',
    ];

    protected $casts = [
        'event_date' => 'date',
        'delegates' => 'integer',
    ];

    public const STATUSES = [
        'completed' => 'Đã hoàn thành',
        'ongoing' => 'Đang diễn ra',
        'preparing' => 'Đang chuẩn bị',
        'not_yet' => 'Chưa tổ chức',
    ];
}
