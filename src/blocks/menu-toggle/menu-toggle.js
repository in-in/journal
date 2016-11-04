function toogleMenu() {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  button.addEventListener('click', function () {
    menu.classList.toggle('menu--hide');
  }, false);
}

toogleMenu();
