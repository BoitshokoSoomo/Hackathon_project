// script.js
function setTheme(theme) {
  document.body.className = theme + '-theme';
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}
