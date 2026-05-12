import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

import { Users } from './src/collections/users';
import { Posts } from './src/collections/posts';
import { DaiHoi } from './src/collections/dai-hoi';
import { VanKien } from './src/collections/van-kien';
import { ThongDiep } from './src/collections/thong-diep';
import { DaiBieu } from './src/collections/dai-bieu';
import { MapStatus } from './src/collections/map-status';
import { Media } from './src/collections/media';
import { SiteSettings } from './src/globals/site-settings';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    meta: {
      title: 'Đại hội Đoàn XIII — CMS',
      description: 'Quản lý nội dung Đại hội Đoàn toàn quốc lần thứ XIII',
    },
  },
  collections: [Users, Posts, DaiHoi, VanKien, ThongDiep, DaiBieu, MapStatus, Media],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  typescript: { outputFile: path.resolve(dirname, 'src/payload-types.ts') },
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URI || 'file:./daihoi13.db' },
  }),
  sharp,
  cors: ['https://tinovn.github.io', 'https://daihoi13.doanthanhnien.vn', 'http://localhost:*'],
  csrf: ['https://tinovn.github.io', 'https://daihoi13.doanthanhnien.vn'],
  i18n: { supportedLanguages: { vi: 'vi' as never, en: 'en' as never } },
});
