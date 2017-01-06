const carouselContent = [
  {
    position: 'horizontal',
    img: 'slide',
    category: 'travel',
    title: 'One morning, when Gregor',
    desc: 'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
  },
  {
    position: 'horizontal',
    img: 'slide',
    category: 'technology',
    title: 'The bedding was hardly',
    desc: 'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.'
  },
  {
    position: 'horizontal',
    img: 'slide',
    category: 'business',
    title: 'What\'s happened to me?',
    desc: 'His room, a proper human room although a little too small, lay peacefully between its four familiar walls.'
  },
  {
    position: 'horizontal',
    img: 'slide',
    category: 'entertainment',
    title: 'A collection of textile',
    desc: 'It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.'
  }
];

const latestPosts = [
  {
    position: 'vertical',
    img: 'post',
    category: 'technology',
    title: 'One morning, when Gregor',
    desc: 'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
  },
  {
    position: 'vertical',
    img: 'post',
    category: 'business',
    title: 'The bedding was hardly',
    desc: 'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.'
  },
  {
    position: 'vertical',
    img: 'post',
    category: 'travel',
    title: 'What\'s happened to me?',
    desc: 'His room, a proper human room although a little too small, lay peacefully between its four familiar walls.'
  },
  {
    position: 'vertical',
    img: 'post',
    category: 'entertainment',
    title: 'A collection of textile',
    desc: 'It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.'
  },
  {
    position: 'vertical',
    img: 'post',
    category: 'travel',
    title: 'One morning, when Gregor',
    desc: 'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
  },
  {
    position: 'vertical',
    img: 'post',
    category: 'technology',
    title: 'The bedding was hardly',
    desc: 'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.'
  },
  {
    position: 'vertical',
    img: 'post',
    category: 'business',
    title: 'What\'s happened to me?',
    desc: 'His room, a proper human room although a little too small, lay peacefully between its four familiar walls.'
  },
  {
    position: 'vertical',
    img: 'post',
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
    carouselContent,
    latestPosts
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
