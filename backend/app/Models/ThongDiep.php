<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Thông điệp gửi tới Đại hội (cần moderation).
 */
class ThongDiep extends Model
{
    use HasFactory;

    protected $table = 'thong_diep';

    protected $fillable = [
        'name', 'location', 'message', 'image_url', 'keywords',
        'status', 'approved_by', 'approved_at', 'ip_address',
    ];

    protected $casts = [
        'keywords' => 'array',
        'approved_at' => 'datetime',
    ];

    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}
