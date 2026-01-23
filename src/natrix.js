/**
 * Natrix CSS - Interactivity
 * Handles Modals, Sidebar Toggles, Dismissible Alerts, and Dropdowns.
 * Zero dependency (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initModals();
  initSidebar();
  initDismissibles();
  initDropdowns();
  initMagneticButtons();
  initToasts();
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
        
        // Handle custom sidebar left positioning if it's the example one
        if (sidebar.id === 'exampleSidebar') {
          sidebar.style.left = sidebar.classList.contains('show') ? '0' : '-280px';
        }

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

/* ========== TOASTS & NOTIFICATIONS ========== */
function initToasts() {
  window.showToast = (title, message, type = 'primary', duration = 5000) => {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
            <div class="toast-header">
                <strong class="me-auto">${title}</strong>
                <button type="button" class="alert-close" style="position: static; padding: 0; margin-left: 1rem;" onclick="this.closest('.toast').remove()">&times;</button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        `;

    container.appendChild(toast);

    // Show
    setTimeout(() => toast.classList.add('show'), 10);

    // Hide and remove
    setTimeout(() => {
      if (toast && toast.parentNode) {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
      }
    }, duration);
  };

  // Floating notifications (top-right alerts)
  window.showNotification = (message, type = 'primary', duration = 5000) => {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible alert-toast fade show`;
    alert.innerHTML = `
      <div class="alert-icon-content">${message}</div>
      <button type="button" class="alert-close" onclick="this.closest('.alert').remove()">&times;</button>
    `;

    container.appendChild(alert);

    // Auto remove
    setTimeout(() => {
      if (alert && alert.parentNode) {
        alert.classList.remove('show');
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-20px)';
        setTimeout(() => alert.remove(), 300);
      }
    }, duration);
  };
}

/* ========== THEME SWITCHER ========== */
function initTheme() {
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const htmlElement = document.documentElement;

  // Load theme from localStorage or OS preference
  const savedTheme = localStorage.getItem('natrix-theme');
  const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    htmlElement.className = savedTheme;
  } else if (osPrefersDark) {
    htmlElement.className = 'dark';
  } else {
    htmlElement.className = 'light';
  }

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      htmlElement.className = newTheme;
      localStorage.setItem('natrix-theme', newTheme);
    });
  });
}
