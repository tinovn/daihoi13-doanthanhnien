import type { GlobalConfig } from 'payload';

/**
 * Site-wide settings — hero, countdown, contact, social.
 * Truy cập qua: GET /api/globals/site-settings
 */
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Cài đặt chung',
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Banner',
          fields: [
            { name: 'heroTitle1', type: 'text', label: 'Dòng 1', defaultValue: 'KHÁT VỌNG TIÊN PHONG' },
            { name: 'heroTitle2', type: 'text', label: 'Dòng 2', defaultValue: 'XÂY DỰNG ĐẤT NƯỚC HÙNG CƯỜNG - THỊNH VƯỢNG' },
            { name: 'heroPeriod', type: 'text', defaultValue: 'NHIỆM KỲ 2026 - 2031' },
            { name: 'countdownTarget', type: 'date', defaultValue: '2026-06-26T08:00:00' },
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          label: 'Liên hệ',
          fields: [
            { name: 'address', type: 'text', defaultValue: '62 Bà Triệu, Hoàn Kiếm, Hà Nội' },
            { name: 'phone', type: 'text', defaultValue: '(024) 6263 1234' },
            { name: 'fax', type: 'text', defaultValue: '(024) 6263 1235' },
            { name: 'email', type: 'email', defaultValue: 'daihoi13@doanthanhnien.vn' },
          ],
        },
        {
          label: 'Mạng xã hội & App',
          fields: [
            { name: 'facebook', type: 'text', label: 'Facebook URL' },
            { name: 'youtube', type: 'text', label: 'YouTube URL' },
            { name: 'zalo', type: 'text', label: 'Zalo OA URL' },
            { name: 'tiktok', type: 'text', label: 'TikTok URL' },
            { name: 'appPlayStore', type: 'text', label: 'Google Play URL' },
            { name: 'appAppleStore', type: 'text', label: 'App Store URL' },
          ],
        },
      ],
    },
  ],
};
