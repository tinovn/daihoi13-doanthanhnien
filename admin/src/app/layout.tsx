import React from 'react';

export const metadata = {
  title: 'Đại hội Đoàn XIII — Admin CMS',
  description: 'Hệ thống quản lý nội dung Đại hội Đoàn toàn quốc lần thứ XIII',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
