// Dữ liệu 13 kỳ Đại hội Đoàn TNCS Hồ Chí Minh — dùng chung index.html + dai-hoi.html
// Mở rộng: thêm romanNum, slug, members (đoàn viên thời điểm đó), highlights, movements
window.KDH_DATA = [
  {
    id: 0, roman: 'I', yr: '1950', slug: 'dai-hoi-i-1950',
    title: 'Đại hội đại biểu toàn quốc Đoàn TN Cứu quốc Việt Nam lần thứ I',
    time: '7-14/02/1950', loc: 'Huyện Đại Từ, Thái Nguyên',
    theme: 'Chiến đấu và xây dựng tương lai',
    leader: 'Đồng chí Nguyễn Lam',
    delegates: '~400', members: '~50.000',
    movements: ['Tổng phản công kháng chiến chống Pháp', 'Thi đua sản xuất và học tập', 'Tham gia quân đội nhân dân'],
    desc: 'Đại hội lần thứ I là Đại hội đầu tiên của Đoàn được tổ chức trong thời kỳ kháng chiến chống thực dân Pháp xâm lược. Diễn ra tại chiến khu Việt Bắc, Đại hội đã quy tụ hàng trăm đại biểu thanh niên ưu tú từ khắp mọi miền đất nước về tham dự, đánh dấu bước phát triển mới của tổ chức Đoàn trong sự nghiệp đấu tranh giải phóng dân tộc. Đại hội đã đề ra nhiệm vụ động viên thanh niên hăng hái tham gia kháng chiến, thi đua sản xuất và học tập, xây dựng quân đội nhân dân và lực lượng vũ trang địa phương. Đồng chí Nguyễn Lam được bầu làm Bí thư thứ nhất Ban Chấp hành Trung ương Đoàn, mở ra trang sử mới cho phong trào thanh niên Việt Nam thời kỳ chống Pháp.'
  },
  {
    id: 1, roman: 'II', yr: '1956', slug: 'dai-hoi-ii-1956',
    title: 'Đại hội đại biểu toàn quốc Đoàn Thanh niên Lao động Việt Nam lần thứ II',
    time: '25/10-04/11/1956', loc: 'Thủ đô Hà Nội',
    theme: 'Xây dựng CNXH ở miền Bắc, đấu tranh thống nhất nước nhà',
    leader: 'Đồng chí Nguyễn Lam',
    delegates: '479', members: '~500.000',
    movements: ['Khôi phục kinh tế miền Bắc', 'Đấu tranh thống nhất Tổ quốc', 'Đoàn TN Lao động Việt Nam ra đời'],
    desc: 'Đại hội II diễn ra trong bối cảnh miền Bắc hoàn toàn giải phóng sau chiến thắng Điện Biên Phủ lịch sử và Hiệp định Geneva. Tại Đại hội này, tổ chức Đoàn được đổi tên thành Đoàn Thanh niên Lao động Việt Nam, phù hợp với giai đoạn cách mạng mới. Đại hội đề ra nhiệm vụ động viên thanh niên xung kích trong công cuộc xây dựng chủ nghĩa xã hội ở miền Bắc, đồng thời đấu tranh giải phóng miền Nam, thống nhất nước nhà.'
  },
  {
    id: 2, roman: 'III', yr: '1961', slug: 'dai-hoi-iii-1961',
    title: 'Đại hội đại biểu toàn quốc Đoàn Thanh niên Lao động Việt Nam lần thứ III',
    time: '22-25/03/1961', loc: 'Thủ đô Hà Nội',
    theme: 'Sống, chiến đấu, lao động, học tập theo gương Bác Hồ vĩ đại',
    leader: 'Đồng chí Vũ Quang',
    delegates: '677', members: '~1 triệu',
    movements: ['Phong trào "Ba sẵn sàng"', 'Sẵn sàng chiến đấu', 'Sẵn sàng đi bất cứ đâu Tổ quốc cần'],
    desc: 'Đại hội III phát động phong trào "Ba sẵn sàng" nổi tiếng, kêu gọi thanh niên sẵn sàng chiến đấu, sẵn sàng nhập ngũ, sẵn sàng đi bất cứ đâu khi Tổ quốc cần. Phong trào đã khơi dậy tinh thần yêu nước, ý chí cách mạng của hàng triệu thanh niên, góp phần quan trọng vào sự nghiệp giải phóng miền Nam, thống nhất đất nước. Đại hội cũng quyết định lấy ngày 26/3 hằng năm làm ngày truyền thống của Đoàn.'
  },
  {
    id: 3, roman: 'IV', yr: '1980', slug: 'dai-hoi-iv-1980',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ IV',
    time: '20-22/11/1980', loc: 'Thủ đô Hà Nội',
    theme: 'Xây dựng và bảo vệ Tổ quốc Việt Nam XHCN',
    leader: 'Đồng chí Đặng Quốc Bảo',
    delegates: '623', members: '~3 triệu',
    movements: ['Hàn gắn vết thương chiến tranh', 'Xây dựng vùng kinh tế mới', 'Bảo vệ biên giới phía Bắc và Tây Nam'],
    desc: 'Đại hội IV diễn ra sau khi đất nước hoàn toàn thống nhất, là Đại hội đầu tiên sau khi Đoàn được vinh dự mang tên Bác Hồ kính yêu. Đại hội đề ra nhiệm vụ động viên thanh niên xung kích trong công cuộc hàn gắn vết thương chiến tranh, khôi phục và phát triển kinh tế, xây dựng và bảo vệ Tổ quốc Việt Nam XHCN.'
  },
  {
    id: 4, roman: 'V', yr: '1987', slug: 'dai-hoi-v-1987',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ V',
    time: '27-30/11/1987', loc: 'Thủ đô Hà Nội',
    theme: 'Tuổi trẻ xung kích, sáng tạo trong sự nghiệp đổi mới',
    leader: 'Đồng chí Hà Quang Dự',
    delegates: '750', members: '~4 triệu',
    movements: ['Tuổi trẻ xung kích đổi mới', 'Lập nghiệp và làm giàu chính đáng'],
    desc: 'Đại hội V đánh dấu thời kỳ đổi mới của đất nước theo Nghị quyết Đại hội VI của Đảng. Đại hội đã đề ra nhiệm vụ động viên thanh niên xung kích thực hiện công cuộc đổi mới do Đảng khởi xướng và lãnh đạo. Phong trào thanh niên xung kích, lập nghiệp và làm giàu chính đáng được phát động mạnh mẽ.'
  },
  {
    id: 5, roman: 'VI', yr: '1992', slug: 'dai-hoi-vi-1992',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ VI',
    time: '15-18/10/1992', loc: 'Thủ đô Hà Nội',
    theme: 'Tuổi trẻ Việt Nam xây dựng và bảo vệ Tổ quốc',
    leader: 'Đồng chí Hồ Đức Việt',
    delegates: '797', members: '~4,5 triệu',
    movements: ['Phong trào "Thanh niên lập nghiệp"', 'Phong trào "Tuổi trẻ giữ nước"'],
    desc: 'Đại hội VI khẳng định vai trò xung kích của tuổi trẻ trong đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước. Đại hội đã phát động hai phong trào lớn: "Thanh niên lập nghiệp" hướng vào việc tổ chức cho thanh niên tham gia phát triển kinh tế - xã hội; và "Tuổi trẻ giữ nước" thể hiện trách nhiệm của tuổi trẻ trong sự nghiệp bảo vệ Tổ quốc.'
  },
  {
    id: 6, roman: 'VII', yr: '1997', slug: 'dai-hoi-vii-1997',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ VII',
    time: '26-29/11/1997', loc: 'Thủ đô Hà Nội',
    theme: 'Đoàn kết, vận động thanh niên thi đua học tập, lập nghiệp, lập thân, sẵn sàng bảo vệ Tổ quốc',
    leader: 'Đồng chí Vũ Trọng Kim',
    delegates: '899', members: '~5 triệu',
    movements: ['Phong trào "Thanh niên lập nghiệp"', '"Tuổi trẻ giữ nước"', '"Hành quân theo bước chân những người anh hùng"'],
    desc: 'Đại hội VII đánh dấu mốc son 65 năm thành lập Đoàn, được tổ chức trong bối cảnh đất nước đang đạt được những thành tựu to lớn trong công cuộc đổi mới. Đại hội đẩy mạnh phong trào "Thanh niên lập nghiệp" và "Tuổi trẻ giữ nước", đồng thời phát động phong trào "Hành quân theo bước chân những người anh hùng" và "Tiến bước dưới cờ Đảng".'
  },
  {
    id: 7, roman: 'VIII', yr: '2002', slug: 'dai-hoi-viii-2002',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ VIII',
    time: '08-11/12/2002', loc: 'Thủ đô Hà Nội',
    theme: 'Tuổi trẻ Việt Nam xung kích, sáng tạo vì sự nghiệp CNH, HĐH đất nước',
    leader: 'Đồng chí Hoàng Bình Quân → Đào Ngọc Dung',
    delegates: '898', members: '~5,5 triệu',
    movements: ['"Thi đua tình nguyện xây dựng và bảo vệ Tổ quốc"', '"Đồng hành với thanh niên lập thân, lập nghiệp"'],
    desc: 'Đại hội VIII diễn ra trong thiên niên kỷ mới với nhiều cơ hội và thách thức. Đại hội đề ra hai phong trào lớn xuyên suốt nhiệm kỳ: "Thi đua tình nguyện xây dựng và bảo vệ Tổ quốc" và "Đồng hành với thanh niên lập thân, lập nghiệp".'
  },
  {
    id: 8, roman: 'IX', yr: '2007', slug: 'dai-hoi-ix-2007',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ IX',
    time: '17-21/12/2007', loc: 'Thủ đô Hà Nội',
    theme: 'Sức trẻ Việt Nam xung kích, sáng tạo trong sự nghiệp CNH-HĐH đất nước và hội nhập quốc tế',
    leader: 'Đồng chí Võ Văn Thưởng',
    delegates: '999', members: '~6 triệu',
    movements: ['"5 xung kích phát triển kinh tế - xã hội và bảo vệ Tổ quốc"', '"4 đồng hành với thanh niên lập thân, lập nghiệp"'],
    desc: 'Đại hội IX diễn ra khi Việt Nam vừa gia nhập Tổ chức Thương mại Thế giới (WTO), mở ra cơ hội hội nhập quốc tế sâu rộng. Đại hội đẩy mạnh hai phong trào "5 xung kích" và "4 đồng hành" với thanh niên.'
  },
  {
    id: 9, roman: 'X', yr: '2012', slug: 'dai-hoi-x-2012',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ X',
    time: '11-14/12/2012', loc: 'Thủ đô Hà Nội',
    theme: 'Xây dựng Đoàn vững mạnh, tuổi trẻ Việt Nam xung kích, sáng tạo, đoàn kết, tình nguyện',
    leader: 'Đồng chí Nguyễn Đắc Vinh → Lê Quốc Phong',
    delegates: '999', members: '~6,5 triệu',
    movements: ['"Xung kích phát triển kinh tế - xã hội và bảo vệ Tổ quốc"', '"Đồng hành với thanh niên lập thân, lập nghiệp"'],
    desc: 'Đại hội X đánh dấu chặng đường 80 năm hình thành và phát triển của Đoàn TNCS Hồ Chí Minh. Đại hội tập trung vào ba khâu đột phá: xây dựng tổ chức Đoàn vững mạnh; nâng cao chất lượng đoàn viên; tăng cường công tác giáo dục chính trị, tư tưởng.'
  },
  {
    id: 10, roman: 'XI', yr: '2017', slug: 'dai-hoi-xi-2017',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XI',
    time: '10-13/12/2017', loc: 'Thủ đô Hà Nội',
    theme: 'Tuổi trẻ Việt Nam tiên phong, bản lĩnh, đoàn kết, sáng tạo, phát triển',
    leader: 'Đồng chí Lê Quốc Phong',
    delegates: '1.000', members: '~6,8 triệu',
    movements: ['"Thanh niên tình nguyện"', '"Tuổi trẻ sáng tạo"', '"Tuổi trẻ xung kích bảo vệ Tổ quốc"'],
    desc: 'Đại hội XI đánh dấu bước phát triển mới của Đoàn trong thời kỳ Cách mạng công nghiệp 4.0. Đại hội đề ra 3 phong trào lớn: "Thanh niên tình nguyện", "Tuổi trẻ sáng tạo", "Tuổi trẻ xung kích bảo vệ Tổ quốc" và 3 chương trình đồng hành với thanh niên.'
  },
  {
    id: 11, roman: 'XII', yr: '2022', slug: 'dai-hoi-xii-2022',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XII',
    time: '14-16/12/2022', loc: 'Thủ đô Hà Nội',
    theme: 'Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo',
    leader: 'Đồng chí Bùi Quang Huy',
    delegates: '980', members: '~7 triệu',
    movements: ['"Thanh niên tình nguyện"', '"Tuổi trẻ sáng tạo"', '"Tuổi trẻ xung kích bảo vệ Tổ quốc"'],
    desc: 'Đại hội XII diễn ra trong bối cảnh đất nước thực hiện Nghị quyết Đại hội XIII của Đảng với khát vọng phát triển đất nước phồn vinh, hạnh phúc, đến năm 2045 trở thành nước phát triển có thu nhập cao. Đại hội đề ra mục tiêu xây dựng thế hệ thanh niên Việt Nam phát triển toàn diện, đẩy mạnh chuyển đổi số trong công tác Đoàn.'
  },
  {
    id: 12, roman: 'XIII', yr: '2026', slug: 'dai-hoi-xiii-2026',
    title: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XIII',
    time: '26/06/2026', loc: 'Thủ đô Hà Nội',
    theme: 'Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo',
    leader: '(sẽ được bầu)',
    delegates: '~1.000', members: 'hơn 7 triệu',
    movements: ['"Thanh niên tình nguyện 4.0"', '"Tuổi trẻ chuyển đổi số"', '"Khát vọng cống hiến"'],
    desc: 'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XIII là sự kiện chính trị trọng đại của tuổi trẻ Việt Nam, đánh dấu giai đoạn phát triển mới của Đoàn trong sự nghiệp xây dựng và bảo vệ Tổ quốc XHCN. Đại hội sẽ tổng kết nhiệm kỳ 2022-2027, đề ra phương hướng, mục tiêu cho nhiệm kỳ 2026-2031 với khát vọng tiên phong, đóng góp xây dựng đất nước hùng cường, thịnh vượng, hiện thực hoá khát vọng phát triển Việt Nam đến năm 2045.'
  }
];
