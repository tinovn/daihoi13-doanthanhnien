<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            ['key' => 'site_title', 'value' => 'Đại hội Đoàn toàn quốc lần thứ XIII', 'group' => 'general'],
            ['key' => 'site_slogan', 'value' => 'Khát vọng · Tiên phong · Đoàn kết · Bản lĩnh · Sáng tạo', 'group' => 'general'],
            ['key' => 'hero_title_line_1', 'value' => 'KHÁT VỌNG TIÊN PHONG', 'group' => 'hero'],
            ['key' => 'hero_title_line_2', 'value' => 'XÂY DỰNG ĐẤT NƯỚC HÙNG CƯỜNG - THỊNH VƯỢNG', 'group' => 'hero'],
            ['key' => 'hero_period', 'value' => 'NHIỆM KỲ 2026 - 2031', 'group' => 'hero'],
            ['key' => 'countdown_target', 'value' => '2026-06-26 08:00:00', 'type' => 'date', 'group' => 'hero'],
            ['key' => 'contact_address', 'value' => '62 Bà Triệu, Hoàn Kiếm, Hà Nội', 'group' => 'contact'],
            ['key' => 'contact_phone', 'value' => '(024) 6263 1234', 'group' => 'contact'],
            ['key' => 'contact_fax', 'value' => '(024) 6263 1235', 'group' => 'contact'],
            ['key' => 'contact_email', 'value' => 'daihoi13@doanthanhnien.vn', 'group' => 'contact'],
            ['key' => 'social_facebook', 'value' => 'https://www.facebook.com/doantncshcm', 'group' => 'social'],
            ['key' => 'social_youtube', 'value' => '', 'group' => 'social'],
            ['key' => 'social_zalo', 'value' => '', 'group' => 'social'],
            ['key' => 'app_play_store', 'value' => '#', 'group' => 'social'],
            ['key' => 'app_apple_store', 'value' => '#', 'group' => 'social'],
        ];
        foreach ($settings as $s) {
            Setting::set($s['key'], $s['value'], $s['type'] ?? 'string', $s['group'] ?? 'general');
        }
    }
}
