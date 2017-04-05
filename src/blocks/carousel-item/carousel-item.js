Vue.component('carousel-item', {
  template: '#carousel-item',
  data() {
    return {
      index: 0
    };
  },
  computed: {
    visible() {
      return this.index === this.$parent.index;
    },
    transitionDirection() {
      if (this.$parent.direction) {
        return `carousel-item-${this.$parent.direction}`;
      }
    }
  }
});
