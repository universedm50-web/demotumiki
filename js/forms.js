// ============================================================
// TEST WEBSITE — FORM SYSTEM
// forms.js
// ============================================================

const Forms = {
  init() {
    this.setupContactForms();
    this.setupCaptcha();
    this.setupProductQuoteAutoFill();
    this.setupCatalogueForm();
    this.setupFilterButtons();
    this.setupAccordions();
    this.setupGalleryLightbox();
  },

  // ── Form Validation & Submit ──
  setupContactForms() {
    document.querySelectorAll('[data-form]').forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!this.validateForm(form)) return;
        if (!this.isCaptchaDone(form)) {
          Toast.show('Vui lòng xác nhận Captcha', 'error');
          return;
        }
        const btn = form.querySelector('[type="submit"]');
        const origText = btn?.textContent;
        if (btn) { btn.disabled = true; btn.textContent = '...Đang gửi'; }

        // Simulate API call
        await new Promise(r => setTimeout(r, 1400));

        if (btn) { btn.disabled = false; btn.textContent = origText; }
        form.reset();
        Modal.close();
        Toast.show(window.i18n?.t('form_success') || 'Gửi thành công!', 'success');
      });
    });
  },

  validateForm(form) {
    let valid = true;
    const required = form.querySelectorAll('[required]');
    required.forEach(field => {
      const group = field.closest('.form-group');
      if (!field.value.trim()) {
        group?.classList.add('has-error');
        valid = false;
      } else {
        group?.classList.remove('has-error');
      }

      // Email validation
      if (field.type === 'email' && field.value) {
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
        if (!emailOk) {
          group?.classList.add('has-error');
          valid = false;
        }
      }

      // Phone validation
      if (field.dataset.phone && field.value) {
        const phoneOk = /^[\d\s\+\-]{9,15}$/.test(field.value);
        if (!phoneOk) {
          group?.classList.add('has-error');
          valid = false;
        }
      }
    });
    return valid;
  },

  setupCaptcha() {
    document.querySelectorAll('.captcha-checkbox').forEach(box => {
      box.addEventListener('click', () => {
        box.classList.toggle('checked');
        if (box.classList.contains('checked')) {
          box.innerHTML = '✓';
          box.style.color = '#fff';
        } else {
          box.innerHTML = '';
        }
      });
    });
  },

  isCaptchaDone(form) {
    const captcha = form.querySelector('.captcha-checkbox');
    return !captcha || captcha.classList.contains('checked');
  },

  // ── Product quote auto-fill ──
  setupProductQuoteAutoFill() {
    document.querySelectorAll('[data-quote-product]').forEach(btn => {
      btn.addEventListener('click', () => {
        const productName = btn.dataset.quoteProduct;
        const modal = document.getElementById('modal-quote');
        if (modal) {
          const productField = modal.querySelector('[data-product-field]');
          if (productField) productField.value = productName;
        }
        Modal.open('modal-quote');
      });
    });
  },

  // ── Catalogue lead magnet ──
  setupCatalogueForm() {
    document.querySelectorAll('[data-catalogue-form]').forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailEl = form.querySelector('input[type="email"]');
        if (!emailEl?.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
          emailEl?.classList.add('error-shake');
          setTimeout(() => emailEl?.classList.remove('error-shake'), 500);
          return;
        }
        const btn = form.querySelector('button');
        const orig = btn?.textContent;
        if (btn) { btn.disabled = true; btn.textContent = '...'; }
        await new Promise(r => setTimeout(r, 1000));
        if (btn) { btn.disabled = false; btn.textContent = orig; }
        emailEl.value = '';
        Toast.show('Catalogue đã được gửi tới email của bạn!', 'success');
      });
    });
  },

  // ── Product filter ──
  setupFilterButtons() {
    document.querySelectorAll('.product-filter-bar').forEach(bar => {
      bar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.dataset.filter;
          const container = bar.nextElementSibling;
          container?.querySelectorAll('[data-category]').forEach(card => {
            const show = filter === 'all' || card.dataset.category === filter;
            card.style.display = show ? '' : 'none';
            if (show) card.style.animation = 'fadeInUp 0.4s ease both';
          });
        });
      });
    });
  },

  // ── Accordion ──
  setupAccordions() {
    document.querySelectorAll('.accordion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('open');
        // Close siblings
        const parent = btn.closest('.accordion-group');
        if (parent) {
          parent.querySelectorAll('.accordion-btn').forEach(b => b.classList.remove('open'));
        }
        if (!isOpen) btn.classList.add('open');
      });
    });
  },

  // ── Gallery lightbox ──
  setupGalleryLightbox() {
    document.querySelectorAll('.gallery-item').forEach((item, i) => {
      item.addEventListener('click', () => {
        const src = item.querySelector('img')?.src || item.querySelector('.img-placeholder')?.dataset.src;
        if (!src) return;
        this.openLightbox(src, i);
      });
    });
  },

  openLightbox(src, index) {
    const existing = document.getElementById('lightbox');
    if (existing) existing.remove();

    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.style.cssText = `position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.95);
      display:flex;align-items:center;justify-content:center;cursor:zoom-out;
      animation:fadeIn 0.2s ease;`;
    lb.innerHTML = `<img src="${src}" style="max-width:90vw;max-height:90vh;border-radius:12px;box-shadow:0 0 80px rgba(0,0,0,0.8);">
      <button onclick="this.parentElement.remove()" style="position:absolute;top:20px;right:20px;width:44px;height:44px;
        border-radius:50%;background:rgba(255,255,255,0.1);color:#fff;font-size:20px;border:none;cursor:pointer;">✕</button>`;
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.remove(); });
    document.body.appendChild(lb);
  }
};

// ── Toast notifications ──
const Toast = {
  container: null,

  show(message, type = 'success') {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type] || '🔔'}</span><span>${message}</span>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'scale(0.8)';
      toast.style.transition = '0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

// ── Tabs ──
const Tabs = {
  init() {
    document.querySelectorAll('[data-tabs]').forEach(tabGroup => {
      const tabs = tabGroup.querySelectorAll('[data-tab]');
      const panels = document.querySelectorAll('[data-panel]');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.dataset.tab;
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          panels.forEach(p => {
            p.style.display = p.dataset.panel === target ? '' : 'none';
          });
        });
      });
    });
  }
};

// ── Sidebar scroll spy (solution page) ──
const SidebarSpy = {
  init() {
    const sidebarLinks = document.querySelectorAll('.sidebar-nav-link[href^="#"]');
    if (!sidebarLinks.length) return;

    const sections = Array.from(sidebarLinks).map(link => {
      return document.querySelector(link.getAttribute('href'));
    }).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));

    sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
};

window.Forms = Forms;
window.Toast = Toast;
window.Tabs = Tabs;
window.SidebarSpy = SidebarSpy;
