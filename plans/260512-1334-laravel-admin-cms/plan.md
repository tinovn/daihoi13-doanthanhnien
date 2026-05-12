# Plan: Laravel + Inertia + MariaDB Admin CMS cho Đại hội Đoàn XIII

**Mục tiêu:** Xây dựng admin panel để cập nhật dữ liệu cho toàn bộ website (Tin tức, Kỳ Đại hội, Văn kiện, Thông điệp, Đại biểu, Settings).

---

## 🏗️ Kiến trúc tổng thể

```
┌─────────────────────────────────────────────────────────┐
│                  daihoi13.doanthanhnien.vn              │
└─────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                                   ▼
┌──────────────────┐              ┌────────────────────┐
│  Public Site     │              │  Admin Panel       │
│  (HTML/CSS/JS)   │◄── fetch ───►│  (Laravel + Inertia│
│  GitHub Pages    │   JSON API   │   + Vue 3)         │
└──────────────────┘              │  /admin/*          │
        ▲                         └────────┬───────────┘
        │                                  │
        └─── load data ────────────────────┤
                                           ▼
                              ┌──────────────────────────┐
                              │      MariaDB 10.11       │
                              │  posts, dai_hoi, van_kien│
                              │  thong_diep, settings... │
                              └──────────────────────────┘
```

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Laravel 11 + PHP 8.3+ |
| **Frontend Admin** | Inertia.js + Vue 3 + Tailwind CSS |
| **Database** | MariaDB 10.11+ |
| **Auth** | Laravel Breeze (admin login) |
| **API** | Laravel API resources (JSON) cho public site |
| **File Storage** | Local storage (sau migrate AWS S3) |
| **Build** | Vite |
| **Queue** | Database driver (sau Redis) |

## 🗂️ Database Schema

### `users` (admin users)
| Field | Type | Note |
|-------|------|------|
| id | bigint PK | |
| name | varchar(100) | |
| email | varchar(120) unique | |
| password | varchar(255) | hash |
| role | enum('super_admin', 'editor', 'reviewer') | |
| email_verified_at | timestamp nullable | |
| created_at, updated_at | timestamp | |

### `posts` (Tin tức – Sự kiện)
| Field | Type |
|-------|------|
| id | bigint PK |
| title | varchar(255) |
| slug | varchar(255) unique |
| category | enum('chuan_bi', 'cac_cap', 'chao_mung', 'thong_cao') |
| excerpt | text |
| content | longtext (HTML) |
| featured_image | varchar(500) nullable |
| views | int default 0 |
| is_featured | boolean default false |
| status | enum('draft', 'published') |
| published_at | timestamp nullable |
| author_id | bigint FK users |
| created_at, updated_at | |

### `dai_hoi` (13 kỳ Đại hội)
| Field | Type |
|-------|------|
| id | bigint PK |
| roman | varchar(10) (I, II, ..., XIII) |
| year | smallint (1950, ..., 2026) |
| slug | varchar(100) unique |
| title | varchar(500) |
| time_range | varchar(100) (vd: '26-30/06/2026') |
| location | varchar(255) |
| theme | text |
| leader_name | varchar(255) |
| leader_photo | varchar(500) nullable |
| delegates_count | varchar(50) |
| members_count | varchar(50) |
| movements | json (array phong trào) |
| description | longtext |
| highlights | json (3-5 bullets nổi bật) |
| gallery_images | json (array URLs) |
| documents | json (array {title, url, type, size}) |
| order | int default 0 |
| created_at, updated_at | |

### `van_kien` (Tài liệu Đại hội)
| Field | Type |
|-------|------|
| id | bigint PK |
| dai_hoi_id | bigint FK nullable |
| type | enum('du_thao', 'gop_y', 'chinh_thuc', 'infographic', 'emagazine') |
| title | varchar(500) |
| description | text |
| file_url | varchar(500) |
| file_size | varchar(20) |
| file_type | varchar(10) (PDF, DOC, ...) |
| download_count | int default 0 |
| published_at | timestamp |
| created_at, updated_at | |

### `thong_diep` (Thông điệp gửi Đại hội)
| Field | Type |
|-------|------|
| id | bigint PK |
| name | varchar(200) |
| location | varchar(200) (đơn vị/địa phương) |
| message | text |
| image_url | varchar(500) nullable |
| keywords | json (array từ khóa) |
| status | enum('pending', 'approved', 'rejected') |
| approved_by | bigint FK users nullable |
| approved_at | timestamp nullable |
| ip_address | varchar(45) |
| created_at, updated_at | |

