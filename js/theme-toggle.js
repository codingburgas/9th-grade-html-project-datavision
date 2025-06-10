let currentTheme = 'dark';

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  createThemeToggle();
  applyTheme();
});

function createThemeToggle() {
  const existingToggle = document.querySelector('.theme-toggle-container');
  if (existingToggle) {
    existingToggle.remove();
  }

  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'theme-toggle-container';

  const toggleButton = document.createElement('button');
  toggleButton.className = 'theme-toggle';
  toggleButton.id = 'themeToggle';
  updateToggleButtonContent(toggleButton);
  
  toggleContainer.appendChild(toggleButton);
  document.body.appendChild(toggleContainer);

  toggleButton.addEventListener('click', toggleTheme);
}

function loadTheme() {
  
  const urlParams = new URLSearchParams(window.location.search);
  const themeParam = urlParams.get('theme');
  
  if (themeParam) {
    currentTheme = themeParam === 'light' ? 'light' : 'dark';
    
    localStorage.setItem('theme', currentTheme);
  } else {
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      currentTheme = savedTheme;
    } else {
      currentTheme = 'dark'; 
    }
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Save to localStorage
  localStorage.setItem('theme', currentTheme);
  
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
      <span class="theme-text">Light</span>
    `;
  } else {
    button.innerHTML = `
      <span class="theme-icon">🌙</span>
      <span class="theme-text">Dark</span>
    `;
  }
}

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
  const links = document.querySelectorAll('a[href$=".html"]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    const url = new URL(href, window.location.origin);
    
    
    url.searchParams.delete('theme');
    
    link.setAttribute('href', url.pathname + url.search);
  });
}