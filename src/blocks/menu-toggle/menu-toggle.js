Vue.component('menu-toggle', {
  template: '#menu-toggle',
  data: function () {
    return {
      menuShow: true
    };
  },
  props: ['buttonText']
});