### `dai_bieu` (Đại biểu Đại hội XIII)
| Field | Type |
|-------|------|
| id | bigint PK |
| code | varchar(20) unique (mã đại biểu DB001234) |
| cccd | varchar(20) (CCCD nullable) |
| name | varchar(200) |
| email | varchar(120) |
| phone | varchar(20) |
| province | varchar(100) |
| organization | varchar(255) |
| password | varchar(255) (hash, login) |
| status | enum('active', 'suspended') |
| last_login_at | timestamp nullable |
| created_at, updated_at | |

### `bao_dia_phuong_status` (Bản đồ số Đại hội các cấp)
| Field | Type |
|-------|------|
| id | bigint PK |
| province | varchar(100) unique |
| event_date | date nullable |
| delegates | int nullable |
| status | enum('completed', 'ongoing', 'preparing', 'not_yet') |
| notes | text nullable |
| updated_at | |

### `settings` (Site-wide config)
| Field | Type |
|-------|------|
| id | bigint PK |
| `key` | varchar(100) unique |
| value | text |
| type | enum('string', 'number', 'json', 'image') |
| group | varchar(50) (hero, footer, contact...) |
| updated_at | |

Keys ví dụ: `hero_banner_image`, `countdown_target_date`, `phone`, `email`, `social_facebook`, `app_store_url`, `play_store_url`.

---

## 🛣️ Routes

### Admin (web.php) — `/admin/*` với Inertia
- `GET /admin/login` — Login page
- `POST /admin/login` — Authenticate
- `GET /admin` — Dashboard (stats, recent activity)
- **Posts:**
  - `GET /admin/posts` — List + filter
  - `GET /admin/posts/create` — Create form
  - `POST /admin/posts` — Store
  - `GET /admin/posts/{id}/edit` — Edit form
  - `PUT /admin/posts/{id}` — Update
  - `DELETE /admin/posts/{id}` — Soft delete
- **Đại hội:** `/admin/dai-hoi/*` (resource)
- **Văn kiện:** `/admin/van-kien/*` (resource)
- **Thông điệp:** `/admin/thong-diep/*` (list + approve/reject)
- **Đại biểu:** `/admin/dai-bieu/*`
- **Settings:** `GET /admin/settings`, `PUT /admin/settings`
- **Map status:** `/admin/map-status`
- **Users:** `/admin/users` (super_admin only)

### Public API (api.php) — `/api/v1/*` JSON
- `GET /api/v1/posts` — List published posts (pagination, filter)
- `GET /api/v1/posts/{slug}` — Single post
- `GET /api/v1/dai-hoi` — All 13 kỳ
- `GET /api/v1/dai-hoi/{id}` — Single kỳ
- `GET /api/v1/van-kien` — List documents
- `POST /api/v1/thong-diep` — Submit message (with rate limit)
- `GET /api/v1/thong-diep` — Approved messages only
- `GET /api/v1/map-status` — 63 tỉnh status
- `GET /api/v1/settings` — Public settings (hero, countdown, social...)

### Delegate portal (web.php) — `/delegate/*`
- `GET /delegate/login`
- `POST /delegate/login`
- `GET /delegate/dashboard` — Lịch + tài liệu

---

## 📁 Cấu trúc thư mục

```
/Users/binhtino/dhd/
├── web/                          # Frontend (giữ nguyên)
│   ├── index.html
│   ├── *.html (8 pages)
│   ├── styles.css
│   ├── script.js
│   ├── kdh-data.js              # Sẽ replace với fetch API
│   └── assets/
│
├── backend/                      # NEW - Laravel admin
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   ├── Admin/       # Inertia pages
│   │   │   │   │   ├── DashboardController.php
│   │   │   │   │   ├── PostController.php
│   │   │   │   │   ├── DaiHoiController.php
│   │   │   │   │   ├── VanKienController.php
│   │   │   │   │   ├── ThongDiepController.php
│   │   │   │   │   ├── DaiBieuController.php
│   │   │   │   │   └── SettingController.php
│   │   │   │   └── Api/         # Public JSON API
│   │   │   │       ├── PostApiController.php
│   │   │   │       ├── DaiHoiApiController.php
│   │   │   │       └── ...
│   │   │   ├── Middleware/
│   │   │   ├── Requests/        # Form requests + validation
│   │   │   └── Resources/       # API Resources
│   │   ├── Models/
│   │   │   ├── User.php
│   │   │   ├── Post.php
│   │   │   ├── DaiHoi.php
│   │   │   ├── VanKien.php
│   │   │   ├── ThongDiep.php
│   │   │   ├── DaiBieu.php
│   │   │   ├── MapStatus.php
│   │   │   └── Setting.php
│   │   └── Policies/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── resources/
│   │   ├── js/
│   │   │   ├── Pages/Admin/
│   │   │   │   ├── Dashboard.vue
│   │   │   │   ├── Posts/{Index,Create,Edit}.vue
│   │   │   │   ├── DaiHoi/{Index,Edit}.vue
│   │   │   │   └── ...
│   │   │   ├── Layouts/AdminLayout.vue
│   │   │   ├── Components/
│   │   │   └── app.js
│   │   ├── css/app.css          # Tailwind
│   │   └── views/app.blade.php  # Root template
│   ├── routes/
│   │   ├── web.php              # Admin Inertia routes
│   │   ├── api.php              # Public API
│   │   └── auth.php             # Login routes
│   ├── config/
│   ├── .env.example
│   ├── composer.json
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── plans/
└── docs/
```

