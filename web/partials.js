// Partials: chia sẻ header / nav / footer / floating / sprite cho mọi page
// Mỗi page chỉ cần đặt <div id="ecc-header"></div>... và include script này

(function () {
  'use strict';

  // ===== SVG SPRITE (29 icons + logo + xiii-badge + wreath) =====
  const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
  <symbol id="i-logo-doan" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="31" fill="#DA251D"/>
    <circle cx="32" cy="32" r="28.5" fill="none" stroke="#FFD700" stroke-width="1"/>
    <g fill="#FFD700">
      <path d="M 26 54 Q 25 44 27 34 Q 28 27 30 23 L 31 19 Q 32 17 33 19 L 34 23 Q 36 27 37 34 Q 39 44 38 54 Z"/>
      <ellipse cx="32" cy="17" rx="5" ry="4.5"/>
    </g>
    <line x1="35" y1="14" x2="53" y2="6" stroke="#FFD700" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 38 8 Q 46 4 53 6 Q 54 11 52 17 Q 46 16 38 18 Z" fill="#DA251D" stroke="#FFD700" stroke-width="0.5"/>
    <path d="M 46 9.5 L 47 11.6 L 49.3 11.9 L 47.5 13.4 L 48 15.7 L 46 14.4 L 44 15.7 L 44.5 13.4 L 42.7 11.9 L 45 11.6 Z" fill="#FFD700"/>
  </symbol>
  <symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/>
  </symbol>
  <symbol id="i-home" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3z"/></symbol>
  <symbol id="i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></symbol>
  <symbol id="i-robot" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="7" width="16" height="13" rx="3"/><circle cx="9" cy="13" r="1.5" fill="#fff"/><circle cx="15" cy="13" r="1.5" fill="#fff"/><rect x="10" y="16" width="4" height="1" rx="0.5" fill="#fff"/><circle cx="12" cy="3" r="1"/><rect x="2" y="11" width="2" height="5" rx="1"/><rect x="20" y="11" width="2" height="5" rx="1"/></symbol>
  <symbol id="i-messenger" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.8 1.4 5.3 3.6 7v3.8l3.3-1.8c.9.3 1.9.4 3.1.4 5.5 0 10-4.1 10-9.2S17.5 2 12 2zm1 12.4L10.5 12 6 14.5l5-5.3L13.5 12 18 9.5l-5 4.9z"/></symbol>
  <symbol id="i-facebook" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></symbol>
  <symbol id="i-instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></symbol>
  <symbol id="i-youtube" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7.3c-.2-1.5-.9-2.6-2.5-2.8C16.7 4 12 4 12 4s-4.7 0-7.5.5C2.9 4.7 2.2 5.8 2 7.3 1.7 9.2 1.7 12 1.7 12s0 2.8.3 4.7c.2 1.5.9 2.6 2.5 2.8C7.3 20 12 20 12 20s4.7 0 7.5-.5c1.6-.2 2.3-1.3 2.5-2.8.3-1.9.3-4.7.3-4.7s0-2.8-.3-4.7zM10 15.5v-7l6 3.5z"/></symbol>
  <symbol id="i-tiktok" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8.5a6.7 6.7 0 0 1-3.9-1.2v8.4c0 3.5-2.8 6.3-6.3 6.3s-6.3-2.8-6.3-6.3 2.8-6.3 6.3-6.3c.3 0 .7 0 1 .1v3.4c-.3-.1-.7-.2-1-.2-1.7 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3V2h3.2c.3 1.9 1.6 3.5 3.5 4.1z"/></symbol>
  <symbol id="i-zalo" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><text x="12" y="15" font-family="Arial" font-size="8" font-weight="900" fill="#fff" text-anchor="middle">Zalo</text></symbol>
  <symbol id="i-google-play" viewBox="0 0 24 24"><path d="M3.6 2.3c-.4.4-.6 1-.6 1.6v16.2c0 .6.2 1.2.6 1.6L13 12 3.6 2.3z" fill="#00C2EF"/><path d="M16.6 8.6L5.5 2.2c-.5-.3-1.1-.3-1.6-.1L13 12l3.6-3.4z" fill="#FFD54A"/><path d="M20.1 10.6l-3.5-2-3.6 3.4 3.6 3.4 3.5-2c1.2-.7 1.2-2.1 0-2.8z" fill="#FF3D44"/><path d="M5.5 21.8c.5.2 1.1.2 1.6-.1l11.1-6.4-3.6-3.3z" fill="#3BC661"/></symbol>
  <symbol id="i-apple" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 12.5c0-2.5 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-2-.9-3.3-.8-1.7 0-3.2 1-4.1 2.5-1.7 3-.4 7.5 1.3 9.9.8 1.2 1.8 2.5 3.1 2.5 1.2-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.4-2.8-.1 0-2.7-1-2.7-4.2zm-2.4-7.7c.7-.8 1.1-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.3z"/></symbol>
  <symbol id="i-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 14.9 9.1 22 9.7l-5.4 4.7L18.2 22 12 18l-6.2 4 1.6-7.6L2 9.7l7.1-.6z"/></symbol>

  <!-- ===== CUSTOM ĐOÀN-THEMED ICONS (tự vẽ cho Đại hội XIII) ===== -->
  <!-- Lá cờ Việt Nam nhỏ có cán -->
  <symbol id="i-doan-flag" viewBox="0 0 32 32">
    <line x1="6" y1="4" x2="6" y2="30" stroke="#8B4513" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M6 5 L28 4 Q29 9 28 14 L6 15 Z" fill="#DA251D" stroke="#B8050F" stroke-width="0.5"/>
    <path d="M17 6 L18.2 9 L21.5 9.2 L19 11.3 L19.8 14.5 L17 12.8 L14.2 14.5 L15 11.3 L12.5 9.2 L15.8 9 Z" fill="#FFD700"/>
  </symbol>

  <!-- Huy hiệu Đoàn - simplified (vòng tròn + sao + cờ) -->
  <symbol id="i-doan-emblem" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="15" fill="#DA251D"/>
    <circle cx="16" cy="16" r="13.5" fill="none" stroke="#FFD700" stroke-width="0.6"/>
    <path d="M16 6 L18.2 12.2 L24.8 12.4 L19.5 16.2 L21.5 22.5 L16 18.6 L10.5 22.5 L12.5 16.2 L7.2 12.4 L13.8 12.2 Z" fill="#FFD700"/>
  </symbol>

  <!-- Tài liệu văn kiện có dấu sao đỏ -->
  <symbol id="i-doan-document" viewBox="0 0 32 32">
    <rect x="6" y="3" width="20" height="26" rx="2" fill="#FAF0E0" stroke="#DA251D" stroke-width="1.5"/>
    <rect x="10" y="8" width="12" height="1.5" rx="0.7" fill="#DA251D"/>
    <rect x="10" y="12" width="12" height="1.5" rx="0.7" fill="#666"/>
    <rect x="10" y="15" width="9" height="1.5" rx="0.7" fill="#666"/>
    <path d="M16 18 L17.4 21 L20.7 21.3 L18.2 23.4 L19 26.7 L16 25 L13 26.7 L13.8 23.4 L11.3 21.3 L14.6 21 Z" fill="#FFD700" stroke="#DA251D" stroke-width="0.4"/>
  </symbol>

  <!-- Cánh tay vung lên cầm cờ (đại hội xung kích) -->
  <symbol id="i-doan-fist-flag" viewBox="0 0 32 32">
    <g fill="#FFD700">
      <path d="M14 30 Q13 22 14.5 14 Q15.3 10 16 9 L16.5 7 Q17 5.5 17.5 7 L18 9 Q18.7 10 19.5 14 Q21 22 20 30 Z"/>
      <ellipse cx="17" cy="6.5" rx="2.5" ry="2.3"/>
    </g>
    <line x1="18.5" y1="5" x2="28" y2="2" stroke="#FFD700" stroke-width="1" stroke-linecap="round"/>
    <path d="M20 3 Q25 1 28 2 Q28.5 5.5 27.5 8.5 Q24 8 20 9 Z" fill="#DA251D" stroke="#FFD700" stroke-width="0.3"/>
    <path d="M24 4.5 L24.5 5.6 L25.7 5.7 L24.7 6.5 L25 7.7 L24 7 L23 7.7 L23.3 6.5 L22.3 5.7 L23.5 5.6 Z" fill="#FFD700"/>
  </symbol>

  <!-- Thùng phiếu biểu quyết có dấu sao -->
  <symbol id="i-doan-ballot" viewBox="0 0 32 32">
    <path d="M5 13 L16 7 L27 13 L27 26 L5 26 Z" fill="#DA251D" stroke="#B8050F" stroke-width="1"/>
    <rect x="13" y="11" width="6" height="3" rx="0.5" fill="#FAF0E0"/>
    <rect x="11" y="17" width="10" height="6" rx="1" fill="#FAF0E0"/>
    <path d="M16 18.5 L16.8 20.2 L18.5 20.3 L17.2 21.4 L17.6 23 L16 22.1 L14.4 23 L14.8 21.4 L13.5 20.3 L15.2 20.2 Z" fill="#DA251D"/>
  </symbol>

  <!-- Megaphone báo chí với cờ -->
  <symbol id="i-doan-megaphone" viewBox="0 0 32 32">
    <path d="M4 13 L4 19 L10 19 L20 26 L20 6 L10 13 Z" fill="#DA251D"/>
    <path d="M20 8 L26 5 L28 7 L26 16 L20 17 Z" fill="#FFD700"/>
    <circle cx="26" cy="9" r="2" fill="#DA251D"/>
    <circle cx="22" cy="22" r="1.5" fill="#FAF0E0"/>
    <line x1="22" y1="23.5" x2="22" y2="29" stroke="#666" stroke-width="1.5"/>
  </symbol>

  <!-- Bản đồ VN với sao đại hội -->
  <symbol id="i-doan-map" viewBox="0 0 32 32">
    <path d="M11 4 Q14 3 17 5 L18 9 L17 13 Q16 16 14 19 L12 24 L10 28 Q9 30 8 28 L9 24 L10 19 Q11 16 10 13 L9 9 L10 5 Z" fill="#0066B3" stroke="#003D7A" stroke-width="0.8"/>
    <circle cx="13.5" cy="8" r="1.5" fill="#FFD700"/>
    <circle cx="14" cy="15" r="1.2" fill="#22c55e"/>
    <circle cx="12" cy="22" r="1.5" fill="#DA251D"/>
    <g fill="#0066B3"><circle cx="23" cy="11" r="0.8"/><circle cx="25" cy="13" r="0.7"/><circle cx="24" cy="20" r="0.8"/><circle cx="26" cy="22" r="0.7"/></g>
  </symbol>

  <!-- Trái tim gửi gắm -->
  <symbol id="i-doan-heart" viewBox="0 0 32 32">
    <path d="M16 28 Q5 21 5 13 Q5 8 10 8 Q13 8 16 11 Q19 8 22 8 Q27 8 27 13 Q27 21 16 28 Z" fill="#DA251D"/>
    <path d="M16 16 L16.8 18 L19 18.2 L17.4 19.5 L17.8 21.5 L16 20.5 L14.2 21.5 L14.6 19.5 L13 18.2 L15.2 18 Z" fill="#FFD700"/>
  </symbol>
</svg>`;

  // ===== HEADER (đồng bộ với index.html) =====
  const HEADER = `
<header class="bg-white border-b border-gray-200">
  <div class="container-x flex items-center gap-6 py-4">
    <a href="index.html" class="flex items-center gap-3 flex-shrink-0">
      <div class="header-logo-img"><img src="assets/images/logo.png" alt="Huy hiệu Đại hội Đoàn XIII" style="height:60px;width:auto;display:block"/></div>
      <div>
        <div class="text-red-600 font-extrabold text-base leading-tight uppercase">ĐẠI HỘI ĐOÀN TOÀN QUỐC<br/>LẦN THỨ XIII</div>
        <div class="text-[10px] text-gray-500 font-medium tracking-wider mt-1">KHÁT VỌNG · TIÊN PHONG · ĐOÀN KẾT · BẢN LĨNH · SÁNG TẠO</div>
      </div>
    </a>
    <div class="flex-1 max-w-xl ml-auto">
      <div class="relative">
        <input type="text" placeholder="Tìm kiếm..." class="w-full bg-gray-50 border border-gray-200 rounded-full pl-5 pr-12 py-2.5 text-sm focus:outline-none focus:border-red-500"/>
        <button class="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-br from-red-500 to-red-700 text-white w-9 h-9 rounded-full flex items-center justify-center">
          <svg class="icon icon-sm"><use href="#i-search"/></svg>
        </button>
      </div>
    </div>
    <div class="flex items-center gap-3 text-sm font-semibold flex-shrink-0">
      <a href="#" class="text-red-600">VI</a>
      <span class="text-gray-300">|</span>
      <a href="#" class="text-gray-500 hover:text-red-600">EN</a>
    </div>
  </div>
</header>`;

  // ===== NAVIGATION =====
  // data-page attribute matches page filename (without .html) for active highlighting
  const NAV = `
<nav class="nav-bar">
  <div class="container-x flex items-stretch">
    <a href="index.html" class="nav-item nav-home" data-page="index"><svg class="icon icon-md"><use href="#i-home"/></svg></a>
    <a href="tin-tuc.html" class="nav-item" data-page="tin-tuc">Tin tức - Sự kiện</a>
    <a href="ve-dai-hoi.html" class="nav-item" data-page="ve-dai-hoi">Về Đại hội</a>
    <a href="van-kien.html" class="nav-item" data-page="van-kien">Văn kiện</a>
    <a href="trien-lam-360.html" class="nav-item" data-page="trien-lam-360">Triển lãm số 360°</a>
    <a href="ban-do-so.html" class="nav-item" data-page="ban-do-so">Bản đồ số Đại hội</a>
    <a href="thong-diep.html" class="nav-item" data-page="thong-diep">Thông điệp gửi Đại hội</a>
    <a href="dai-bieu.html" class="nav-item" data-page="dai-bieu">Dành cho Đại biểu</a>
    <a href="bao-chi.html" class="nav-item" data-page="bao-chi">Dành cho Báo chí</a>
  </div>
</nav>`;

  // ===== FOOTER =====
  const FOOTER = `
<footer class="footer">
  <div class="container-x grid md:grid-cols-3 gap-8">
    <div>
      <div class="flex items-center gap-3 mb-4">
        <div class="header-logo-img"><img src="assets/images/logo.png" alt="Logo" style="height:60px;width:auto"/></div>
        <div><div class="text-white font-extrabold text-base leading-tight">ĐẠI HỘI ĐOÀN TOÀN QUỐC<br/>LẦN THỨ XIII</div></div>
      </div>
      <div class="footer-info">
        <strong class="text-white">TRUNG ƯƠNG ĐOÀN TNCS HỒ CHÍ MINH</strong><br/>
        Địa chỉ: 62 Bà Triệu, Hoàn Kiếm, Hà Nội<br/>
        Điện thoại: (024) 6263 1234 - Fax: (024) 6263 1235<br/>
        Email: daihoi13@doanthanhnien.vn<br/>
        Website: daihoi13.doanthanhnien.vn
      </div>
    </div>
    <div>
      <h4>Liên kết nhanh</h4>
      <a href="index.html">Trang chủ</a>
      <a href="tin-tuc.html">Tin tức - Sự kiện</a>
      <a href="ve-dai-hoi.html">Về Đại hội</a>
      <a href="van-kien.html">Văn kiện</a>
      <a href="trien-lam-360.html">Triển lãm số 360°</a>
      <a href="ban-do-so.html">Bản đồ số Đại hội</a>
      <a href="thong-diep.html">Thông điệp gửi Đại hội</a>
    </div>
    <div>
      <h4>Kết nối với chúng tôi</h4>
      <div class="social-icons">
        <a href="#" title="Facebook"><svg class="icon icon-md"><use href="#i-facebook"/></svg></a>
        <a href="#" title="Instagram"><svg class="icon icon-md"><use href="#i-instagram"/></svg></a>
        <a href="#" title="Zalo" style="background:#0068FF"><svg class="icon icon-md"><use href="#i-zalo"/></svg></a>
        <a href="#" title="YouTube"><svg class="icon icon-md"><use href="#i-youtube"/></svg></a>
        <a href="#" title="TikTok"><svg class="icon icon-md"><use href="#i-tiktok"/></svg></a>
      </div>
      <h4 class="mt-4">Tải App Thanh niên Việt Nam</h4>
      <div class="flex gap-2 flex-wrap">
        <a href="#" class="store-badge"><svg class="icon icon-xl"><use href="#i-google-play"/></svg><div><div class="text-[9px] opacity-80">GET IT ON</div><div class="font-bold">Google Play</div></div></a>
        <a href="#" class="store-badge"><svg class="icon icon-xl"><use href="#i-apple"/></svg><div><div class="text-[9px] opacity-80">Download on the</div><div class="font-bold">App Store</div></div></a>
      </div>
    </div>
  </div>
  <div class="container-x mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/60">
    © 2025 Đại hội Đoàn Toàn quốc lần thứ XIII. All rights reserved.
  </div>
</footer>`;

  // ===== FLOATING CONTACT =====
  const FLOATING = `
<div class="floating-contact">
  <div class="fc-main"><svg class="icon icon-md" style="color:#FFD700"><use href="#i-star"/></svg><span>LIÊN HỆ</span></div>
  <div class="fc-item fc-close"><svg class="icon icon-md"><use href="#i-close"/></svg></div>
  <div class="fc-item fc-chatbot"><svg class="icon icon-md"><use href="#i-robot"/></svg></div>
  <div class="fc-item fc-messenger"><svg class="icon icon-md"><use href="#i-messenger"/></svg></div>
  <div class="fc-item fc-app">APP</div>
</div>`;

  // ===== Render =====
  function render() {
    // Inject sprite vào đầu body
    document.body.insertAdjacentHTML('afterbegin', SPRITE);

    // Replace placeholders
    const setHtml = (id, html) => {
      const el = document.getElementById(id);
      if (el) el.outerHTML = html;
    };
    setHtml('ecc-header', HEADER);
    setHtml('ecc-nav', NAV);
    setHtml('ecc-footer', FOOTER);
    setHtml('ecc-floating', FLOATING);

    // Highlight active nav item
    const page = document.body.getAttribute('data-page');
    if (page) {
      const active = document.querySelector(`.nav-item[data-page="${page}"]`);
      if (active) active.classList.add('nav-active');
    }

    // Init floating contact toggle
    const fcMain = document.querySelector('.fc-main');
    const fcItems = document.querySelectorAll('.fc-item');
    if (fcMain) {
      let open = true;
      fcMain.addEventListener('click', () => {
        open = !open;
        fcItems.forEach(it => it.style.display = open ? 'flex' : 'none');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
