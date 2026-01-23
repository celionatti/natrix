/**
 * Natrix CSS - Interactivity
 * Handles Modals, Sidebar Toggles, Dismissible Alerts, and Dropdowns.
 * Zero dependency (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initModals();
  initSidebar();
  initDismissibles();
  initDropdowns();
  initMagneticButtons();
});

/* ========== NAVBAR ========== */
function initNavbar() {
  const navbarTogglers = document.querySelectorAll('.navbar-toggler');

  navbarTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
      const navbar = toggler.closest('.navbar');
      const navbarNav = navbar.querySelector('.navbar-nav');

      if (navbarNav) {
        navbarNav.classList.toggle('show');
        toggler.setAttribute('aria-expanded', navbarNav.classList.contains('show'));
      }
    });
  });

  // Close navbar when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      document.querySelectorAll('.navbar-nav.show').forEach(nav => {
        nav.classList.remove('show');
        const toggler = nav.closest('.navbar').querySelector('.navbar-toggler');
        if (toggler) {
          toggler.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // Scrolled navbar state
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }
  });
}

/* ========== MODALS ========== */
function initModals() {
  const triggers = document.querySelectorAll('[data-toggle="modal"]');
  const dismissals = document.querySelectorAll('[data-dismiss="modal"]');

  // Open Modal
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-target');
      openModal(targetId);
    });
  });

  // Close Modal (Buttons)
  dismissals.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      closeModal(modal);
    });
  });

  // Close Modal (Click Outside)
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
}

function openModal(modalId) {
  const modal = document.querySelector(modalId);
  if (!modal) return;

  // Create backdrop if not exists
  let backdrop = document.querySelector('.modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    document.body.appendChild(backdrop);
  }

  // Show
  setTimeout(() => {
    backdrop.classList.add('show');
    modal.classList.add('show');
  }, 10);

  document.body.style.overflow = 'hidden'; // Prevent body scroll
}

function closeModal(modal) {
  if (!modal) return;
  const backdrop = document.querySelector('.modal-backdrop');

  modal.classList.remove('show');
  if (backdrop) backdrop.classList.remove('show');

  // Cleanup after animation
  setTimeout(() => {
    if (backdrop) backdrop.remove();
    document.body.style.overflow = '';
  }, 300);
}

/* ========== SIDEBAR TOGGLE ========== */
function initSidebar() {
  const toggles = document.querySelectorAll('[data-toggle="sidebar"]');
  const overlays = document.querySelectorAll('.sidebar-overlay');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = toggle.getAttribute('data-target');
      const sidebar = document.querySelector(targetId) || document.querySelector('.sidebar');

      if (sidebar) {
        sidebar.classList.toggle('show');
        createSidebarOverlay(sidebar);
      }
    });
  });
}

function createSidebarOverlay(sidebar) {
  // Check if overlay exists
  let overlay = document.querySelector('.sidebar-overlay');

  if (sidebar.classList.contains('show')) {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      // Style explicitly or add class
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      overlay.style.zIndex = '1040'; // Just below sidebar (1045)
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.3s';

      document.body.appendChild(overlay);

      // Close sidebar on click
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 300);
      });

      // Fade in
      setTimeout(() => overlay.style.opacity = '1', 10);
    }
  } else {
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 300);
    }
  }
}

/* ========== DISMISSIBLES ========== */
function initDismissibles() {
  const dismissals = document.querySelectorAll('[data-dismiss="alert"]');

  dismissals.forEach(btn => {
    btn.addEventListener('click', () => {
      const alert = btn.closest('.alert');
      if (alert) {
        alert.style.transition = 'opacity 0.3s, transform 0.3s';
        alert.style.opacity = '0';
        alert.style.transform = 'scale(0.9)';
        setTimeout(() => alert.remove(), 300);
      }
    });
  });
}

/* ========== DROPDOWNS ========== */
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown-toggle');

  dropdowns.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const menu = toggle.nextElementSibling;
      if (menu && menu.classList.contains('dropdown-menu')) {
        menu.classList.toggle('show');
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-toggle') && !e.target.closest('.dropdown-menu')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });
}
/* ========== MAGNETIC BUTTONS ========== */
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-magnetic');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}
