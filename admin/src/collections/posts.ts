import type { CollectionConfig } from 'payload';

/**
 * Tin tức / sự kiện / thông cáo báo chí Đại hội Đoàn XIII.
 */
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'isFeatured', 'publishedAt'],
    listSearchableFields: ['title', 'excerpt'],
  },
  access: {
    read: () => true, // public API
  },
  fields: [
    { name: 'title', type: 'text', required: true, maxLength: 500 },
    { name: 'slug', type: 'text', required: true, unique: true, admin: { description: 'URL slug, vd: hoi-nghi-trien-khai-dai-hoi-xiii' } },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'chuan_bi',
      options: [
        { label: 'Chuẩn bị Đại hội', value: 'chuan_bi' },
        { label: 'Đại hội các cấp', value: 'cac_cap' },
        { label: 'Hoạt động chào mừng', value: 'chao_mung' },
        { label: 'Thông cáo báo chí', value: 'thong_cao' },
      ],
    },
    { name: 'excerpt', type: 'textarea', admin: { description: 'Tóm tắt ngắn ~200 ký tự' } },
    { name: 'content', type: 'richText' },
    { name: 'featuredImage', type: 'upload', relationTo: 'media' },
    { name: 'views', type: 'number', defaultValue: 0, admin: { readOnly: true } },
    { name: 'isFeatured', type: 'checkbox', label: 'Tin nổi bật', defaultValue: false },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Bản nháp', value: 'draft' },
        { label: 'Đã xuất bản', value: 'published' },
      ],
    },
    { name: 'publishedAt', type: 'date' },
    { name: 'author', type: 'relationship', relationTo: 'users' },
  ],
};
