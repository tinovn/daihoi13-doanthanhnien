import type { CollectionConfig } from 'payload';

/**
 * Trạng thái Đại hội cấp tỉnh trên bản đồ 63 tỉnh.
 */
export const MapStatus: CollectionConfig = {
  slug: 'map-status',
  labels: { singular: 'Tỉnh thành', plural: 'Bản đồ Đại hội các cấp' },
  admin: { useAsTitle: 'province', defaultColumns: ['province', 'status', 'eventDate', 'delegates'] },
  access: { read: () => true },
  fields: [
    { name: 'province', type: 'text', required: true, unique: true, label: 'Tỉnh / Thành phố' },
    { name: 'eventDate', type: 'date', label: 'Ngày tổ chức' },
    { name: 'delegates', type: 'number', label: 'Số đại biểu' },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'not_yet',
      options: [
        { label: 'Đã hoàn thành', value: 'completed' },
        { label: 'Đang diễn ra', value: 'ongoing' },
        { label: 'Đang chuẩn bị', value: 'preparing' },
        { label: 'Chưa tổ chức', value: 'not_yet' },
      ],
    },
    { name: 'notes', type: 'textarea', label: 'Ghi chú' },
  ],
};
