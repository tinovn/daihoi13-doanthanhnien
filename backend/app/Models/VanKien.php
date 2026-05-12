<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Tài liệu / văn kiện Đại hội.
 */
class VanKien extends Model
{
    use HasFactory;

    protected $table = 'van_kien';

    protected $fillable = [
        'dai_hoi_id', 'type', 'title', 'description',
        'file_url', 'file_size', 'file_type',
        'download_count', 'published_at',
    ];

    protected $casts = [
        'download_count' => 'integer',
        'published_at' => 'datetime',
    ];

    public const TYPES = [
        'du_thao' => 'Dự thảo',
        'gop_y' => 'Tổng hợp góp ý',
        'chinh_thuc' => 'Văn kiện chính thức',
        'infographic' => 'Infographic',
        'emagazine' => 'E-Magazine',
    ];

    public function daiHoi(): BelongsTo
    {
        return $this->belongsTo(DaiHoi::class);
    }
}
