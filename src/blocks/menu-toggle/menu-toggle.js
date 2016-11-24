Vue.component('menu-toggle', {
  template: '#menu-toggle',
  props: ['buttonText'],
  methods: {
    menuShow: function () {
      this.$root.menuShow = !this.$root.menuShow;
    }
  }
});
