// Đại hội Đoàn XIII - Homepage interactions

(function () {
  'use strict';

  // ===== Countdown Timer =====
  // Mục tiêu: Khai mạc Đại hội Đoàn XIII — 26/06/2026 08:00 (sáng)
  function initCountdown() {
    const targetDate = new Date(2026, 5, 26, 8, 0, 0); // tháng = 5 (June, 0-indexed)

    const elDays = document.getElementById('cd-days');
    const elHours = document.getElementById('cd-hours');
    const elMins = document.getElementById('cd-mins');
    const elSecs = document.getElementById('cd-secs');
    if (!elDays) return;

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        elDays.textContent = '000';
        elHours.textContent = '00';
        elMins.textContent = '00';
        elSecs.textContent = '00';
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      elDays.textContent = pad(d);
      elHours.textContent = pad(h);
      elMins.textContent = pad(m);
      elSecs.textContent = pad(s);
    }
    tick();
    setInterval(tick, 1000);
  }

  // ===== Floating Contact Toggle =====
  function initFloating() {
    const main = document.querySelector('.fc-main');
    const items = document.querySelectorAll('.fc-item');
    if (!main) return;
    let open = true;
    main.addEventListener('click', function () {
      open = !open;
      items.forEach(function (it) {
        it.style.display = open ? 'flex' : 'none';
      });
    });
  }

  // ===== Quote Carousel =====
  function initQuoteCarousel() {
    const dots = document.querySelectorAll('.quote-dot');
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        dots.forEach(function (d) { d.classList.remove('active'); });
        dot.classList.add('active');
      });
    });
  }

  // ===== Slider Kỳ Đại hội — click chọn → active + center + update detail panel =====
  // Dữ liệu 13 kỳ Đại hội — ưu tiên dùng window.KDH_DATA (từ kdh-data.js), fallback array nội bộ
  const KDH_DATA = (typeof window !== 'undefined' && window.KDH_DATA) ? window.KDH_DATA : [
    { yr:'1950', title:'Đại hội đại biểu toàn quốc Đoàn TN Cứu quốc Việt Nam lần thứ I', time:'7-14/02/1950', loc:'Huyện Đại Từ, Thái Nguyên', theme:'Chiến đấu và xây dựng tương lai', leader:'Đồng chí Nguyễn Lam',
      desc:'Đại hội lần thứ I là Đại hội đầu tiên của Đoàn được tổ chức trong thời kỳ kháng chiến chống thực dân Pháp xâm lược. Diễn ra tại chiến khu Việt Bắc, Đại hội đã quy tụ hàng trăm đại biểu thanh niên ưu tú từ khắp mọi miền đất nước về tham dự, đánh dấu bước phát triển mới của tổ chức Đoàn trong sự nghiệp đấu tranh giải phóng dân tộc. Đại hội đã đề ra nhiệm vụ động viên thanh niên hăng hái tham gia kháng chiến, thi đua sản xuất và học tập, xây dựng quân đội nhân dân và lực lượng vũ trang địa phương. Đồng chí Nguyễn Lam được bầu làm Bí thư thứ nhất Ban Chấp hành Trung ương Đoàn, mở ra trang sử mới cho phong trào thanh niên Việt Nam thời kỳ chống Pháp.' },
    { yr:'1956', title:'Đại hội đại biểu toàn quốc Đoàn Thanh niên Lao động Việt Nam lần thứ II', time:'25/10-04/11/1956', loc:'Thủ đô Hà Nội', theme:'Xây dựng CNXH ở miền Bắc, đấu tranh thống nhất nước nhà', leader:'Đồng chí Nguyễn Lam',
      desc:'Đại hội II diễn ra trong bối cảnh miền Bắc hoàn toàn giải phóng sau chiến thắng Điện Biên Phủ lịch sử và Hiệp định Geneva. Tại Đại hội này, tổ chức Đoàn được đổi tên thành Đoàn Thanh niên Lao động Việt Nam, phù hợp với giai đoạn cách mạng mới. Đại hội đề ra nhiệm vụ động viên thanh niên xung kích trong công cuộc xây dựng chủ nghĩa xã hội ở miền Bắc, đồng thời đấu tranh giải phóng miền Nam, thống nhất nước nhà. Đại hội khẳng định vai trò của Đoàn là đội dự bị tin cậy của Đảng, trường học XHCN của thanh niên, đại diện chăm lo và bảo vệ quyền lợi hợp pháp của tuổi trẻ.' },
    { yr:'1961', title:'Đại hội đại biểu toàn quốc Đoàn Thanh niên Lao động Việt Nam lần thứ III', time:'22-25/03/1961', loc:'Thủ đô Hà Nội', theme:'Sống, chiến đấu, lao động, học tập theo gương Bác Hồ vĩ đại', leader:'Đồng chí Vũ Quang',
      desc:'Đại hội III diễn ra trong giai đoạn miền Bắc đẩy mạnh xây dựng CNXH, miền Nam tiếp tục cuộc đấu tranh giải phóng. Đại hội đã phát động phong trào "Ba sẵn sàng" nổi tiếng, trở thành biểu tượng của thanh niên Việt Nam thời kháng chiến chống Mỹ: sẵn sàng chiến đấu, sẵn sàng nhập ngũ, sẵn sàng đi bất cứ đâu khi Tổ quốc cần. Phong trào đã khơi dậy tinh thần yêu nước, ý chí cách mạng của hàng triệu thanh niên, góp phần quan trọng vào sự nghiệp giải phóng miền Nam, thống nhất đất nước. Đại hội cũng quyết định lấy ngày 26/3 hằng năm làm ngày truyền thống của Đoàn.' },
    { yr:'1980', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ IV', time:'20-22/11/1980', loc:'Thủ đô Hà Nội', theme:'Xây dựng và bảo vệ Tổ quốc Việt Nam XHCN', leader:'Đồng chí Đặng Quốc Bảo',
      desc:'Đại hội IV diễn ra sau khi đất nước hoàn toàn thống nhất, là Đại hội đầu tiên sau khi Đoàn được vinh dự mang tên Bác Hồ kính yêu. Trong bối cảnh đất nước đối mặt nhiều khó khăn sau chiến tranh, Đại hội đã đề ra nhiệm vụ động viên thanh niên xung kích trong công cuộc hàn gắn vết thương chiến tranh, khôi phục và phát triển kinh tế, xây dựng và bảo vệ Tổ quốc Việt Nam XHCN. Đại hội phát động phong trào "Tuổi trẻ xung kích, sáng tạo xây dựng và bảo vệ Tổ quốc", động viên thanh niên đi xây dựng các vùng kinh tế mới, tham gia bảo vệ biên giới phía Bắc và phía Tây Nam.' },
    { yr:'1987', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ V', time:'27-30/11/1987', loc:'Thủ đô Hà Nội', theme:'Tuổi trẻ xung kích, sáng tạo trong sự nghiệp đổi mới', leader:'Đồng chí Hà Quang Dự',
      desc:'Đại hội V đánh dấu thời kỳ đổi mới của đất nước theo Nghị quyết Đại hội VI của Đảng, mở ra chương mới trong lịch sử cách mạng Việt Nam. Đại hội đã đề ra nhiệm vụ động viên thanh niên xung kích thực hiện công cuộc đổi mới do Đảng khởi xướng và lãnh đạo. Phong trào thanh niên xung kích, lập nghiệp và làm giàu chính đáng được phát động mạnh mẽ, khẳng định vai trò tiên phong của tuổi trẻ trong sự nghiệp đổi mới đất nước. Đại hội cũng đề ra phương châm "Thanh niên sống, chiến đấu, lao động, học tập theo gương Bác Hồ vĩ đại" tiếp tục được phát huy trong thời kỳ đổi mới.' },
    { yr:'1992', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ VI', time:'15-18/10/1992', loc:'Thủ đô Hà Nội', theme:'Tuổi trẻ Việt Nam xây dựng và bảo vệ Tổ quốc', leader:'Đồng chí Hồ Đức Việt',
      desc:'Đại hội VI khẳng định vai trò xung kích của tuổi trẻ trong đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước. Đại hội đã phát động hai phong trào lớn: "Thanh niên lập nghiệp" hướng vào việc tổ chức cho thanh niên tham gia phát triển kinh tế - xã hội, làm giàu chính đáng cho bản thân và đóng góp cho đất nước; và "Tuổi trẻ giữ nước" thể hiện trách nhiệm của tuổi trẻ trong sự nghiệp bảo vệ Tổ quốc, an ninh quốc gia, trật tự an toàn xã hội. Đại hội đã định hướng cho công tác Đoàn và phong trào thanh thiếu nhi trong giai đoạn mới với nhiều đổi mới sáng tạo.' },
    { yr:'1997', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ VII', time:'26-29/11/1997', loc:'Thủ đô Hà Nội', theme:'Đoàn kết, vận động thanh niên thi đua học tập, lập nghiệp, lập thân, sẵn sàng bảo vệ Tổ quốc', leader:'Đồng chí Vũ Trọng Kim',
      desc:'Đại hội VII đánh dấu mốc son 65 năm thành lập Đoàn, được tổ chức trong bối cảnh đất nước đang đạt được những thành tựu to lớn trong công cuộc đổi mới. Đại hội đẩy mạnh phong trào "Thanh niên lập nghiệp" và "Tuổi trẻ giữ nước", đồng thời phát động phong trào "Hành quân theo bước chân những người anh hùng" và "Tiến bước dưới cờ Đảng". Các phong trào đã thu hút hàng triệu đoàn viên thanh niên tham gia, góp phần thúc đẩy phát triển kinh tế - xã hội, củng cố quốc phòng an ninh, xây dựng nông thôn mới và hội nhập quốc tế.' },
    { yr:'2002', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ VIII', time:'08-11/12/2002', loc:'Thủ đô Hà Nội', theme:'Tuổi trẻ Việt Nam xung kích, sáng tạo vì sự nghiệp CNH, HĐH đất nước', leader:'Đồng chí Hoàng Bình Quân → Đào Ngọc Dung',
      desc:'Đại hội VIII diễn ra trong thiên niên kỷ mới với nhiều cơ hội và thách thức. Đại hội đề ra hai phong trào lớn xuyên suốt nhiệm kỳ: "Thi đua tình nguyện xây dựng và bảo vệ Tổ quốc" động viên thanh niên xung kích tham gia phát triển kinh tế - xã hội, giải quyết các vấn đề bức xúc của cộng đồng; và "Đồng hành với thanh niên lập thân, lập nghiệp" tổ chức hỗ trợ thanh niên về nghề nghiệp, việc làm, nâng cao đời sống vật chất và tinh thần. Đại hội đánh dấu bước phát triển mới về tổ chức và phương thức hoạt động của Đoàn.' },
    { yr:'2007', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ IX', time:'17-21/12/2007', loc:'Thủ đô Hà Nội', theme:'Sức trẻ Việt Nam xung kích, sáng tạo trong sự nghiệp CNH-HĐH đất nước và hội nhập quốc tế', leader:'Đồng chí Võ Văn Thưởng',
      desc:'Đại hội IX diễn ra khi Việt Nam vừa gia nhập Tổ chức Thương mại Thế giới (WTO), mở ra cơ hội hội nhập quốc tế sâu rộng. Đại hội đẩy mạnh hai phong trào "5 xung kích phát triển kinh tế - xã hội và bảo vệ Tổ quốc" và "4 đồng hành với thanh niên lập thân, lập nghiệp". 5 nội dung xung kích gồm: xây dựng và bảo vệ Tổ quốc; phát triển kinh tế; xây dựng đời sống văn hóa; bảo vệ môi trường; hội nhập quốc tế. 4 nội dung đồng hành gồm: học tập, nâng cao trình độ; nghề nghiệp việc làm; nâng cao sức khỏe và đời sống văn hóa tinh thần; phát triển kỹ năng xã hội.' },
    { yr:'2012', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ X', time:'11-14/12/2012', loc:'Thủ đô Hà Nội', theme:'Xây dựng Đoàn vững mạnh, tuổi trẻ Việt Nam xung kích, sáng tạo, đoàn kết, tình nguyện', leader:'Đồng chí Nguyễn Đắc Vinh → Lê Quốc Phong',
      desc:'Đại hội X đánh dấu chặng đường 80 năm hình thành và phát triển của Đoàn TNCS Hồ Chí Minh. Đại hội tiếp tục triển khai hai phong trào "Xung kích phát triển kinh tế - xã hội và bảo vệ Tổ quốc" và "Đồng hành với thanh niên lập thân, lập nghiệp", đồng thời mở rộng các nội dung phù hợp với yêu cầu thực tiễn. Đại hội tập trung vào ba khâu đột phá: xây dựng tổ chức Đoàn vững mạnh; nâng cao chất lượng đoàn viên; tăng cường công tác giáo dục chính trị, tư tưởng. Đại hội cũng đẩy mạnh phong trào tình nguyện vì cộng đồng và bảo vệ chủ quyền biển đảo Tổ quốc.' },
    { yr:'2017', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XI', time:'10-13/12/2017', loc:'Thủ đô Hà Nội', theme:'Tuổi trẻ Việt Nam tiên phong, bản lĩnh, đoàn kết, sáng tạo, phát triển', leader:'Đồng chí Lê Quốc Phong',
      desc:'Đại hội XI đánh dấu bước phát triển mới của Đoàn trong thời kỳ Cách mạng công nghiệp 4.0. Đại hội đề ra 3 phong trào lớn: "Thanh niên tình nguyện" — phát huy tinh thần tình nguyện vì cộng đồng; "Tuổi trẻ sáng tạo" — khuyến khích đổi mới sáng tạo, khởi nghiệp; "Tuổi trẻ xung kích bảo vệ Tổ quốc" — bảo vệ chủ quyền biển đảo, biên giới quốc gia. Đồng thời triển khai 3 chương trình đồng hành: đồng hành với thanh niên trong học tập; đồng hành với thanh niên khởi nghiệp, lập nghiệp; đồng hành với thanh niên rèn luyện và phát triển kỹ năng trong cuộc sống.' },
    { yr:'2022', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XII', time:'14-16/12/2022', loc:'Thủ đô Hà Nội', theme:'Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo', leader:'Đồng chí Bùi Quang Huy',
      desc:'Đại hội XII diễn ra trong bối cảnh đất nước thực hiện Nghị quyết Đại hội XIII của Đảng với khát vọng phát triển đất nước phồn vinh, hạnh phúc, đến năm 2045 trở thành nước phát triển có thu nhập cao. Đại hội đề ra mục tiêu xây dựng thế hệ thanh niên Việt Nam phát triển toàn diện, giàu lòng yêu nước, có ý chí tự cường dân tộc, khát vọng cống hiến, năng lực hội nhập, có sức khoẻ, có tri thức, có kỹ năng, có đạo đức và lối sống văn hoá. Đại hội tiếp tục triển khai 3 phong trào hành động cách mạng và 3 chương trình đồng hành với thanh niên, đẩy mạnh chuyển đổi số trong công tác Đoàn.' },
    { yr:'2026', title:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XIII', time:'26/06/2026', loc:'Thủ đô Hà Nội', theme:'Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo', leader:'(sẽ được bầu)',
      desc:'Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XIII là sự kiện chính trị trọng đại của tuổi trẻ Việt Nam, đánh dấu giai đoạn phát triển mới của Đoàn trong sự nghiệp xây dựng và bảo vệ Tổ quốc XHCN. Đại hội sẽ tổng kết nhiệm kỳ 2022-2027, đánh giá toàn diện kết quả thực hiện Nghị quyết Đại hội XII, đề ra phương hướng, mục tiêu, nhiệm vụ và giải pháp công tác Đoàn và phong trào thanh thiếu nhi nhiệm kỳ 2026-2031. Với chủ đề "Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo", Đại hội kêu gọi tuổi trẻ cả nước phát huy truyền thống vẻ vang, ra sức học tập, lao động, sáng tạo, đóng góp xây dựng đất nước hùng cường, thịnh vượng, hiện thực hoá khát vọng phát triển Việt Nam đến năm 2045 trở thành nước phát triển có thu nhập cao theo Nghị quyết Đại hội XIII của Đảng.' }
  ];

  function updateKdhDetail(index) {
    const data = KDH_DATA[index];
    if (!data) return;
    const setText = function (id, val) {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    setText('kdh-detail-title', data.title);
    setText('kdh-time', data.time);
    setText('kdh-loc', data.loc);
    setText('kdh-leader', data.leader);

    // Update CTA "Xem chi tiết" link với id của slide active
    const detailLink = document.getElementById('kdh-detail-link');
    if (detailLink) detailLink.href = 'dai-hoi.html?id=' + index;

    // Description với drop-cap
    const descEl = document.getElementById('kdh-desc');
    if (descEl && data.desc) {
      const first = data.desc.charAt(0);
      const rest = data.desc.slice(1);
      descEl.innerHTML = '<span class="kdh-dropcap">' + first + '</span>' + rest;
    }

    // Prev / Next labels
    const prevLbl = document.getElementById('kdh-prev-label');
    const nextLbl = document.getElementById('kdh-next-label');
    const prevBtn = document.getElementById('kdh-pn-prev');
    const nextBtn = document.getElementById('kdh-pn-next');
    if (prevLbl) {
      if (index > 0) {
        prevLbl.textContent = KDH_DATA[index - 1].title.replace('Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh', 'Đại hội');
        if (prevBtn) prevBtn.disabled = false;
      } else {
        prevLbl.textContent = '—';
        if (prevBtn) prevBtn.disabled = true;
      }
    }
    if (nextLbl) {
      if (index < KDH_DATA.length - 1) {
        nextLbl.textContent = KDH_DATA[index + 1].title.replace('Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh', 'Đại hội');
        if (nextBtn) nextBtn.disabled = false;
      } else {
        nextLbl.textContent = '—';
        if (nextBtn) nextBtn.disabled = true;
      }
    }
  }

  function initKydaihoiSlider() {
    if (typeof Swiper === 'undefined') {
      // Swiper chưa load — retry sau 200ms
      setTimeout(initKydaihoiSlider, 200);
      return;
    }
    const el = document.querySelector('.kdh-swiper');
    if (!el) return;

    const swiper = new Swiper(el, {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 16,
      initialSlide: KDH_DATA.length - 1,    // active mặc định XIII (last)
      slideToClickedSlide: true,            // click card → tự dịch chuyển vào giữa
      grabCursor: true,
      speed: 500,
      navigation: {
        nextEl: '#kdh-next',
        prevEl: '#kdh-prev',
      },
      breakpoints: {
        320: { slidesPerView: 'auto', spaceBetween: 10 },
        768: { slidesPerView: 'auto', spaceBetween: 16 },
        1024: { slidesPerView: 'auto', spaceBetween: 20 },
      },
      on: {
        slideChange: function () {
          updateKdhDetail(this.activeIndex);
        },
        init: function () {
          updateKdhDetail(this.activeIndex);
        },
      },
    });

    // Prev/Next nav buttons trong detail panel
    const pnPrev = document.getElementById('kdh-pn-prev');
    const pnNext = document.getElementById('kdh-pn-next');
    if (pnPrev) pnPrev.addEventListener('click', function () { swiper.slidePrev(); });
    if (pnNext) pnNext.addEventListener('click', function () { swiper.slideNext(); });
  }

  // ===== Init on DOM ready =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initCountdown();
      initFloating();
      initQuoteCarousel();
      initKydaihoiSlider();
    });
  } else {
    initCountdown();
    initFloating();
    initQuoteCarousel();
    initKydaihoiSlider();
  }
})();
