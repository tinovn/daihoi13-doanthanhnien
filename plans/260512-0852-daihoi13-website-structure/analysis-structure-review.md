# Đánh giá & Đề xuất cải tiến — Cấu trúc Website Đại hội Đoàn XIII

## A. ĐÁNH GIÁ TỔNG QUAN

### Điểm mạnh

| # | Hạng mục | Nhận xét |
|---|---------|----------|
| 1 | Định hướng số hoá | Có yếu tố "wow" rõ rệt: Triển lãm 360°, Bản đồ tương tác, AI Chatbot, Word Cloud — phù hợp tinh thần "khát vọng cống hiến" và chuyển đổi số. |
| 2 | Phân vai người dùng | Đã tách 3 nhóm: công chúng / đại biểu / báo chí — đúng best practice cho event website cấp quốc gia. |
| 3 | Tính tương tác | Bức tường kỳ vọng, Word Cloud, Bản đồ thúc đẩy engagement & UGC (User-Generated Content). |
| 4 | Minh bạch văn kiện | Có khu lấy ý kiến + tổng hợp góp ý — chuẩn mực dân chủ. |
| 5 | Trải nghiệm xuyên suốt | Floating Contact (Chatbot/Messenger/App) — đúng pattern hiện đại. |

### Khoảng trống cần bổ sung

| # | Vấn đề | Mức độ | Khuyến nghị |
|---|--------|--------|-------------|
| 1 | **Chưa có Livestream / Phát thanh – Truyền hình trực tiếp** phiên khai mạc, bế mạc, các phiên thảo luận công khai | 🔴 Cao | Bổ sung mục **"Đại hội trực tuyến"** với lịch livestream + embed player + chat realtime + replay. |
| 2 | **Thiếu trang Đa phương tiện (Multimedia Hub)** tập trung video, podcast, photo gallery | 🟠 Trung bình | Tách thành mục riêng "Media – Đa phương tiện" hoặc gộp vào "Tin tức – Sự kiện". |
| 3 | **Chưa có hệ thống Tìm kiếm thông minh** (full-text + filter theo cấp/đơn vị/thời gian/loại tài liệu) | 🟠 Trung bình | Đầu tư Search engine (Meilisearch / Elastic) — đã có nút "Tìm kiếm" nhưng cần tài liệu hoá. |
| 4 | **Đa ngôn ngữ** (Việt / Anh tối thiểu — tiếng Anh cho báo chí quốc tế) | 🟠 Trung bình | i18n: VI mặc định, EN tuỳ chọn. Có thể bổ sung tiếng dân tộc cho khu vực đặc thù. |
| 5 | **Accessibility (WCAG 2.1 AA)** cho người khuyết tật | 🟠 Trung bình | Tăng tương phản, screen-reader friendly, phụ đề video, alt text. Website Nhà nước nên đạt mức AA. |
| 6 | **Mạng xã hội đồng hành** — tích hợp social wall (X, Facebook, TikTok, Instagram, Zalo) hiển thị hashtag chính thức | 🟠 Trung bình | Social Wall realtime với hashtag `#DaiHoiDoanXIII`, `#KhatVongCongHien`. |
| 7 | **Tích hợp Zalo OA + SMS Brand-name** | 🟡 Thấp | Đoàn viên VN dùng Zalo cao — bổ sung Zalo OA bên cạnh Messenger. |
| 8 | **Cơ chế Q&A / Hỏi-Đáp công khai** cho đại biểu & công chúng | 🟡 Thấp | Mục "Hỏi – Đáp" có moderation. |
| 9 | **Newsletter / Đăng ký nhận tin** qua email | 🟡 Thấp | Form đăng ký + email service. |
| 10 | **Trang Cảm ơn & Đối tác đồng hành** (sponsors, đơn vị bảo trợ) | 🟡 Thấp | Footer hoặc mục riêng. |
| 11 | **Trang 404 / 500 / Maintenance** thân thiện, theo nhận diện | 🟡 Thấp | Trang lỗi có nhận diện Đại hội + hướng dẫn quay lại. |
| 12 | **Cookie consent / Chính sách bảo mật** | 🔴 Cao | Bắt buộc theo Nghị định 13/2023 về bảo vệ dữ liệu cá nhân. |
| 13 | **Điều khoản sử dụng + Quy chế đăng tải nội dung** (cho mục "Gửi gắm") | 🔴 Cao | Tránh nội dung xấu, vi phạm pháp luật. |
| 14 | **Cơ chế tham quan ảo có hướng dẫn (Guided Tour)** cho Triển lãm 360° | 🟡 Thấp | Avatar dẫn đường + voice-over giới thiệu. |
| 15 | **Thống kê công khai** (visitor counter, lượt xem văn kiện, lượt gửi thông điệp) | 🟡 Thấp | Tăng độ minh bạch & sôi động. |

