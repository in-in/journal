const page = new Vue({
  el: '.page',
  data: {
    windowWidth: 0,
    menuShow: false,
    content: [
      {
        title: 'foo',
        desc: 'bar'
      }
    ]
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    }
  }
});
