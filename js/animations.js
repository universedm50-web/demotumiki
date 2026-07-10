// ============================================================
// TEST WEBSITE — HERO, ANIMATIONS & PARTICLES
// hero.js + animations.js
// ============================================================

// ── Typewriter Effect ──
const TypewriterEffect = {
  el: null,
  phrases: [],
  currentPhrase: 0,
  currentChar: 0,
  isDeleting: false,
  speed: { type: 80, delete: 40, pause: 2000, start: 500 },
  timer: null,

  init(elementId, phrases) {
    this.el = document.getElementById(elementId);
    if (!this.el) return;
    this.phrases = phrases;
    setTimeout(() => this.tick(), this.speed.start);
  },

  updatePhrases(phrases) {
    this.phrases = phrases;
  },

  tick() {
    const phrase = this.phrases[this.currentPhrase];
    if (!phrase) return;

    if (this.isDeleting) {
      this.currentChar--;
    } else {
      this.currentChar++;
    }

    this.el.textContent = phrase.substring(0, this.currentChar);

    let delay = this.isDeleting ? this.speed.delete : this.speed.type;

    if (!this.isDeleting && this.currentChar === phrase.length) {
      delay = this.speed.pause;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentChar === 0) {
      this.isDeleting = false;
      this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
      delay = 300;
    }

    this.timer = setTimeout(() => this.tick(), delay);
  }
};

// ── Particle System ──
const Particles = {
  canvas: null,
  ctx: null,
  particles: [],
  animFrame: null,

  init() {
    this.canvas = document.getElementById('particles-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.createParticles();
    this.animate();
    window.addEventListener('resize', () => this.resize(), { passive: true });
  },

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  createParticles() {
    const count = Math.min(60, Math.floor(window.innerWidth / 22));
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.7 ? '#F59E0B' : '#1E6FFF',
    }));
  },

  drawConnections() {
    const ctx = this.ctx;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(30, 111, 255, ${0.06 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(this.particles[i].x, this.particles[i].y);
          ctx.lineTo(this.particles[j].x, this.particles[j].y);
          ctx.stroke();
        }
      }
    }
  },

  animate() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0, 0, w, h);

    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba').replace('#1E6FFF', `rgba(30,111,255,${p.opacity})`).replace('#F59E0B', `rgba(245,158,11,${p.opacity})`);
      ctx.fill();
    });

    this.drawConnections();
    this.animFrame = requestAnimationFrame(() => this.animate());
  }
};

// ── Parallax Scroll ──
const Parallax = {
  init() {
    const bgImg = document.querySelector('.hero-bg-img');
    if (!bgImg) return;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const offset = scrollY * 0.25;
      bgImg.style.transform = `scale(1.1) translateY(${offset}px)`;
    }, { passive: true });
  }
};

// ── Counter Animation ──
const Counters = {
  init() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target._counted) {
          entry.target._counted = true;
          this.animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  },

  animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
};

// ── Scroll Reveal (AOS fallback) ──
const ScrollReveal = {
  init() {
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.aosDelay || '0', 10);
          setTimeout(() => {
            entry.target.classList.add('aos-animate');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => {
      el.style.transitionDuration = (el.dataset.aosDuration || '600') + 'ms';
      observer.observe(el);
    });
  }
};

// ── Hero scroll indicator ──
const HeroScroll = {
  init() {
    const scrollBtn = document.querySelector('.hero-scroll');
    scrollBtn?.addEventListener('click', () => {
      const nextSection = document.querySelector('.fields-section');
      nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
};

// ── Active nav on scroll ──
const ScrollSpy = {
  init() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));
  }
};

// ── Marquee ──
const Marquee = {
  init() {
    // Auto-duplicate for seamless loop
    document.querySelectorAll('.marquee-track').forEach(track => {
      const items = track.innerHTML;
      track.innerHTML = items + items; // duplicate for seamless loop
    });
  }
};

window.TypewriterEffect = TypewriterEffect;
window.typewriter = TypewriterEffect;
window.Particles = Particles;
window.Parallax = Parallax;
window.Counters = Counters;
window.ScrollReveal = ScrollReveal;
window.HeroScroll = HeroScroll;
window.ScrollSpy = ScrollSpy;
window.Marquee = Marquee;
