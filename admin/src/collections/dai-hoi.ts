import type { CollectionConfig } from 'payload';

/**
 * 13 kỳ Đại hội Đoàn TNCS Hồ Chí Minh.
 */
export const DaiHoi: CollectionConfig = {
  slug: 'dai-hoi',
  labels: { singular: 'Kỳ Đại hội', plural: 'Các kỳ Đại hội' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['roman', 'year', 'title', 'leaderName', 'order'],
  },
  access: { read: () => true },
  defaultSort: 'order',
  fields: [
    { name: 'roman', type: 'text', required: true, unique: true, admin: { description: 'I, II, III, ..., XIII' } },
    { name: 'year', type: 'number', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'title', type: 'text', required: true, maxLength: 500 },
    { name: 'timeRange', type: 'text', label: 'Thời gian', admin: { description: 'vd: 26-30/06/2026' } },
    { name: 'location', type: 'text', label: 'Địa điểm' },
    { name: 'theme', type: 'textarea', label: 'Chủ đề' },
    { name: 'leaderName', type: 'text', label: 'Bí thư thứ nhất' },
    { name: 'leaderPhoto', type: 'upload', relationTo: 'media', label: 'Ảnh Bí thư thứ nhất' },
    { name: 'delegatesCount', type: 'text', label: 'Số đại biểu' },
    { name: 'membersCount', type: 'text', label: 'Số đoàn viên' },
    {
      name: 'movements',
      type: 'array',
      label: 'Phong trào tiêu biểu',
      fields: [{ name: 'name', type: 'text', required: true }],
    },
    { name: 'description', type: 'richText', label: 'Mô tả chi tiết' },
    {
      name: 'highlights',
      type: 'array',
      label: 'Dấu ấn nổi bật',
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Bộ sưu tập ảnh',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
    },
    { name: 'order', type: 'number', defaultValue: 0, admin: { description: 'Thứ tự hiển thị (0-12)' } },
  ],
};
