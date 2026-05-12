# Backend Admin CMS — Đại hội Đoàn XIII

Laravel 11 + Inertia.js + Vue 3 + MariaDB CMS để quản lý dữ liệu cho website Đại hội Đoàn toàn quốc lần thứ XIII.

## 🏗️ Tech Stack

- **PHP 8.3+** / **Laravel 11**
- **Inertia.js** + **Vue 3** + **Tailwind CSS** (admin UI)
- **MariaDB 10.11+** (database)
- **Laravel Breeze** (auth scaffolding)
- **Vite** (build)

## 📦 Cài đặt

### 1. Yêu cầu

```bash
php >= 8.3
composer >= 2.5
node >= 20
mariadb >= 10.11   # hoặc mysql >= 8.0
```

### 2. Setup

```bash
cd backend
composer install
npm install
cp .env.example .env
php artisan key:generate
```

### 3. Database

Tạo database `daihoi13` trên MariaDB:

```sql
CREATE DATABASE daihoi13 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Cấu hình `.env`:

```dotenv
DB_CONNECTION=mariadb
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=daihoi13
DB_USERNAME=root
DB_PASSWORD=
```

Chạy migrations + seed dữ liệu 13 kỳ Đại hội:

```bash
php artisan migrate --seed
```

### 4. Chạy dev

```bash
# Terminal 1: Laravel server
php artisan serve

# Terminal 2: Vite dev server
npm run dev
```

Truy cập: <http://localhost:8000/admin>

Tài khoản admin mặc định:
- Email: `admin@daihoi13.doanthanhnien.vn`
- Password: `ChangeMe@2026` *(nhớ đổi sau khi login)*

## 🛣️ Routes

### Admin (Inertia)
- `GET /admin` — Dashboard với stats + recent activity
- `GET /admin/posts` — Quản lý tin tức (filter + search)
- `POST /admin/posts` — Tạo bài viết
- `PUT /admin/posts/{id}` — Cập nhật
- `DELETE /admin/posts/{id}` — Xoá (soft delete)

### Public API (JSON, CORS-enabled)
- `GET /api/v1/posts?category=chuan_bi&per_page=12`
- `GET /api/v1/posts/{slug}`
- `GET /api/v1/dai-hoi` — 13 kỳ Đại hội
- `GET /api/v1/dai-hoi/{id|roman}`
- `GET /api/v1/thong-diep` — Thông điệp đã duyệt
- `POST /api/v1/thong-diep` — Gửi thông điệp (rate limit 5/phút/IP)

## 🗂️ Database Schema

| Bảng | Mô tả |
|------|-------|
| `users` | Admin users (super_admin, editor, reviewer) |
| `posts` | Tin tức / sự kiện / thông cáo báo chí (soft delete) |
| `dai_hoi` | 13 kỳ Đại hội Đoàn (seeded sẵn) |
| `van_kien` | Tài liệu / văn kiện (5 type) |
| `thong_diep` | Thông điệp gửi Đại hội (cần duyệt) |
| `dai_bieu` | Đại biểu Đại hội XIII (auth riêng) |
| `map_status` | Trạng thái Đại hội cấp tỉnh trên bản đồ |
| `settings` | Site-wide config (key-value, cached) |

## 📡 Frontend tích hợp

Website static (`../web/`) sẽ fetch API endpoints để load dữ liệu động:

```javascript
// web/script.js — sau khi migrate
fetch('https://api.daihoi13.doanthanhnien.vn/api/v1/dai-hoi')
  .then(r => r.json())
  .then(({ data }) => {
    window.KDH_DATA = data;
    initKydaihoiSlider();
  });
```

CORS đã cấu hình cho:
- `https://tinovn.github.io`
- `https://daihoi13.doanthanhnien.vn`
- `http://localhost:*`

## 🛡️ Bảo mật

- CSRF protection (Laravel default)
- Rate limit login (5 attempts / 15 min)
- Rate limit `POST /api/v1/thong-diep` (5 lần / phút / IP)
- Soft delete cho posts
- Password hash bcrypt cost 12
- Session timeout 2h
- IP address logged cho user-generated content

## 🚧 TODO Roadmap

- [ ] Controllers cho Đại hội, Văn kiện, Thông điệp, Đại biểu, MapStatus, Settings
- [ ] Inertia Vue pages cho các resource trên
- [ ] Rich text editor (TipTap) cho post content
- [ ] Image uploader (drag-drop) với Spatie Media Library
- [ ] Delegate portal (`/delegate/*`) — login OTP SMS
- [ ] Watermark PDF cho tài liệu mật
- [ ] Excel import đại biểu (Maatwebsite/Laravel-Excel)
- [ ] Audit log model + middleware
- [ ] Docker Compose setup
- [ ] CI/CD GitHub Actions (test + deploy)
- [ ] Test suite (Pest)
- [ ] Cache Redis cho production

## 📚 Tài liệu liên quan

- [Plan đầy đủ kiến trúc](../plans/260512-1334-laravel-admin-cms/plan.md)
- [Frontend repo](../web/) — Static HTML deployed on GitHub Pages
