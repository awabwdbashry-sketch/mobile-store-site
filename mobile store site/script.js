/* ========================================
   NEXT MOBILE – script.js
   ======================================== */

'use strict';

/* ==============================
   CART STATE
   ============================== */
let cartCount = 0;

function updateCartBadge() {
  const badge = document.querySelector('.cart-count');
  if (badge) {
    badge.textContent = cartCount;
    badge.style.transform = 'scale(1.3)';
    setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
  }
}

function addToCart(btn, name) {
  cartCount++;
  updateCartBadge();

  // Animate button
  btn.classList.add('loading');
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> تمت الإضافة`;
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.disabled = false;
    btn.classList.remove('loading');
  }, 1800);

  // Show toast
  const toast = document.getElementById('cart-toast');
  const msg = document.getElementById('toast-msg');
  if (toast && msg) {
    msg.textContent = `تمت إضافة "${name}" إلى السلة`;
    toast.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 3000);
  }
}


/* ==============================
   NAVBAR – SCROLL BEHAVIOR
   ============================== */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top');

  function onScroll() {
    const y = window.scrollY;

    // Scrolled state for glass effect
    if (y > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-to-top button
    if (y > 500) {
      scrollTopBtn && scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn && scrollTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();


/* ==============================
   HAMBURGER MENU
   ============================== */
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();


/* ==============================
   SMOOTH SCROLL FOR ANCHORS
   ============================== */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });
})();


/* ==============================
   SCROLL ANIMATIONS (IntersectionObserver)
   ============================== */
(function initScrollAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('animated');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });

  // Staggered cards observer
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const delay = parseInt(card.dataset.delay || 0);
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, delay);
        cardObserver.unobserve(card);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  // Set initial state for cards and observe
  document.querySelectorAll('.product-card, .review-card, .why-card, .brand-card, .acc-product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.4,0,0.2,1)';
    cardObserver.observe(card);
  });
})();


/* ==============================
   HERO PARTICLES
   ============================== */
(function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const count = window.innerWidth < 768 ? 8 : 18;

  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    dot.classList.add('particle');

    const size = Math.random() * 6 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 4 + 3;
    const delay = Math.random() * 4;
    const opacity = Math.random() * 0.5 + 0.15;

    dot.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      right: ${x}%;
      top: ${y}%;
      --dur: ${duration}s;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
      opacity: ${opacity};
    `;

    container.appendChild(dot);
  }
})();


/* ==============================
   PRODUCT FILTER TABS
   ============================== */
(function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('#phones-grid .product-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      cards.forEach((card, idx) => {
        const brand = card.dataset.brand || '';
        const matches = filter === 'all' || brand === filter;

        if (matches) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, idx * 60);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();


/* ==============================
   CONTACT FORM
   ============================== */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.btn-submit');
    const originalHTML = submitBtn.innerHTML;

    // Loading state
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
        <path d="M21 12a9 9 0 11-6.219-8.56"/>
      </svg>
      جاري الإرسال...
    `;
    submitBtn.disabled = true;

    // Simulate sending
    setTimeout(() => {
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        تم الإرسال بنجاح!
      `;
      submitBtn.style.background = '#10b981';
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 3500);
    }, 1800);
  });
})();


/* ==============================
   QUICK VIEW MODAL (Simple)
   ============================== */
(function initQuickView() {
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card, .acc-product-card');
      if (!card) return;

      const name = card.querySelector('.card-name')?.textContent || '';
      const price = card.querySelector('.price-current')?.textContent || '';
      const img = card.querySelector('img')?.src || '';
      const stars = card.querySelector('.stars')?.textContent || '★★★★★';
      const ratingCount = card.querySelector('.rating-count')?.textContent || '';
      const brand = card.querySelector('.card-brand')?.textContent || '';

      createModal({ name, price, img, stars, ratingCount, brand });
    });
  });
})();

