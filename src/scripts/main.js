const carouselContent = [
  {
    type: 'horizontal',
    img: {
      name: 'slide1',
      widht: [ 872, 820, 719, 603, 467, 300 ]
    },
    category: 'travel',
    title: 'One morning, when Gregor',
    desc: 'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
  },
  {
    type: 'horizontal',
    img: {
      name: 'slide2',
      widht: [ 872, 829, 754, 682, 604, 517, 418, 300 ]
    },
    category: 'technology',
    title: 'The bedding was hardly',
    desc: 'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.'
  },
  {
    type: 'horizontal',
    img: {
      name: 'slide3',
      widht: [ 872, 839, 702, 525, 300 ]
    },
    category: 'business',
    title: 'What\'s happened to me?',
    desc: 'His room, a proper human room although a little too small, lay peacefully between its four familiar walls.'
  },
  {
    type: 'horizontal',
    img: {
      name: 'slide4',
      widht: [ 872, 824, 724, 605, 466, 300 ]
    },
    category: 'entertainment',
    title: 'A collection of textile',
    desc: 'It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.'
  }
];

const latestPosts = [
  {
    type: 'vertical',
    img: {
      name: 'post1',
      widht: [ 780, 683, 465, 230 ]
    },
    category: 'technology',
    title: 'It was a simple matter to throw off the covers',
    desc: 'But it became difficult after that, especially as he was so exceptionally broad. He would have used his arms and his hands to push himself up'
  },
  {
    type: 'vertical',
    img: {
      name: 'post2',
      widht: [ 780, 740, 673, 611, 535, 447, 351, 230 ]
    },
    category: 'business',
    title: 'The first thing he wanted to do was get the lower part',
    desc: 'So then he tried to get the top part of his body out of the bed first, carefully turning his head to the side. This he managed quite easily, and despite its breadth and its weight'
  },
  {
    type: 'vertical',
    img: {
      name: 'post3',
      widht: [ 780, 743, 639, 525, 395, 230 ]
    },
    category: 'travel',
    title: 'At the same time, though, he did not forget to remind himself that calm',
    desc: 'At times like this he would direct his eyes to the window and look out as clearly as he could, but unfortunately, even the other side of the narrow street was enveloped in morning fog and the view had little confidence or cheer to offer him.'
  },
  {
    type: 'vertical',
    img: {
      name: 'post4',
      widht: [ 780, 709, 481, 230 ]
    },
    category: 'entertainment',
    title: 'It took just as much effort to get back to where he had been earlier',
    desc: 'He told himself once more that it was not possible for him to stay in bed and that the most sensible thing to do would be to get free of it in whatever way he could at whatever sacrifice.'
  },
  {
    type: 'vertical',
    img: {
      name: 'post5',
      widht: [ 780, 678, 467, 230 ]
    },
    category: 'travel',
    title: 'And he lay there quietly a while longer',
    desc: 'But then he said to himself: "Before it strikes quarter past seven I\'ll definitely have to have got properly out of bed.'
  },
  {
    type: 'vertical',
    img: {
      name: 'post6',
      widht: [ 780, 707, 478, 230 ]
    },
    category: 'technology',
    title: 'When Gregor was already sticking half way out of the bed',
    desc: 'Two strong people - he had his father and the maid in mind - would have been more than enough; they would only have to push their arms under the dome of his back'
  },
  {
    type: 'vertical',
    img: {
      name: 'post7',
      widht: [ 780, 721, 519, 230 ]
    },
    category: 'business',
    title: 'After a while he had already moved so far across',
    desc: 'The time was now ten past seven and he would have to make a final decision very soon. Then there was a ring at the door of the flat.'
  },
  {
    type: 'vertical',
    img: {
      name: 'post8',
      widht: [ 780, 758, 618, 450, 230 ]
    },
    category: 'entertainment',
    title: 'For a moment everything remained quiet',
    desc: 'Gregor only needed to hear the visitor\'s first words of greeting and he knew who it was - the chief clerk himself.'
  }
];

const categoriesList = [
  {
    type: 'categorie',
    img: {
      name: 'post4',
      widht: [ 780, 709, 481, 230 ]
    },
    category: 'entertainment'
  },
  {
    type: 'categorie',
    img: {
      name: 'slide1',
      widht: [ 872, 820, 719, 603, 467, 300 ]
    },
    category: 'travel'
  },
  {
    type: 'categorie',
    img: {
      name: 'post1',
      widht: [ 780, 683, 465, 230 ]
    },
    category: 'technology'
  }
];

new Vue({
  el: '.page',
  data: {
    windowWidth: 0,
    menuShow: false,
    carouselContent,
    latestPosts,
    categoriesList,
    itemsInRow: 4
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    reorderItem(i, length) {
      if (i === 0 || i === (length - 1)) {
        return i;
      }else if (i < this.itemsInRow) {
        return i + i;
      }
      return (i - ((length - 1) - i));
    },
    reorderClass(i) {
      if (i < this.itemsInRow) {
        return i % 2;
      }
      return !(i % 2);
    }
  }
});
