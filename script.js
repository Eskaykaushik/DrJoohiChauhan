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


document.getElementById('searchInput').addEventListener('keyup', function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const desc = card.querySelector('.card-text').textContent.toLowerCase();

    if (title.includes(query) || desc.includes(query)) {
      card.parentElement.style.display = 'block';
    } else {
      card.parentElement.style.display = 'none';
    }
  });
});
