import type { CollectionConfig } from 'payload';

/**
 * Đại biểu chính thức Đại hội XIII — có auth riêng (login OTP).
 */
export const DaiBieu: CollectionConfig = {
  slug: 'dai-bieu',
  labels: { singular: 'Đại biểu', plural: 'Đại biểu Đại hội XIII' },
  admin: { useAsTitle: 'name', defaultColumns: ['code', 'name', 'province', 'status'] },
  auth: { tokenExpiration: 7200, useAPIKey: false },
  fields: [
    { name: 'code', type: 'text', required: true, unique: true, label: 'Mã đại biểu', admin: { description: 'vd: DB001234' } },
    { name: 'cccd', type: 'text', label: 'CCCD' },
    { name: 'name', type: 'text', required: true, label: 'Họ và tên' },
    { name: 'phone', type: 'text', label: 'Số điện thoại' },
    { name: 'province', type: 'text', label: 'Tỉnh / Thành phố' },
    { name: 'organization', type: 'text', label: 'Đơn vị công tác' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Hoạt động', value: 'active' },
        { label: 'Tạm khoá', value: 'suspended' },
      ],
    },
    { name: 'lastLoginAt', type: 'date', admin: { readOnly: true } },
  ],
};
