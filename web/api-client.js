/**
 * API client — fetch dữ liệu từ Payload CMS backend.
 *
 * Đổi API_BASE để trỏ tới production server khi deploy:
 *   - Dev: http://localhost:3000
 *   - Prod: https://admin.daihoi13.doanthanhnien.vn
 *
 * Mọi fetch đều có fallback graceful: nếu API offline → trả về dữ liệu mặc định
 * để page vẫn render được.
 */
(function () {
  'use strict';

  // ===== Config =====
  const API_BASE = (() => {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') return 'http://localhost:3000';
    if (host.includes('github.io')) return 'http://localhost:3000';   // dev fallback
    return 'https://admin.daihoi13.doanthanhnien.vn';                  // production
  })();

  /**
   * Wrapper fetch với timeout + error handling.
   * @param {string} path - vd: '/api/dai-hoi?limit=13'
   * @returns {Promise<any>} JSON response hoặc null nếu lỗi
   */
  async function apiFetch(path, options = {}) {
    const url = API_BASE + path;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    try {
      const res = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      clearTimeout(timeout);
      console.warn(`[API] ${path} failed:`, err.message);
      return null;
    }
  }

  // ===== Public API =====
  window.DaiHoiAPI = {
    base: API_BASE,

    // Lấy 13 kỳ Đại hội — fallback dùng window.KDH_DATA hiện có
    async getDaiHoiList() {
      const json = await apiFetch('/api/dai-hoi?limit=13&sort=order&depth=2');
      if (!json || !json.docs || !json.docs.length) {
        return window.KDH_DATA || [];
      }
      // Transform Payload response → shape giống kdh-data.js cũ
      return json.docs.map((d) => ({
        id: d.order,
        roman: d.roman,
        yr: String(d.year),
        slug: d.slug,
        title: d.title,
        time: d.timeRange,
        loc: d.location,
        theme: d.theme,
        leader: d.leaderName,
        delegates: d.delegatesCount,
        members: d.membersCount,
        movements: (d.movements || []).map((m) => m.name || m),
        desc: typeof d.description === 'string'
          ? d.description
          : (d.description?.root ? extractLexicalText(d.description) : ''),
      }));
    },

    // Lấy chi tiết 1 kỳ Đại hội
    async getDaiHoi(idOrRoman) {
      const json = await apiFetch(`/api/dai-hoi?where[roman][equals]=${idOrRoman}`);
      if (json?.docs?.[0]) return json.docs[0];
      return null;
    },

    // Lấy posts tin tức
    async getPosts({ category, limit = 20, featured } = {}) {
      let qs = '?limit=' + limit + '&sort=-publishedAt&where[status][equals]=published';
      if (category) qs += '&where[category][equals]=' + category;
      if (featured) qs += '&where[isFeatured][equals]=true';
      const json = await apiFetch('/api/posts' + qs);
      return json?.docs || [];
    },

    // Lấy thông điệp đã duyệt
    async getThongDiepList(limit = 50) {
      const json = await apiFetch(`/api/thong-diep?limit=${limit}&sort=-createdAt&where[status][equals]=approved`);
      return json?.docs || [];
    },

    // Submit thông điệp mới
    async submitThongDiep(data) {
      return await apiFetch('/api/thong-diep', {
        method: 'POST',
        body: JSON.stringify({ ...data, status: 'pending' }),
      });
    },

    // Lấy trạng thái 63 tỉnh
    async getMapStatus() {
      const json = await apiFetch('/api/map-status?limit=100');
      return json?.docs || [];
    },

    // Lấy site settings (hero, countdown, contact, social)
    async getSiteSettings() {
      return await apiFetch('/api/globals/site-settings');
    },
  };

  // Helper: extract plain text từ Lexical rich text node
  function extractLexicalText(node) {
    if (!node) return '';
    if (node.text) return node.text;
    if (Array.isArray(node.children)) {
      return node.children.map(extractLexicalText).join(' ');
    }
    if (node.root) return extractLexicalText(node.root);
    return '';
  }
})();
