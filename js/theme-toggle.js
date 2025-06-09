// Theme management using URL parameters
let currentTheme = 'dark';

document.addEventListener('DOMContentLoaded', () => {
  loadThemeFromURL();
  createThemeToggle();
  applyTheme();
});

function createThemeToggle() {
  // Remove any existing toggle first
  const existingToggle = document.querySelector('.theme-toggle-container');
  if (existingToggle) {
    existingToggle.remove();
  }

  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'theme-toggle-container';

  const toggleButton = document.createElement('button');
  toggleButton.className = 'theme-toggle';
  toggleButton.id = 'themeToggle';
  
  // Set initial content
  updateToggleButtonContent(toggleButton);
  
  toggleContainer.appendChild(toggleButton);
  document.body.appendChild(toggleContainer); // Add directly to body

  toggleButton.addEventListener('click', toggleTheme);
}

function loadThemeFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const themeParam = urlParams.get('theme');
  if (themeParam === 'light') {
    currentTheme = 'light';
  } else {
    currentTheme = 'dark';
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme();
  updateAllLinks();
}

function applyTheme() {
  const body = document.body;
  const toggleButton = document.getElementById('themeToggle');

  if (currentTheme === 'light') {
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
  }

  if (toggleButton) {
    updateToggleButtonContent(toggleButton);
  }
}

function updateToggleButtonContent(button) {
  if (currentTheme === 'light') {
    button.innerHTML = `
      <span class="theme-icon">☀️</span>
      <span class="theme-text">Светла</span>
    `;
  } else {
    button.innerHTML = `
      <span class="theme-icon">🌙</span>
      <span class="theme-text">Тъмна</span>
    `;
  }
}

// Legacy function for compatibility
function updateToggleButton(button) {
  if (button) {
    updateToggleButtonContent(button);
  } else {
    const toggleButton = document.getElementById('themeToggle');
    if (toggleButton) {
      updateToggleButtonContent(toggleButton);
    }
  }
}

function updateAllLinks() {
  // Update all navigation links to include theme parameter
  const links = document.querySelectorAll('a[href$=".html"]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    const url = new URL(href, window.location.origin);
    
    if (currentTheme === 'light') {
      url.searchParams.set('theme', 'light');
    } else {
      url.searchParams.delete('theme');
    }
    
    link.setAttribute('href', url.pathname + url.search);
  });
}