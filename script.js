const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    // Mevcut temayı kontrol et
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Aydınlık moda geç
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        // Karanlık moda geç
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});
