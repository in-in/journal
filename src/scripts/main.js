// (function ($) {
//
//   console.log('on air');
//
// })(jQuery);
console.log('main');

function showFontSize() {
  const foo = document.querySelector('.foo');
  const fontSize = window.getComputedStyle(foo, null).getPropertyValue('font-size');
  console.log(fontSize);
}

window.addEventListener('resize', showFontSize, false);
