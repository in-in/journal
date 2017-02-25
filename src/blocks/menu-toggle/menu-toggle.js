Vue.component('menu-toggle', {
  template: '#menu-toggle',
  props: ['buttonText'],
  methods: {
    menuShow() {
      this.$root.menuShow = !this.$root.menuShow;
    }
  }
});
