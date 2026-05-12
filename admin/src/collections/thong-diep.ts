import type { CollectionConfig } from 'payload';

/**
 * Thông điệp gửi Đại hội — cần duyệt (workflow moderation).
 */
export const ThongDiep: CollectionConfig = {
  slug: 'thong-diep',
  labels: { singular: 'Thông điệp', plural: 'Thông điệp gửi Đại hội' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'location', 'status', 'createdAt'] },
  access: {
    read: ({ req }) => {
      // Public chỉ thấy approved; admin thấy tất cả
      if (req.user) return true;
      return { status: { equals: 'approved' } };
    },
    create: () => true, // public form submit
  },
  fields: [
    { name: 'name', type: 'text', required: true, maxLength: 200, label: 'Họ và tên' },
    { name: 'location', type: 'text', label: 'Đơn vị / Địa phương' },
    { name: 'message', type: 'textarea', required: true, minLength: 10, maxLength: 2000, label: 'Thông điệp' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'keywords',
      type: 'array',
      label: 'Từ khoá',
      fields: [{ name: 'tag', type: 'text', required: true }],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Chờ duyệt', value: 'pending' },
        { label: 'Đã duyệt', value: 'approved' },
        { label: 'Từ chối', value: 'rejected' },
      ],
    },
    { name: 'approvedBy', type: 'relationship', relationTo: 'users' },
    { name: 'approvedAt', type: 'date' },
    { name: 'ipAddress', type: 'text', admin: { readOnly: true } },
  ],
};
