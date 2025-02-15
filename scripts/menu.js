// Toggle Menu on Click
document.querySelector('.menu-icon').addEventListener('click', function () {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
  console.log('Menu toggled. Open class applied:', menu.classList.contains('open'));
});

// Close Menu When Clicking Outside
document.addEventListener('click', function (event) {
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon');
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.classList.remove('open');
    console.log('Menu closed. Open class removed.');
  }
});
