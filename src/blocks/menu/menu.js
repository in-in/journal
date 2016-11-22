const menuData = 'menu.json';

Vue.component('main-menu', {
  template: '#main-menu',
  data: function () {
    return {
      items: JSON.parse(menu.json);,
      itemsss: [
        {message: 'foo'},
        {message: 'bar'},
        {message: 'baz'},
        {message: 'rac'}
      ]
    }
  }
});
