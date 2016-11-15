// function toogleMenu() {
//   const button = document.querySelector('.menu-toggle');
//   const menu = document.querySelector('.menu');
//
//   button.addEventListener('click', function () {
//     menu.classList.toggle('menu--hide');
//     this.classList.toggle('menu-toggle--close');
//     if (menu.classList.contains('menu--dropdown')) {
//       menu.classList.remove('menu--dropdown');
//     }else {
//       menu.classList.add('menu--dropdown');
//     }
//   }, false);
// }
//
// toogleMenu();
//

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  }
});
