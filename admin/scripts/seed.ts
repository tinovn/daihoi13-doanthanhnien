/**
 * Seed script — chạy: npm run seed
 *
 * Tạo dữ liệu mẫu: admin user + 13 kỳ Đại hội + site-settings.
 */
import { getPayload } from 'payload';
import config from '../payload.config';

const DAI_HOI_SEED = [
  { roman: 'I', year: 1950, timeRange: '7-14/02/1950', location: 'Huyện Đại Từ, Thái Nguyên', leaderName: 'Đồng chí Nguyễn Lam', delegatesCount: '~400', membersCount: '~50.000', theme: 'Chiến đấu và xây dựng tương lai' },
  { roman: 'II', year: 1956, timeRange: '25/10-04/11/1956', location: 'Thủ đô Hà Nội', leaderName: 'Đồng chí Nguyễn Lam', delegatesCount: '479', membersCount: '~500.000', theme: 'Xây dựng CNXH ở miền Bắc, đấu tranh thống nhất nước nhà' },
  { roman: 'III', year: 1961, timeRange: '22-25/03/1961', location: 'Thủ đô Hà Nội', leaderName: 'Đồng chí Vũ Quang', delegatesCount: '677', membersCount: '~1 triệu', theme: 'Sống, chiến đấu, lao động, học tập theo gương Bác Hồ' },
  { roman: 'IV', year: 1980, timeRange: '20-22/11/1980', location: 'Thủ đô Hà Nội', leaderName: 'Đồng chí Đặng Quốc Bảo', delegatesCount: '623', membersCount: '~3 triệu', theme: 'Xây dựng và bảo vệ Tổ quốc Việt Nam XHCN' },
  { roman: 'V', year: 1987, timeRange: '27-30/11/1987', location: 'Thủ đô Hà Nội', leaderName: 'Đồng chí Hà Quang Dự', delegatesCount: '750', membersCount: '~4 triệu', theme: 'Tuổi trẻ xung kích, sáng tạo trong sự nghiệp đổi mới' },
  { roman: 'VI', year: 1992, timeRange: '15-18/10/1992', location: 'Thủ đô Hà Nội', leaderName: 'Đồng chí Hồ Đức Việt', delegatesCount: '797', membersCount: '~4,5 triệu', theme: 'Tuổi trẻ Việt Nam xây dựng và bảo vệ Tổ quốc' },
  { roman: 'VII', year: 1997, timeRange: '26-29/11/1997', location: 'Thủ đô Hà Nội', leaderName: 'Đồng chí Vũ Trọng Kim', delegatesCount: '899', membersCount: '~5 triệu', theme: 'Đoàn kết, học tập, lập nghiệp' },
  { roman: 'VIII', year: 2002, timeRange: '08-11/12/2002', location: 'Thủ đô Hà Nội', leaderName: 'Đ/c Hoàng Bình Quân → Đào Ngọc Dung', delegatesCount: '898', membersCount: '~5,5 triệu', theme: 'Xung kích sáng tạo vì CNH-HĐH' },
  { roman: 'IX', year: 2007, timeRange: '17-21/12/2007', location: 'Thủ đô Hà Nội', leaderName: 'Đồng chí Võ Văn Thưởng', delegatesCount: '999', membersCount: '~6 triệu', theme: 'Sức trẻ Việt Nam xung kích, sáng tạo' },
  { roman: 'X', year: 2012, timeRange: '11-14/12/2012', location: 'Thủ đô Hà Nội', leaderName: 'Đ/c Nguyễn Đắc Vinh → Lê Quốc Phong', delegatesCount: '999', membersCount: '~6,5 triệu', theme: 'Xung kích, sáng tạo, đoàn kết, tình nguyện' },
  { roman: 'XI', year: 2017, timeRange: '10-13/12/2017', location: 'Thủ đô Hà Nội', leaderName: 'Đồng chí Lê Quốc Phong', delegatesCount: '1.000', membersCount: '~6,8 triệu', theme: 'Tiên phong, bản lĩnh, đoàn kết, sáng tạo, phát triển' },
  { roman: 'XII', year: 2022, timeRange: '14-16/12/2022', location: 'Thủ đô Hà Nội', leaderName: 'Đồng chí Bùi Quang Huy', delegatesCount: '980', membersCount: '~7 triệu', theme: 'Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo' },
  { roman: 'XIII', year: 2026, timeRange: '26/06/2026', location: 'Thủ đô Hà Nội', leaderName: '(sẽ được bầu)', delegatesCount: '~1.000', membersCount: 'hơn 7 triệu', theme: 'Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo' },
];

async function seed() {
  const payload = await getPayload({ config });
  console.log('🌱 Bắt đầu seed dữ liệu...');

  // 1. Admin user
  const adminExists = await payload.find({
    collection: 'users',
    where: { email: { equals: 'admin@daihoi13.doanthanhnien.vn' } },
    limit: 1,
  });
  if (adminExists.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        name: 'Super Admin',
        email: 'admin@daihoi13.doanthanhnien.vn',
        password: 'ChangeMe@2026',
        role: 'super_admin',
      },
    });
    console.log('✓ Tạo admin: admin@daihoi13.doanthanhnien.vn / ChangeMe@2026');
  }

  // 2. 13 kỳ Đại hội
  for (const [i, dh] of DAI_HOI_SEED.entries()) {
    const exists = await payload.find({
      collection: 'dai-hoi',
      where: { roman: { equals: dh.roman } },
      limit: 1,
    });
    if (exists.docs.length === 0) {
      await payload.create({
        collection: 'dai-hoi',
        data: {
          ...dh,
          slug: `dai-hoi-${dh.roman.toLowerCase()}-${dh.year}`,
          title: `Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ ${dh.roman}`,
          order: i,
        },
      });
      console.log(`✓ Đại hội ${dh.roman} (${dh.year})`);
    }
  }

  console.log('✅ Seed xong!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Seed lỗi:', err);
  process.exit(1);
});
