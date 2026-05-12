import type { CollectionConfig } from 'payload';

/**
 * Tài liệu / văn kiện Đại hội.
 */
export const VanKien: CollectionConfig = {
  slug: 'van-kien',
  labels: { singular: 'Văn kiện', plural: 'Văn kiện' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'type', 'daiHoi', 'publishedAt'] },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, maxLength: 500 },
    { name: 'daiHoi', type: 'relationship', relationTo: 'dai-hoi', label: 'Thuộc kỳ Đại hội' },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'du_thao',
      options: [
        { label: 'Dự thảo', value: 'du_thao' },
        { label: 'Tổng hợp ý kiến góp ý', value: 'gop_y' },
        { label: 'Văn kiện chính thức', value: 'chinh_thuc' },
        { label: 'Infographic', value: 'infographic' },
        { label: 'E-Magazine', value: 'emagazine' },
      ],
    },
    { name: 'description', type: 'textarea' },
    { name: 'file', type: 'upload', relationTo: 'media', required: true },
    { name: 'downloadCount', type: 'number', defaultValue: 0, admin: { readOnly: true } },
    { name: 'publishedAt', type: 'date' },
  ],
};
