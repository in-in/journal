Vue.component('app-icon', {
  template: '#app-icon',
  props: {
    name: String,
    w: {
      type: Number,
      default: 1
    },
    h: {
      type: Number,
      default: 1
    }
  }
});
