const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        btn.textContent = '🌙';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️';
    }
});