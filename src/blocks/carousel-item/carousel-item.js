Vue.component('carousel-item', {
  template: '#carousel-item',
  data() {
    return {
      index: 0
    };
  },
  computed: {
    transitionDirection() {
      if (this.$parent.direction) {
        return `carousel-item-${this.$parent.direction}`;
      }
    },
    visible() {
      return this.index === this.$parent.index;
    }
  }
});
