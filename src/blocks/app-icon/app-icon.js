Vue.component('app-icon', {
  template: '#app-icon',
  props: {
    name: String,
    width: {
      default: 1
    },
    height: {
      default: 1
    }
  },
  computed: {
    addPrefix() {
      return '#icon-' + this.name;
    },
    createViewbox() {
      return '0 0 ' + this.width + ' ' + this.height;
    }
  }
});
