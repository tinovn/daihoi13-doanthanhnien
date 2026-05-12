<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * Đại biểu chính thức Đại hội XIII — auth riêng qua guard 'delegate'.
 */
class DaiBieu extends Authenticatable
{
    use HasFactory;
    use Notifiable;

    protected $table = 'dai_bieu';

    protected $fillable = [
        'code', 'cccd', 'name', 'email', 'phone',
        'province', 'organization', 'password', 'status', 'last_login_at',
    ];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'last_login_at' => 'datetime',
        'password' => 'hashed',
    ];
}
