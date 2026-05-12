<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Tin tức / sự kiện / thông cáo báo chí Đại hội Đoàn XIII.
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string $category
 * @property ?string $excerpt
 * @property ?string $content
 * @property ?string $featured_image
 * @property int $views
 * @property bool $is_featured
 * @property string $status
 */
class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'title', 'slug', 'category', 'excerpt', 'content',
        'featured_image', 'views', 'is_featured', 'status',
        'published_at', 'author_id',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'views' => 'integer',
        'published_at' => 'datetime',
    ];

    public const CATEGORIES = [
        'chuan_bi' => 'Chuẩn bị Đại hội',
        'cac_cap' => 'Đại hội các cấp',
        'chao_mung' => 'Hoạt động chào mừng',
        'thong_cao' => 'Thông cáo báo chí',
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published')
                     ->whereNotNull('published_at')
                     ->where('published_at', '<=', now());
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}
