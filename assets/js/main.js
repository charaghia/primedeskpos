/**
 * PrimeDesk Smart POS — Official Website Interactive Engine
 * Handles theme toggles, module filtering, screenshot lightboxes,
 * and direct WhatsApp/Email purchase & trial request generators.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initHeroEditionSwitcher();
  initModuleFilter();
  initScreenshotLightbox();
  initFaqAccordion();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Dark / Light Theme Toggle
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('primedesk_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('primedesk_theme', nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  const icon = toggleBtn.querySelector('i');
  if (!icon) return;

  if (theme === 'light') {
    icon.className = 'fas fa-moon';
    toggleBtn.setAttribute('title', 'Switch to Dark Mode');
  } else {
    icon.className = 'fas fa-sun';
    toggleBtn.setAttribute('title', 'Switch to Light Mode');
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      const icon = toggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('mobile-active')) {
          icon.className = 'fas fa-xmark';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Close when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
        const icon = toggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
}

/* --------------------------------------------------------------------------
   3. Hero Interactive Edition Switcher
   -------------------------------------------------------------------------- */
function initHeroEditionSwitcher() {
  const tabs = document.querySelectorAll('.hero-tab-btn');
  const heroImg = document.getElementById('heroScreenImg');
  const heroBadge = document.getElementById('heroEditionBadge');

  if (!tabs.length || !heroImg) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const edition = tab.getAttribute('data-edition');
      if (edition === 'desktop') {
        heroImg.src = 'assets/screenshots/dashboard.png';
        heroImg.alt = 'PrimeDesk Smart POS - Desktop Edition Dashboard';
        if (heroBadge) heroBadge.textContent = 'Desktop Edition (100% Offline SQLite)';
      } else if (edition === 'online') {
        heroImg.src = 'assets/screenshots/pos.png';
        heroImg.alt = 'PrimeDesk Smart POS - Online Cloud Edition';
        if (heroBadge) heroBadge.textContent = 'Online Cloud Edition (Google Sheets Backed)';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Modules Filter Engine
   -------------------------------------------------------------------------- */
function initModuleFilter() {
  const filterBtns = document.querySelectorAll('.module-filter-btn');
  const moduleCards = document.querySelectorAll('.module-card');

  if (!filterBtns.length || !moduleCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      moduleCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Screenshot Lightbox Modal
   -------------------------------------------------------------------------- */
function initScreenshotLightbox() {
  const galleryItems = document.querySelectorAll('[data-lightbox-src]');
  const modal = document.getElementById('screenshotModal');
  if (!modal) return;

  const modalImg = modal.querySelector('.modal-img');
  const modalTitle = modal.querySelector('.modal-title');
  const closeBtn = modal.querySelector('.modal-close-btn');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-lightbox-src');
      const title = item.getAttribute('data-lightbox-title') || 'PrimeDesk Smart POS Preview';
      
      if (modalImg) modalImg.src = src;
      if (modalTitle) modalTitle.textContent = title;
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   6. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Contact & Trial Request Form Processor (WhatsApp & Email Bridge)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('primeDeskLeadForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('leadName')?.value || '').trim();
    const business = (document.getElementById('leadBusiness')?.value || '').trim();
    const phone = (document.getElementById('leadPhone')?.value || '').trim();
    const edition = document.getElementById('leadEdition')?.value || 'Desktop Edition';
    const intent = document.getElementById('leadIntent')?.value || 'Request 2-Day Trial';
    const city = (document.getElementById('leadCity')?.value || '').trim();
    const message = (document.getElementById('leadMessage')?.value || '').trim();

    if (!name || !phone) {
      alert('Please fill in your name and contact number.');
      return;
    }

    // Construct clean WhatsApp formatted message
    const waText = 
`*PrimeDesk Smart POS - Official Inquiry*
----------------------------------------
*Name:* ${name}
*Business Name:* ${business || 'Not Specified'}
*City / Location:* ${city || 'Not Specified'}
*Phone:* ${phone}
*Edition Interested:* ${edition}
*Purpose:* ${intent}
*Notes / Questions:* ${message || 'I would like more information and setup assistance.'}
----------------------------------------
_Generated via PrimeDesk Smart POS Official Portal_`;

    const encodedWaText = encodeURIComponent(waText);
    // Support WhatsApp number can be customized or opened to WhatsApp web
    const waUrl = `https://wa.me/?text=${encodedWaText}`;

    // Prompt user choice: open WhatsApp or Send Email
    const responseBox = document.getElementById('formSuccessNotice');
    if (responseBox) {
      responseBox.style.display = 'block';
      responseBox.scrollIntoView({ behavior: 'smooth' });
    }

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  });
}
