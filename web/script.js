// Đại hội Đoàn XIII - Homepage interactions

(function () {
  'use strict';

  // ===== Countdown Timer =====
  // Mục tiêu: 120 ngày 08 giờ 45 phút 22 giây kể từ thời điểm load
  function initCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 120);
    targetDate.setHours(targetDate.getHours() + 8);
    targetDate.setMinutes(targetDate.getMinutes() + 45);
    targetDate.setSeconds(targetDate.getSeconds() + 22);

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

  // ===== Init on DOM ready =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initCountdown();
      initFloating();
      initQuoteCarousel();
    });
  } else {
    initCountdown();
    initFloating();
    initQuoteCarousel();
  }
})();