function createModal({ name, price, img, stars, ratingCount, brand }) {
  // Remove any existing modal
  const existing = document.getElementById('quick-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'quick-modal';
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(8px);
    animation: fadeIn 0.25s ease;
  `;

  modal.innerHTML = `
    <style>
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    </style>
    <div style="
      background: #fff;
      border-radius: 24px;
      max-width: 560px;
      width: 100%;
      overflow: hidden;
      box-shadow: 0 40px 100px rgba(0,0,0,0.25);
      animation: slideUp 0.35s cubic-bezier(0.4,0,0.2,1);
      direction: rtl;
    ">
      <div style="position:relative;">
        <img src="${img}" alt="${name}" style="width:100%;aspect-ratio:16/10;object-fit:cover;display:block;" />
        <button onclick="document.getElementById('quick-modal').remove()" style="
          position:absolute;top:16px;left:16px;
          width:36px;height:36px;border-radius:50%;
          background:rgba(0,0,0,0.5);color:#fff;
          border:none;cursor:pointer;font-size:1.1rem;
          display:flex;align-items:center;justify-content:center;
          font-family:sans-serif;
        ">✕</button>
      </div>
      <div style="padding:28px 28px 32px;">
        ${brand ? `<p style="font-size:0.75rem;font-weight:700;color:#0071e3;letter-spacing:1px;margin-bottom:8px;text-transform:uppercase;">${brand}</p>` : ''}
        <h2 style="font-family:'Cairo',sans-serif;font-size:1.5rem;font-weight:800;color:#1d1d1f;margin-bottom:12px;letter-spacing:-0.5px;">${name}</h2>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
          <span style="color:#ff9f0a;font-size:1rem;letter-spacing:2px;">${stars}</span>
          <span style="font-size:0.8rem;color:#aeaeb2;">${ratingCount}</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
          <span style="font-family:'Cairo',sans-serif;font-size:1.6rem;font-weight:900;color:#1d1d1f;letter-spacing:-1px;">${price}</span>
          <button onclick="addToCart(this, '${name.replace(/'/g, "\\'")}'); document.getElementById('quick-modal').remove();"
            style="
              font-family:'Cairo',sans-serif;
              background:#0071e3;color:#fff;
              padding:13px 28px;border-radius:100px;
              border:none;cursor:pointer;
              font-size:0.95rem;font-weight:700;
              transition:background 0.2s;
            "
            onmouseover="this.style.background='#004d9f'"
            onmouseout="this.style.background='#0071e3'"
          >أضف إلى السلة</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  });

  // Handle modal removal
  const observer = new MutationObserver(() => {
    if (!document.getElementById('quick-modal')) {
      document.body.style.overflow = '';
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true });

  // Close on Escape
  function onKeyDown(e) {
    if (e.key === 'Escape') {
      modal.remove();
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    }
  }
  document.addEventListener('keydown', onKeyDown);
}


/* ==============================
   SPIN ANIMATION (for form submit)
   ============================== */
(function addSpinStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .spin {
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .btn-add-cart {
      transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    }
    .btn-add-cart:disabled {
      opacity: 0.7;
      cursor: default;
    }
  `;
  document.head.appendChild(style);
})();


/* ==============================
   LAZY IMAGE LOADING FALLBACK
   ============================== */
(function initImageFallback() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      img.src = 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80&auto=format';
      img.alt = 'صورة المنتج';
    });
  });
})();


/* ==============================
   COUNTER ANIMATION (stats)
   ============================== */
(function initCounters() {
  const stats = document.querySelectorAll('.stat-num');
  if (!stats.length) return;

  const parseValue = (text) => {
    const cleaned = text.replace(/[^0-9.]/g, '');
    return parseFloat(cleaned) || 0;
  };

  const formatValue = (original, current) => {
    if (original.startsWith('+')) return '+' + Math.round(current).toLocaleString('ar-SA');
    if (original.endsWith('K')) return '+' + (current / 1000).toFixed(0) + 'K';
    if (original === '5★') return '5★';
    return original;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const original = el.textContent.trim();
      const target = parseValue(original);

      if (target === 0 || original === '5★') return;

      let start = 0;
      const duration = 1800;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;

        if (original.includes('K')) {
          el.textContent = '+' + Math.round(current / 1000) + 'K';
        } else {
          el.textContent = '+' + Math.round(current).toLocaleString('ar-SA');
        }

        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = original;
      };

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  stats.forEach(el => observer.observe(el));
})();


/* ==============================
   BRAND CARD ACTIVE STATE
   ============================== */
(function initBrandCards() {
  const brandCards = document.querySelectorAll('.brand-card');
  const filterTabs = document.querySelectorAll('.filter-tab');

  brandCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const brand = card.dataset.brand;

      // Trigger the corresponding filter tab
      const matchingTab = Array.from(filterTabs).find(t => t.dataset.filter === brand);
      if (matchingTab) {
        matchingTab.click();
      }
    });
  });
})();


/* ==============================
   REVEAL NAV ON HERO SCROLL
   ============================== */
(function initNavReveal() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;
      if (!entry.isIntersecting) {
        // Not in hero anymore, ensure scrolled class
        navbar.classList.add('scrolled');
      }
    });
  }, { threshold: 0 });

  observer.observe(heroSection);
})();


/* ==============================
   PAGE LOAD – INIT
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  // Mark hero text as animated immediately (it's above fold)
  setTimeout(() => {
    const heroText = document.querySelector('.hero-text');
    const heroImg = document.querySelector('.hero-image-wrap');
    if (heroText) heroText.classList.add('animated');
    if (heroImg) heroImg.classList.add('animated');
  }, 200);

  console.log('%c NEXT MOBILE 🚀', 'color:#0071e3;font-size:18px;font-weight:900;');
  console.log('%c جيل جديد من الهواتف الذكية', 'color:#666;font-size:12px;');
});
