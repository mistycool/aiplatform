function openMenu() {
  const menu = document.querySelector('.menu');
  menu.style.right = '0';
}

// Optional: Close menu when clicking outside
document.addEventListener('click', (event) => {
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon');
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.style.right = '-250px';
  }
});
