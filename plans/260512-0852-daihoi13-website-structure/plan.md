# Plan: Website Đại hội Đoàn toàn quốc lần thứ XIII

**Tên miền đề xuất:** `daihoi13.doanthanhnien.vn`
**Mục tiêu:** Xây dựng website chính thức phục vụ Đại hội Đoàn TNCS Hồ Chí Minh lần thứ XIII với trải nghiệm số tiên tiến (Triển lãm số 360°, Bản đồ tương tác, AI Chatbot).

---

## Trạng thái các Phase

| Phase | Tên | Trạng thái | Ưu tiên |
|-------|-----|------------|---------|
| 01 | Thiết kế hệ thống & Nhận diện | ⏳ Chờ phê duyệt | Cao |
| 02 | Hạ tầng & CMS | ⏳ Chờ | Cao |
| 03 | Trang chủ & Layout xuyên suốt (Header/Footer/Liên hệ) | ⏳ Chờ | Cao |
| 04 | Module Tin tức – Sự kiện | ⏳ Chờ | Cao |
| 05 | Module Về Đại hội + Văn kiện + Lịch sử | ⏳ Chờ | Cao |
| 06 | Triển lãm số 360° "Khát vọng cống hiến" | ⏳ Chờ | Trung bình |
| 07 | Bản đồ số Đại hội (Interactive Map) | ⏳ Chờ | Trung bình |
| 08 | Gửi gắm tới Đại hội (Wall + Word Cloud) | ⏳ Chờ | Trung bình |
| 09 | Cổng Đại biểu (Auth + SSO) | ⏳ Chờ | Cao |
| 10 | Cổng Báo chí (Press Kit + Media) | ⏳ Chờ | Trung bình |
| 11 | AI Chatbot Trợ lý Đại hội | ⏳ Chờ | Trung bình |
| 12 | Tích hợp Messenger + App "Thanh niên Việt Nam" | ⏳ Chờ | Thấp |
| 13 | SEO, Đa ngôn ngữ, A11y, Hiệu năng | ⏳ Chờ | Cao |
| 14 | Bảo mật, Audit log, Backup, DR | ⏳ Chờ | Cao |
| 15 | Triển khai, Monitoring, Vận hành | ⏳ Chờ | Cao |

---

## Phụ thuộc & Rủi ro chính

- **Cấp tài khoản đại biểu**: cần phương án đồng bộ DSAĐ (Danh sách Đại biểu) từ hệ thống của TƯ Đoàn — SSO hay tài khoản riêng.
- **Triển lãm số 360°**: yêu cầu nhân sự dựng 3D + hosting WebGL — đánh giá khả năng dùng `three.js` / `model-viewer` / nền tảng SaaS.
- **Lưu lượng đỉnh** khi Đại hội diễn ra: cần CDN, cache, autoscaling.
- **Kiểm duyệt nội dung "Bức tường kỳ vọng"**: cần moderation (manual + AI).
- **Bảo mật phiên họp đại biểu**: tài liệu mật, chống chụp/leak.

## Tham chiếu

- ⭐ [**revised-structure-aligned-with-reference.md**](./revised-structure-aligned-with-reference.md) — **Cấu trúc CHỐT (bám mô hình daihoidangtoanquoc.vn)**
- [analysis-structure-review.md](./analysis-structure-review.md) — Đánh giá & đề xuất cải tiến cấu trúc
- [website-structure-original.md](./website-structure-original.md) — Cấu trúc website (bản gốc dự thảo)
- Reference website: https://daihoidangtoanquoc.vn/ (Đại hội Đảng XIV)
