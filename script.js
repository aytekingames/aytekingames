const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        btn.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️';
    }
});
