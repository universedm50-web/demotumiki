// ============================================================
// TEST WEBSITE — HEADER & NAVIGATION
// header.js
// ============================================================

const Header = {
  el: null,
  mobileNav: null,
  hamburger: null,
  searchOverlay: null,
  isScrolled: false,

  init() {
    this.el = document.querySelector('.site-header');
    this.mobileNav = document.querySelector('.mobile-nav');
    this.hamburger = document.querySelector('.hamburger');
    this.searchOverlay = document.querySelector('.search-overlay');
    if (!this.el) return;

    this.setupScroll();
    this.setupMobileMenu();
    this.setupSearch();
    this.setupLangToggle();
    this.setupDropdownHover();
    this.setupMobileAccordion();
  },

  setupScroll() {
    const onScroll = () => {
      const scrolled = window.scrollY > 40;
      if (scrolled !== this.isScrolled) {
        this.isScrolled = scrolled;
        this.el.classList.toggle('scrolled', scrolled);
        this.el.classList.toggle('at-top', !scrolled);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run on init
  },

  setupMobileMenu() {
    if (!this.hamburger || !this.mobileNav) return;
    this.hamburger.addEventListener('click', () => {
      const isOpen = this.mobileNav.classList.toggle('open');
      this.hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close on backdrop click
    document.addEventListener('click', (e) => {
      if (this.mobileNav.classList.contains('open') &&
          !this.mobileNav.contains(e.target) &&
          !this.hamburger.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  },

  closeMobileMenu() {
    this.mobileNav?.classList.remove('open');
    this.hamburger?.classList.remove('open');
    document.body.style.overflow = '';
  },

  setupSearch() {
    const openBtns = document.querySelectorAll('[data-search-open]');
    const closeBtn = document.querySelector('[data-search-close]');
    const input = document.querySelector('.search-input');
    if (!this.searchOverlay) return;

    openBtns.forEach(btn => btn.addEventListener('click', () => {
      this.searchOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input?.focus(), 100);
    }));

    const close = () => {
      this.searchOverlay.classList.remove('open');
      document.body.style.overflow = '';
    };
    closeBtn?.addEventListener('click', close);
    this.searchOverlay.addEventListener('click', (e) => {
      if (e.target === this.searchOverlay) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.searchOverlay.classList.contains('open')) close();
      }
    });

    // Hints click
    document.querySelectorAll('.search-hint').forEach(hint => {
      hint.addEventListener('click', () => {
        if (input) input.value = hint.textContent;
        input?.focus();
      });
    });
  },

  setupLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang) window.i18n?.setLang(lang);
      });
    });
  },

  setupDropdownHover() {
    // Touch device support - click to open
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.classList.toggle('open');
        }
        if (e.key === 'Escape') item.classList.remove('open');
      });
    });
  },

  setupMobileAccordion() {
    document.querySelectorAll('.mobile-nav-link[data-toggle]').forEach(link => {
      link.addEventListener('click', () => {
        const targetId = link.dataset.toggle;
        const sub = document.getElementById(targetId);
        if (!sub) return;
        const isOpen = sub.classList.toggle('open');
        link.querySelector('.chevron')?.style.setProperty('transform', isOpen ? 'rotate(180deg)' : '');
      });
    });
  }
};

// ── Sticky CTA ──
const StickyCTA = {
  init() {
    const btn = document.querySelector('.sticky-cta-btn[data-modal]');
    btn?.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      Modal.open(modalId);
    });
  }
};

// ── Modal System ──
const Modal = {
  activeModal: null,

  init() {
    // Open triggers
    document.querySelectorAll('[data-modal-open]').forEach(el => {
      el.addEventListener('click', () => Modal.open(el.dataset.modalOpen));
    });
    // Close triggers
    document.querySelectorAll('[data-modal-close]').forEach(el => {
      el.addEventListener('click', () => Modal.close());
    });
    // Backdrop close
    document.querySelectorAll('.overlay-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', () => Modal.close());
    });
    // ESC close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') Modal.close();
    });
  },

  open(id) {
    const modal = document.getElementById(id);
    const backdrop = document.querySelector('.overlay-backdrop');
    if (!modal) return;
    this.activeModal = modal;
    modal.classList.add('open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.activeModal?.classList.remove('open');
    document.querySelector('.overlay-backdrop')?.classList.remove('open');
    document.body.style.overflow = '';
    this.activeModal = null;
  }
};

window.Header = Header;
window.Modal = Modal;
window.StickyCTA = StickyCTA;