---

## 🔐 Authentication & Authorization

### Admin
- Laravel Breeze (Inertia + Vue stack)
- Sessions cookie-based
- Roles: `super_admin`, `editor`, `reviewer`
- Policies cho từng model
- Rate limit login (5 attempts / 15 min)

### Delegate
- Custom auth guard `delegate`
- Login bằng code + CCCD + OTP (gửi SMS)
- 2FA tuỳ chọn (Google Authenticator)

### Public API
- Open `GET` endpoints (cached)
- `POST /thong-diep` rate limit 5/min/ip + reCAPTCHA
- API keys cho integration (sau)

---

## 🎨 Admin UI (Inertia + Vue 3 + Tailwind)

### Layout
- Sidebar trái (red Đoàn theme):
  - Logo + admin avatar
  - Menu: Dashboard, Tin tức, Đại hội, Văn kiện, Thông điệp, Đại biểu, Bản đồ, Settings, Users
- Top bar: search, notifications, user dropdown
- Main: content area + breadcrumb

### Components dùng chung
- `<DataTable>` — table với sort/filter/pagination/search
- `<FormCard>` — wrapper form
- `<RichTextEditor>` — TipTap hoặc Tinymce cho content posts
- `<ImageUploader>` — drag-drop image với preview
- `<MultiInput>` — array input (cho movements, highlights)
- `<StatusBadge>` — pill badge cho status
- `<ConfirmDialog>` — modal xác nhận delete
- `<Toast>` — notification

### Charts (dashboard)
- Chart.js hoặc ApexCharts
- Stats: posts/month, views, messages pending, map progress

---

## 🚀 Migration plan từ static → dynamic

### Phase 1: Setup backend (1 tuần)
- Bootstrap Laravel 11 + Inertia + Breeze
- Migrations + Models cho 7 entities
- Seeders với data hiện tại (13 kỳ đại hội từ kdh-data.js)
- Admin login + dashboard
- CRUD posts (Tin tức)

### Phase 2: Hoàn thiện CRUD (1 tuần)
- CRUD đại hội, văn kiện, settings
- Approve workflow cho thông điệp
- Manage đại biểu + import Excel
- Map status bulk edit

### Phase 3: Public API + Frontend integration (1 tuần)
- API endpoints + Resources
- Cache (Redis hoặc file)
- Frontend HTML pages fetch từ API thay vì hardcode
- `kdh-data.js` → fetch `/api/v1/dai-hoi`
- News page → fetch `/api/v1/posts`
- Thông điệp → POST `/api/v1/thong-diep`

### Phase 4: Delegate portal (3-4 ngày)
- Login form + OTP SMS
- Dashboard cá nhân (lịch, tài liệu)
- Watermark PDF tự động

### Phase 5: DevOps (3-4 ngày)
- Docker compose (Laravel + MariaDB + Nginx)
- CI/CD GitHub Actions
- Staging server (VNG Cloud / Viettel IDC)
- Backup tự động
- Monitoring (Sentry + Grafana)

---

## 🛡️ Bảo mật

- HTTPS bắt buộc (Cloudflare)
- CSRF token (Inertia tự xử lý)
- XSS escape ở mọi nơi (Vue + Blade `{{ }}`)
- SQL injection an toàn nhờ Eloquent
- Rate limit API + login
- File upload validation (MIME type, size, dimensions)
- Audit log mọi action admin (model `AuditLog`)
- Password hash bcrypt (cost 12)
- Session timeout 2h idle
- IP whitelist tuỳ chọn cho super_admin

---

## 📋 Câu hỏi mở

- Hosting backend: VNG Cloud / Viettel IDC / FPT Cloud — nhà cung cấp nào?
- SSL: Let's Encrypt qua Cloudflare hay cert tự cung cấp?
- SMS gateway cho OTP đại biểu: Viettel / MobiFone / VNPT?
- Backup: daily đến cloud storage nào?
- Plan có cần multi-tenant không (cho Đoàn cấp tỉnh dùng chung)?
