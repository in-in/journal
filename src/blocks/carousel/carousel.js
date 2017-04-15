Vue.component('carousel', {
  template: '#carousel',
  data() {
    return {
      index: 0,
      itemsList: [],
      direction: null
    };
  },
  mounted() {
    this.itemsList = this.$children.filter(element => {
      if (element.name !== 'arrow') {
        return element;
      }
    });
    this.itemsList.forEach((item, i) => {
      item.index = i;
    });
  },
  methods: {
    prev() {
      this.index--;
      this.direction = 'left';
      if (this.index < 0) {
        this.index = this.itemsListCount - 1;
      }
    },
    next() {
      this.index++;
      this.direction = 'right';
      if (this.index >= this.itemsListCount) {
        this.index = 0;
      }
    }
  },
  computed: {
    itemsListCount() {
      return this.itemsList.length;
    }
  }
});
