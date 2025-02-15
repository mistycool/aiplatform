function openMenu() {
  const menu = document.querySelector('.menu');
  menu.style.left = '0'; // Slide in on hover
}

// Optional: Close menu when clicking outside
document.addEventListener('click', (event) => {
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon');
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.style.left = '-250px'; // Slide out when clicking outside
  }
});
