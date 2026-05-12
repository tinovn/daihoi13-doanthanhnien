<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * 13 kỳ Đại hội Đoàn TNCS Hồ Chí Minh.
 */
class DaiHoi extends Model
{
    use HasFactory;

    protected $table = 'dai_hoi';

    protected $fillable = [
        'roman', 'year', 'slug', 'title', 'time_range', 'location',
        'theme', 'leader_name', 'leader_photo', 'delegates_count',
        'members_count', 'movements', 'description', 'highlights',
        'gallery_images', 'documents', 'order',
    ];

    protected $casts = [
        'movements' => 'array',
        'highlights' => 'array',
        'gallery_images' => 'array',
        'documents' => 'array',
        'year' => 'integer',
        'order' => 'integer',
    ];

    public function vanKien(): HasMany
    {
        return $this->hasMany(VanKien::class);
    }
}
