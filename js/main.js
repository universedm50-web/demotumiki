// ============================================================
// TEST WEBSITE — MAIN ENTRY POINT
// main.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // ── Core systems ──
  i18n.init();
  Header.init();
  StickyCTA.init();
  Modal.init();

  // ── Animations ──
  Particles.init();
  Parallax.init();
  Counters.init();
  ScrollReveal.init();
  HeroScroll.init();
  ScrollSpy.init();
  Marquee.init();

  // ── Page-specific init ──
  const page = document.body.dataset.page;

  if (page === 'home') {
    const phrases = i18n.t('hero_typewriter');
    TypewriterEffect.init('typewriter-text', Array.isArray(phrases) ? phrases : [phrases]);
    initSliders();
    initCourseSlider();
  }

  if (page === 'solution') {
    SidebarSpy.init();
  }

  // ── Forms (all pages) ──
  Forms.init();
  Tabs.init();

  // ── Swiper sliders ──
  function initSliders() {
    if (typeof Swiper === 'undefined') return;
    new Swiper('.projects-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.projects-swiper .swiper-pagination', clickable: true },
      navigation: { prevEl: '.projects-prev', nextEl: '.projects-next' },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2.5 }
      }
    });
  }

  function initCourseSlider() {
    if (typeof Swiper === 'undefined') return;
    new Swiper('.courses-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      pagination: { el: '.courses-swiper .swiper-pagination', clickable: true },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  // ── Mobile nav links smooth close ──
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => Header.closeMobileMenu());
  });

  // ── Product thumbnail gallery ──
  document.querySelectorAll('.product-thumb-item').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const mainImg = thumb.closest('.product-detail-grid')?.querySelector('.product-main-img');
      const newSrc = thumb.querySelector('img')?.src;
      if (mainImg && newSrc) {
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        }, 200);
      }
      thumb.closest('.product-gallery-thumb')?.querySelectorAll('.product-thumb-item')
        .forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // ── Smooth anchor scrolling ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target && !anchor.closest('.sidebar-nav') && !anchor.closest('.mobile-nav')) {
        e.preventDefault();
        const offset = 90; // header height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Back to top ──
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  console.log('TEST Website initialized ✅');
});
