# Đại hội Đoàn toàn quốc lần thứ XIII — Website chính thức

> **Domain:** `daihoi13.doanthanhnien.vn`
> **Chủ đề:** Khát vọng — Tiên phong — Đoàn kết — Bản lĩnh — Sáng tạo
> **Nhiệm kỳ:** 2026 – 2031

Trang thông tin chính thức Đại hội Đoàn TNCS Hồ Chí Minh lần thứ XIII, do Trung ương Đoàn TNCS Hồ Chí Minh chủ trì.

## 🏗️ Cấu trúc project

```
/
├── web/                                # Source code website
│   ├── index.html                      # Trang chủ
│   ├── styles.css                      # CSS — design tokens, components
│   ├── script.js                       # Countdown timer + floating contact
│   ├── icons.svg                       # SVG sprite (29 icons vector)
│   └── assets/
│       └── images/                     # bg-hero, bg-360, bg-timeline, logo, vn-map
│
├── plans/                              # Tài liệu kế hoạch
│   └── 260512-0852-daihoi13-website-structure/
│       ├── plan.md                     # Plan 15 phase
│       ├── revised-structure-aligned-with-reference.md   # Cấu trúc CHỐT
│       ├── analysis-structure-review.md
│       └── website-structure-original.md
│
└── docs/                               # Tài liệu kỹ thuật (sẽ bổ sung)
```

## 🚀 Cách chạy local

```bash
cd web
python3 -m http.server 8080
# Mở: http://localhost:8080
```

Hoặc với Node:
```bash
cd web && npx http-server -p 8080
```

## 🎨 Tech stack hiện tại

- **HTML5** + **Tailwind CSS** (CDN) + **Vanilla JS**
- **Be Vietnam Pro** font (Google Fonts)
- **SVG sprite** cho icons (no Font Awesome, full vector)
- Bản đồ Việt Nam vector từ djaiss/mapsicon (potrace, Wikimedia)

## 📋 Tính năng đã hoàn thành

- ✅ Header với search + đa ngôn ngữ VI/EN
- ✅ Navigation 8 mục
- ✅ Hero banner với countdown realtime
- ✅ Tin tức – Sự kiện (1 tin nổi bật + 4 tin phụ + 5 quick links)
- ✅ 3 khối: Triển lãm 360° / Nhìn lại Nhiệm kỳ XII / Bản đồ số
- ✅ Bản đồ Việt Nam vector (mainland + Hoàng Sa + Trường Sa + 14 status markers)
- ✅ Timeline 6 kỳ Đại hội + Quote testimonial
- ✅ 5 cards Văn kiện
- ✅ CTA Đại biểu + Báo chí
- ✅ Footer với social + Google Play + App Store
- ✅ Floating contact (Chatbot + Messenger + App)

## 📅 Roadmap

Xem chi tiết tại [plans/260512-0852-daihoi13-website-structure/plan.md](plans/260512-0852-daihoi13-website-structure/plan.md).

## 🏛️ Đơn vị chủ trì

**Trung ương Đoàn TNCS Hồ Chí Minh**
- Địa chỉ: 62 Bà Triệu, Hoàn Kiếm, Hà Nội
- Email: daihoi13@doanthanhnien.vn
- Website: https://daihoi13.doanthanhnien.vn

---

© 2025 Đại hội Đoàn Toàn quốc lần thứ XIII. All rights reserved.
