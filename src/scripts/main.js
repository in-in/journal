const carouselContent = [
  {
    category: 'travel',
    title: 'One morning, when Gregor',
    desc: 'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
  },
  {
    category: 'technology',
    title: 'The bedding was hardly',
    desc: 'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.'
  },
  {
    category: 'business',
    title: 'What\'s happened to me?',
    desc: 'His room, a proper human room although a little too small, lay peacefully between its four familiar walls.'
  },
  {
    category: 'entertainment',
    title: 'A collection of textile',
    desc: 'It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.'
  }
];

const page = new Vue({
  el: '.page',
  data: {
    windowWidth: 0,
    menuShow: false,
    carouselContent
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
