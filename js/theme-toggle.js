document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateButton();
    }
});

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    
    
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    updateButton();
}

function updateButton() {
    const icon = document.querySelector('.theme-icon');
    const text = document.querySelector('.theme-text');
    const isLight = document.body.classList.contains('light-theme');
    
    if (isLight) {
        icon.textContent = '☀️';
        text.textContent = 'Light';
    } else {
        icon.textContent = '🌙';
        text.textContent = 'Dark';
    }
}