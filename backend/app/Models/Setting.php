<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

/**
 * Site-wide settings: hero, countdown, social, contact, ...
 *
 * Cached cho performance — clear bằng Cache::forget('setting:'.$key) khi update.
 */
class Setting extends Model
{
    protected $fillable = ['key', 'value', 'type', 'group'];

    public static function get(string $key, mixed $default = null): mixed
    {
        return Cache::remember("setting:{$key}", 3600, function () use ($key, $default) {
            $setting = static::where('key', $key)->first();
            if (!$setting) {
                return $default;
            }
            return match ($setting->type) {
                'json' => json_decode($setting->value, true),
                'number' => (float) $setting->value,
                default => $setting->value,
            };
        });
    }

    public static function set(string $key, mixed $value, string $type = 'string', string $group = 'general'): self
    {
        $stored = match ($type) {
            'json' => json_encode($value, JSON_UNESCAPED_UNICODE),
            default => (string) $value,
        };
        $setting = static::updateOrCreate(
            ['key' => $key],
            ['value' => $stored, 'type' => $type, 'group' => $group]
        );
        Cache::forget("setting:{$key}");
        return $setting;
    }
}