### Vấn đề kỹ thuật cần chốt sớm

1. **Đăng nhập Đại biểu:** dùng SSO của TƯ Đoàn? hay tài khoản riêng (username/SĐT + OTP)? — Khuyến nghị **SĐT + OTP** + xác thực 2 lớp (eKYC nếu cần).
2. **Bảo mật tài liệu mật:** watermark động theo user, chống screenshot (web), không cho tải về với tài liệu nhạy cảm.
3. **Hosting & CDN:** đề xuất hạ tầng trong nước (VNG Cloud / Viettel IDC / FPT Cloud) để tuân thủ luật & giảm độ trễ.
4. **Tải đỉnh:** Dự kiến 100k-500k CCU trong khung giờ khai mạc — cần kiến trúc autoscale + cache CDN cho static + queue cho realtime.
5. **Moderation:** AI lọc nội dung (hate speech, chính trị nhạy cảm) + duyệt thủ công cho "Bức tường kỳ vọng".

---

## B. CẤU TRÚC ĐỀ XUẤT (REVISED)

### B.1. Sơ đồ menu chính (sau cải tiến)

```
TRANG CHỦ
├── TIN TỨC – SỰ KIỆN
│   ├── Tin tức chuẩn bị Đại hội
│   ├── Tin Đại hội Đoàn các cấp
│   ├── Hoạt động chào mừng
│   └── Thông cáo báo chí
├── VỀ ĐẠI HỘI
│   ├── Giới thiệu chung
│   ├── Lịch trình Đại hội
│   ├── Lịch sử các kỳ Đại hội (Timeline)
│   ├── Biểu trưng & Nhận diện
│   └── Ban Tổ chức & Tiểu ban
├── VĂN KIỆN
│   ├── Dự thảo (đang lấy ý kiến)
│   ├── Tổng hợp ý kiến góp ý
│   └── Văn kiện chính thức
├── TRỰC TUYẾN ⭐ MỚI
│   ├── Lịch Livestream
│   ├── Phòng phát trực tiếp
│   └── Xem lại (Replay)
├── KHÔNG GIAN SỐ
│   ├── Triển lãm số 360° "Khát vọng cống hiến"
│   ├── Bản đồ số Đại hội
│   └── Đa phương tiện (Photo/Video/Podcast) ⭐ MỚI
├── TIẾNG NÓI TUỔI TRẺ
│   ├── Gửi thông điệp
│   ├── Bức tường kỳ vọng
│   ├── Word Cloud
│   └── Social Wall (#DaiHoiDoanXIII) ⭐ MỚI
├── DÀNH CHO ĐẠI BIỂU 🔒
├── DÀNH CHO BÁO CHÍ
└── TÌM KIẾM (icon)
```

### B.2. Bổ sung Footer (đầy đủ)

- Cột 1: Logo + giới thiệu ngắn Đại hội XIII
- Cột 2: Liên kết nhanh (Sitemap)
- Cột 3: Liên hệ (Tiểu ban Tuyên truyền + email + hotline)
- Cột 4: Mạng xã hội chính thức (FB, YouTube, TikTok, Zalo OA, X)
- Cột 5: Đăng ký nhận tin (Newsletter)
- Hàng dưới: © 2026 Trung ương Đoàn TNCS Hồ Chí Minh · Chính sách bảo mật · Điều khoản sử dụng · Cookie · Sitemap

### B.3. Bổ sung tính năng xuyên suốt

Ngoài 3 biểu tượng (Chatbot / Messenger / App), bổ sung:

- **Nút "Chia sẻ"** (share lên FB, Zalo, X, copy link).
- **Nút "Đóng góp ý kiến nhanh"** (mở popup form ngắn) — tách khỏi mục Văn kiện.
- **Thanh thông báo khẩn cấp (Emergency Banner)** ở đầu trang — dùng khi có thay đổi đột xuất lịch Đại hội, cảnh báo lừa đảo, v.v.
- **Toggle ngôn ngữ VI / EN** ở header.
- **A11y toolbar:** tăng/giảm cỡ chữ, độ tương phản cao, đọc văn bản (text-to-speech).

---

## C. ĐỀ XUẤT TECH STACK

