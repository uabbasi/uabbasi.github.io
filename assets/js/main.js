// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved dark mode preference or use system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('theme');
  
  // Apply the right theme based on the stored preference or system preference
  if (storedTheme === 'dark' || (storedTheme === null && prefersDark) || document.body.getAttribute('data-darkmode') === 'true') {
    document.body.classList.add('dark-theme');
  }
  
  // Create dark mode toggle button
  const themeToggle = document.createElement('button');
  themeToggle.id = 'theme-toggle';
  themeToggle.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
  themeToggle.title = 'Toggle dark mode';
  themeToggle.style.cssText = `
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 999;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background-color: var(--bg-color);
    color: var(--text-color);
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  `;
  
  document.body.appendChild(themeToggle);
  
  // Add event listener for toggle button
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '☀️' : '🌙';
  });
});