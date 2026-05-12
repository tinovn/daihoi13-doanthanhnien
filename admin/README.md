# Admin CMS — Đại hội Đoàn XIII

**Payload CMS v3** + **Next.js 15** + **SQLite** — admin panel để quản lý nội dung website Đại hội Đoàn toàn quốc lần thứ XIII.

## ⚡ Đặc điểm

- **Code-first** — Định nghĩa collections trong TypeScript, admin UI auto-generated
- **Built-in REST + GraphQL API** — Tự động expose các endpoints `/api/*`
- **Beautiful Admin UI** — Tailwind-based, drag-drop, rich text, file upload
- **SQLite** — 1 file `daihoi13.db`, không cần MariaDB/Postgres
- **TypeScript** — Type-safe end-to-end
- **Nhẹ** — ~150MB node_modules, RAM ~150MB idle

## 📦 Cài đặt

### 1. Yêu cầu

```
Node.js >= 18.20
npm >= 10
```

### 2. Setup

```bash
cd admin
npm install --legacy-peer-deps
cp .env.example .env
# Sửa PAYLOAD_SECRET trong .env thành chuỗi random 32+ ký tự
```

### 3. Migrate + seed dữ liệu

```bash
# Tạo schema (tự động khi chạy lần đầu)
# Seed 13 kỳ Đại hội + admin user mặc định
npm run seed
```

### 4. Chạy dev

```bash
npm run dev
# Mở http://localhost:3000/admin
```

**Tài khoản admin mặc định:**
- Email: `admin@daihoi13.doanthanhnien.vn`
- Password: `ChangeMe@2026` *(đổi sau khi login lần đầu!)*

## 🗂️ Collections

| Collection | Mô tả |
|------------|-------|
| `users` | Admin users (super_admin / editor / reviewer) |
| `posts` | Tin tức / sự kiện / thông cáo báo chí |
| `dai-hoi` | 13 kỳ Đại hội Đoàn |
| `van-kien` | Tài liệu / văn kiện (PDF, DOC) |
| `thong-diep` | Thông điệp gửi Đại hội (cần duyệt) |
| `dai-bieu` | Đại biểu Đại hội XIII (auth riêng) |
| `map-status` | Trạng thái Đại hội cấp tỉnh trên bản đồ |
| `media` | Upload ảnh / file (auto-resize thumbnail/card/hero) |

**Globals:** `site-settings` — hero banner, countdown, liên hệ, social, app store.

## 🛣️ API Endpoints (Auto-generated)

### REST API

```
GET    /api/posts                    # List + filter + pagination
GET    /api/posts/:id                # Single post
POST   /api/posts                    # Create (auth required)
PATCH  /api/posts/:id                # Update (auth required)
DELETE /api/posts/:id                # Delete (auth required)

GET    /api/dai-hoi
GET    /api/van-kien
GET    /api/thong-diep
POST   /api/thong-diep               # Public submit (no auth)
GET    /api/map-status
GET    /api/globals/site-settings    # Site-wide settings

POST   /api/users/login              # Admin login
POST   /api/dai-bieu/login           # Delegate login
```

### GraphQL

```
POST   /api/graphql
GET    /api/graphql-playground       # Interactive playground
```

**Query examples:**
```graphql
{
  DaiHois(limit: 13, sort: "order") {
    docs { id roman year title leaderName timeRange theme }
  }
  Posts(where: { status: { equals: "published" }, isFeatured: { equals: true } }, limit: 5) {
    docs { id title slug excerpt featuredImage { url } publishedAt }
  }
}
```

## 📡 Frontend tích hợp

Website static (`../web/`) sẽ fetch từ Payload API thay vì hardcode:

```javascript
// web/script.js — load 13 kỳ Đại hội
const res = await fetch('https://admin.daihoi13.vn/api/dai-hoi?limit=13&sort=order');
const { docs } = await res.json();
window.KDH_DATA = docs;

// Thông điệp gửi
await fetch('https://admin.daihoi13.vn/api/thong-diep', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, location, message, status: 'pending' }),
});
```

CORS đã cấu hình cho:
- `https://tinovn.github.io`
- `https://daihoi13.doanthanhnien.vn`
- `http://localhost:*`

## 🏗️ Cấu trúc thư mục

```
admin/
├── payload.config.ts           # Main config
├── next.config.mjs
├── package.json
├── tsconfig.json
├── .env.example
├── src/
│   ├── app/
│   │   ├── (payload)/          # Admin + API routes
│   │   │   ├── admin/[[...segments]]/
│   │   │   ├── api/[...slug]/
│   │   │   ├── layout.tsx
│   │   │   └── importMap.js
│   │   ├── layout.tsx
│   │   └── page.tsx            # → redirect /admin
│   ├── collections/
│   │   ├── users.ts
│   │   ├── posts.ts
│   │   ├── dai-hoi.ts
│   │   ├── van-kien.ts
│   │   ├── thong-diep.ts
│   │   ├── dai-bieu.ts
│   │   ├── map-status.ts
│   │   └── media.ts
│   └── globals/
│       └── site-settings.ts
└── scripts/
    └── seed.ts
```

## 🚀 Deploy

### Vercel (đề xuất)

```bash
vercel deploy
# Auto build từ Git, set env vars trong dashboard
```

⚠️ SQLite không phù hợp Vercel (filesystem read-only). Cần migrate:
- **Vercel Postgres** (free tier 256MB)
- **Turso** (libSQL — SQLite compatible, serverless)
- **Supabase Postgres**

Đổi adapter trong `payload.config.ts`:
```ts
import { postgresAdapter } from '@payloadcms/db-postgres';
// hoặc
import { sqliteAdapter } from '@payloadcms/db-sqlite';
// với Turso libsql:
db: sqliteAdapter({
  client: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
})
```

### VPS

```bash
npm run build
npm start    # Production mode
# Reverse proxy Nginx → port 3000
# SQLite file: ./daihoi13.db (backup định kỳ)
```

## 🛡️ Bảo mật

- Auth built-in (Argon2id hash)
- Field-level access control
- CSRF protection
- Rate limiting (cần config)
- Sharp auto-optimize ảnh upload
- File upload validation (MIME + size)

## 🚧 TODO

- [ ] Generate `importMap.js` chuẩn: `npm run payload generate:importmap`
- [ ] Custom block cho richText (callout, embed video)
- [ ] Workflow approve cho `thong-diep` (hooks)
- [ ] OTP SMS cho đại biểu login
- [ ] Excel import đại biểu
- [ ] Audit log plugin
- [ ] Backup script `daihoi13.db` định kỳ
- [ ] Docker Compose

## 📚 Tài liệu

- [Plan đầy đủ](../plans/260512-1334-laravel-admin-cms/plan.md)
- [Payload Docs](https://payloadcms.com/docs)
- [Frontend repo](../web/)
