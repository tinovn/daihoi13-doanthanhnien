<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\DaiHoi;
use Illuminate\Database\Seeder;

/**
 * Seed 13 kỳ Đại hội Đoàn TNCS Hồ Chí Minh — đồng bộ với web/kdh-data.js.
 */
class DaiHoiSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            ['roman' => 'I', 'year' => 1950, 'time_range' => '7-14/02/1950', 'location' => 'Huyện Đại Từ, Thái Nguyên', 'leader_name' => 'Đồng chí Nguyễn Lam', 'delegates_count' => '~400', 'members_count' => '~50.000', 'theme' => 'Chiến đấu và xây dựng tương lai', 'movements' => ['Tổng phản công kháng chiến chống Pháp', 'Thi đua sản xuất và học tập', 'Tham gia quân đội nhân dân']],
            ['roman' => 'II', 'year' => 1956, 'time_range' => '25/10-04/11/1956', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Nguyễn Lam', 'delegates_count' => '479', 'members_count' => '~500.000', 'theme' => 'Xây dựng CNXH ở miền Bắc, đấu tranh thống nhất nước nhà', 'movements' => ['Khôi phục kinh tế miền Bắc', 'Đoàn TN Lao động Việt Nam ra đời']],
            ['roman' => 'III', 'year' => 1961, 'time_range' => '22-25/03/1961', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Vũ Quang', 'delegates_count' => '677', 'members_count' => '~1 triệu', 'theme' => 'Sống, chiến đấu, lao động, học tập theo gương Bác Hồ vĩ đại', 'movements' => ['Phong trào "Ba sẵn sàng"']],
            ['roman' => 'IV', 'year' => 1980, 'time_range' => '20-22/11/1980', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Đặng Quốc Bảo', 'delegates_count' => '623', 'members_count' => '~3 triệu', 'theme' => 'Xây dựng và bảo vệ Tổ quốc Việt Nam XHCN', 'movements' => ['Tuổi trẻ xung kích xây dựng và bảo vệ Tổ quốc']],
            ['roman' => 'V', 'year' => 1987, 'time_range' => '27-30/11/1987', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Hà Quang Dự', 'delegates_count' => '750', 'members_count' => '~4 triệu', 'theme' => 'Tuổi trẻ xung kích, sáng tạo trong sự nghiệp đổi mới', 'movements' => ['Lập nghiệp và làm giàu chính đáng']],
            ['roman' => 'VI', 'year' => 1992, 'time_range' => '15-18/10/1992', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Hồ Đức Việt', 'delegates_count' => '797', 'members_count' => '~4,5 triệu', 'theme' => 'Tuổi trẻ Việt Nam xây dựng và bảo vệ Tổ quốc', 'movements' => ['Thanh niên lập nghiệp', 'Tuổi trẻ giữ nước']],
            ['roman' => 'VII', 'year' => 1997, 'time_range' => '26-29/11/1997', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Vũ Trọng Kim', 'delegates_count' => '899', 'members_count' => '~5 triệu', 'theme' => 'Đoàn kết, học tập, lập nghiệp, sẵn sàng bảo vệ Tổ quốc', 'movements' => ['Thanh niên lập nghiệp', 'Tuổi trẻ giữ nước', 'Hành quân theo bước chân những người anh hùng']],
            ['roman' => 'VIII', 'year' => 2002, 'time_range' => '08-11/12/2002', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Hoàng Bình Quân → Đào Ngọc Dung', 'delegates_count' => '898', 'members_count' => '~5,5 triệu', 'theme' => 'Xung kích sáng tạo vì CNH, HĐH đất nước', 'movements' => ['Thi đua tình nguyện xây dựng và bảo vệ Tổ quốc', 'Đồng hành với thanh niên lập thân lập nghiệp']],
            ['roman' => 'IX', 'year' => 2007, 'time_range' => '17-21/12/2007', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Võ Văn Thưởng', 'delegates_count' => '999', 'members_count' => '~6 triệu', 'theme' => 'Sức trẻ Việt Nam xung kích, sáng tạo trong CNH-HĐH và hội nhập', 'movements' => ['5 xung kích phát triển kinh tế - xã hội', '4 đồng hành với thanh niên']],
            ['roman' => 'X', 'year' => 2012, 'time_range' => '11-14/12/2012', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Nguyễn Đắc Vinh → Lê Quốc Phong', 'delegates_count' => '999', 'members_count' => '~6,5 triệu', 'theme' => 'Tuổi trẻ Việt Nam xung kích, sáng tạo, đoàn kết, tình nguyện', 'movements' => ['Xung kích phát triển KT-XH và bảo vệ Tổ quốc', 'Đồng hành với thanh niên lập thân lập nghiệp']],
            ['roman' => 'XI', 'year' => 2017, 'time_range' => '10-13/12/2017', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Lê Quốc Phong', 'delegates_count' => '1.000', 'members_count' => '~6,8 triệu', 'theme' => 'Tuổi trẻ Việt Nam tiên phong, bản lĩnh, đoàn kết, sáng tạo, phát triển', 'movements' => ['Thanh niên tình nguyện', 'Tuổi trẻ sáng tạo', 'Tuổi trẻ xung kích bảo vệ Tổ quốc']],
            ['roman' => 'XII', 'year' => 2022, 'time_range' => '14-16/12/2022', 'location' => 'Thủ đô Hà Nội', 'leader_name' => 'Đồng chí Bùi Quang Huy', 'delegates_count' => '980', 'members_count' => '~7 triệu', 'theme' => 'Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo', 'movements' => ['Thanh niên tình nguyện', 'Tuổi trẻ sáng tạo', 'Tuổi trẻ xung kích bảo vệ Tổ quốc']],
            ['roman' => 'XIII', 'year' => 2026, 'time_range' => '26/06/2026', 'location' => 'Thủ đô Hà Nội', 'leader_name' => '(sẽ được bầu)', 'delegates_count' => '~1.000', 'members_count' => 'hơn 7 triệu', 'theme' => 'Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo', 'movements' => ['Thanh niên tình nguyện 4.0', 'Tuổi trẻ chuyển đổi số', 'Khát vọng cống hiến']],
        ];

        foreach ($data as $i => $row) {
            $slug = 'dai-hoi-' . strtolower($row['roman']) . '-' . $row['year'];
            DaiHoi::updateOrCreate(
                ['roman' => $row['roman']],
                array_merge($row, [
                    'slug' => $slug,
                    'title' => "Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ {$row['roman']}",
                    'order' => $i,
                ])
            );
        }
    }
}