| Lớp | Đề xuất | Lý do |
|-----|---------|-------|
| Frontend | **Next.js 16 (App Router) + TypeScript + Tailwind** | SEO tốt (SSR/ISR), hiệu năng, ecosystem mạnh. |
| 3D / 360° | **Three.js / React Three Fiber + GLB models** hoặc nền tảng **Matterport / Kuula** (SaaS) | Cân nhắc giữa flexibility (TS) và time-to-launch (SaaS). |
| Bản đồ | **MapLibre GL JS + GeoJSON 63 tỉnh** | Open-source, không phụ thuộc Google Maps, tự host được. |
| CMS | **Strapi v5 (headless)** hoặc **Payload CMS** | Khả năng tuỳ biến vai trò (đại biểu/báo chí/biên tập), API REST/GraphQL. |
| Search | **Meilisearch** | Nhẹ, tiếng Việt tốt, full-text instant. |
| Chatbot | **Gemini / GPT-4o-mini** + RAG trên văn kiện | Trả lời chính xác, có nguồn. |
| Auth Đại biểu | **NextAuth.js + OTP qua SMS (Viettel/MobiFone) + JWT** | Đơn giản, an toàn. |
| Streaming | **AntMedia / Wowza / YouTube Live embed + chat tự host** | YouTube Live thuận tiện nhất. |
| Hạ tầng | **VNG Cloud / Viettel IDC / FPT Cloud + Cloudflare CDN** | Tuân thủ luật, low-latency cho user VN. |
| Database | **PostgreSQL + Redis** | Mainstream, ổn định. |
| Monitoring | **Grafana + Prometheus + Sentry** | Quan sát realtime. |
| Email | **SendGrid / AWS SES / Amazon SES** | Newsletter & thông báo. |

---

## D. ROADMAP TRIỂN KHAI (DỰ KIẾN)

| Giai đoạn | Thời gian | Phạm vi |
|-----------|-----------|---------|
| **GĐ 1 – Foundation** | T-6 → T-5 (6 tháng → 5 tháng trước Đại hội) | Thiết kế UX/UI, dựng CMS, layout shell, brand kit, hạ tầng. |
| **GĐ 2 – Public Site** | T-5 → T-3 | Trang chủ, Tin tức, Về Đại hội, Văn kiện (dự thảo), Tìm kiếm, Footer, Đa ngôn ngữ. |
| **GĐ 3 – Interactive** | T-3 → T-2 | Triển lãm 360°, Bản đồ số, Word Cloud, Bức tường kỳ vọng, Social Wall, AI Chatbot. |
| **GĐ 4 – Portals** | T-2 → T-1 | Cổng Đại biểu (auth, lịch, tài liệu mật), Cổng Báo chí (press kit, media), Livestream room. |
| **GĐ 5 – Hardening** | T-1 → T-0 | Load test, security audit (pentest), A11y audit, SEO, backup/DR drill, training BTC. |
| **GĐ 6 – Đại hội** | T-0 | Vận hành 24/7, livestream, realtime monitoring, hot-fix team. |
| **GĐ 7 – Post-event** | T+1 → T+3 | Đăng tải văn kiện chính thức, video replay, e-magazine, lưu trữ vĩnh viễn. |

---

## E. KẾT LUẬN & ĐỀ XUẤT TIẾP THEO

1. **Phê duyệt sơ đồ menu bản revised** ở mục B.1 để chốt scope cứng.
2. **Quyết định 3 lựa chọn kỹ thuật then chốt:** (a) cơ chế đăng nhập đại biểu, (b) nền tảng Triển lãm 360° (tự dựng vs SaaS), (c) nhà cung cấp hạ tầng.
3. **Thành lập tổ thiết kế thương hiệu số** để chuẩn hoá: bộ màu, typography, motion guideline, dark/light mode.
4. **Soạn bộ quy chế đăng tải nội dung công khai** (mục "Gửi gắm") + chính sách bảo mật theo Nghị định 13/2023.
5. **Lên kế hoạch nội dung (Content Calendar)** từ T-6 đến T+3 để đảm bảo trang luôn "sống".

## F. CÂU HỎI MỞ / CHƯA RÕ

- Ngày khai mạc Đại hội XIII cụ thể? (ảnh hưởng đếm ngược + roadmap)
- Số lượng đại biểu chính thức dự kiến? (ảnh hưởng tải hệ thống auth)
- Có yêu cầu lưu trữ vĩnh viễn cho mục đích sử liệu không? (ảnh hưởng kiến trúc archive)
- Có ràng buộc về hạ tầng dùng chung với hệ thống TƯ Đoàn hiện hữu không?
- Ngân sách dự kiến cho 3D / Triển lãm 360°? (quyết định tự dựng vs SaaS)
- Có dự định phát hành App riêng của Đại hội XIII hay tận dụng App "Thanh niên Việt Nam"?
