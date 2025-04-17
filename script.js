document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // Apply initial theme
  document.body.classList.toggle('light-mode', currentTheme === 'light');
  toggleButton.textContent = currentTheme === 'light' ? '🌙' : '☀️';

  toggleButton.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    toggleButton.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});
