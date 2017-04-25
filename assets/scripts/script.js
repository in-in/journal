'use strict';

Vue.component('app-button', {
  template: '#app-button',
  props: {
    hideText: {
      type: Boolean,
      default: true
    }
  }
});;'use strict';

Vue.component('app-contact', {
  template: '#app-contact',
  props: {
    type: {
      required: true
    },
    contact: String
  },
  filters: {
    formatTel: function formatTel(val) {
      if (!val) {
        return '';
      }
      return '+' + val.replace(/[^0-9]/g, '');
    }
  }
});;'use strict';

Vue.component('app-copyright', {
  template: '#app-copyright',
  props: ['symbol', 'year', 'text']
});;'use strict';

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
    addPrefix: function addPrefix() {
      return '#icon-' + this.name;
    },
    createViewbox: function createViewbox() {
      return '0 0 ' + this.width + ' ' + this.height;
    }
  }
});;'use strict';

Vue.component('app-link-list', {
  template: '#app-link-list',
  props: ['links']
});;'use strict';

Vue.component('app-list', {
  template: '#app-list',
  props: ['title', 'items']
});;'use strict';

Vue.component('app-picture', {
  template: '#app-picture',
  props: ['img'],
  data: function data() {
    return {
      path: 'assets/images/'
    };
  }
});;'use strict';

Vue.component('app-section', {
  template: '#app-section',
  props: ['title']
});;'use strict';

Vue.component('app-section-title', {
  template: '#app-section-title',
  props: ['title', 'nobg']
});;'use strict';

Vue.component('app-social-button', {
  template: '#app-social-button',
  props: ['icon', 'link', 'title']
});;'use strict';

Vue.component('app-thumbnail', {
  template: '#app-thumbnail',
  props: ['src']
});;'use strict';

Vue.component('card', {
  template: '#card',
  props: ['buttons']
});;'use strict';

Vue.component('carousel', {
  template: '#carousel',
  data: function data() {
    return {
      index: 0,
      itemsList: [],
      direction: null
    };
  },
  mounted: function mounted() {
    this.itemsList = this.$children.filter(function (element) {
      if (element.name !== 'arrow') {
        return element;
      }
    });
    this.itemsList.forEach(function (item, i) {
      item.index = i;
    });
  },

  methods: {
    prev: function prev() {
      this.index--;
      this.direction = 'left';
      if (this.index < 0) {
        this.index = this.itemsListCount - 1;
      }
    },
    next: function next() {
      this.index++;
      this.direction = 'right';
      if (this.index >= this.itemsListCount) {
        this.index = 0;
      }
    }
  },
  computed: {
    itemsListCount: function itemsListCount() {
      return this.itemsList.length;
    }
  }
});;'use strict';

Vue.component('carousel-item', {
  template: '#carousel-item',
  name: 'foobar',
  data: function data() {
    return {
      index: 0
    };
  },

  computed: {
    visible: function visible() {
      return this.index === this.$parent.index;
    },
    transitionDirection: function transitionDirection() {
      if (this.$parent.direction) {
        return 'carousel-item-' + this.$parent.direction;
      }
    }
  }
});;'use strict';

Vue.component('main-menu', {
  template: '#main-menu',
  data: function data() {
    return {
      items: [['Home'], ['News'], ['Categories'], ['Articles'], ['About'], ['Contact'], ['Subscribe'], ['Purchase']]
    };
  }
});;'use strict';

Vue.component('menu-toggle', {
  template: '#menu-toggle',
  props: ['buttonText'],
  methods: {
    menuShow: function menuShow() {
      this.$root.menuShow = !this.$root.menuShow;
    }
  }
});;'use strict';

Vue.component('subscribe', {
  template: '#subscribe'
});;'use strict';

var carouselContent = [{
  type: 'horizontal',
  img: {
    name: 'slide1',
    widht: [872, 820, 719, 603, 467, 300]
  },
  category: 'travel',
  title: 'One morning, when Gregor',
  desc: 'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
}, {
  type: 'horizontal',
  img: {
    name: 'slide2',
    widht: [872, 829, 754, 682, 604, 517, 418, 300]
  },
  category: 'technology',
  title: 'The bedding was hardly',
  desc: 'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.'
}, {
  type: 'horizontal',
  img: {
    name: 'slide3',
    widht: [872, 839, 702, 525, 300]
  },
  category: 'business',
  title: 'What\'s happened to me?',
  desc: 'His room, a proper human room although a little too small, lay peacefully between its four familiar walls.'
}, {
  type: 'horizontal',
  img: {
    name: 'slide4',
    widht: [872, 824, 724, 605, 466, 300]
  },
  category: 'entertainment',
  title: 'A collection of textile',
  desc: 'It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.'
}];

var latestPosts = [{
  type: 'vertical',
  img: {
    name: 'post1',
    widht: [780, 683, 465, 230]
  },
  category: 'technology',
  title: 'It was a simple matter to throw off the covers',
  desc: 'But it became difficult after that, especially as he was so exceptionally broad. He would have used his arms and his hands to push himself up'
}, {
  type: 'vertical',
  img: {
    name: 'post2',
    widht: [780, 740, 673, 611, 535, 447, 351, 230]
  },
  category: 'business',
  title: 'The first thing he wanted to do was get the lower part',
  desc: 'So then he tried to get the top part of his body out of the bed first, carefully turning his head to the side. This he managed quite easily, and despite its breadth and its weight'
}, {
  type: 'vertical',
  img: {
    name: 'post3',
    widht: [780, 743, 639, 525, 395, 230]
  },
  category: 'travel',
  title: 'At the same time, though, he did not forget to remind himself that calm',
  desc: 'At times like this he would direct his eyes to the window and look out as clearly as he could, but unfortunately, even the other side of the narrow street was enveloped in morning fog and the view had little confidence or cheer to offer him.'
}, {
  type: 'vertical',
  img: {
    name: 'post4',
    widht: [780, 709, 481, 230]
  },
  category: 'entertainment',
  title: 'It took just as much effort to get back to where he had been earlier',
  desc: 'He told himself once more that it was not possible for him to stay in bed and that the most sensible thing to do would be to get free of it in whatever way he could at whatever sacrifice.'
}, {
  type: 'vertical',
  img: {
    name: 'post5',
    widht: [780, 678, 467, 230]
  },
  category: 'travel',
  title: 'And he lay there quietly a while longer',
  desc: 'But then he said to himself: "Before it strikes quarter past seven I\'ll definitely have to have got properly out of bed.'
}, {
  type: 'vertical',
  img: {
    name: 'post6',
    widht: [780, 707, 478, 230]
  },
  category: 'technology',
  title: 'When Gregor was already sticking half way out of the bed',
  desc: 'Two strong people - he had his father and the maid in mind - would have been more than enough; they would only have to push their arms under the dome of his back'
}, {
  type: 'vertical',
  img: {
    name: 'post7',
    widht: [780, 721, 519, 230]
  },
  category: 'business',
  title: 'After a while he had already moved so far across',
  desc: 'The time was now ten past seven and he would have to make a final decision very soon. Then there was a ring at the door of the flat.'
}, {
  type: 'vertical',
  img: {
    name: 'post8',
    widht: [780, 758, 618, 450, 230]
  },
  category: 'entertainment',
  title: 'For a moment everything remained quiet',
  desc: 'Gregor only needed to hear the visitor\'s first words of greeting and he knew who it was - the chief clerk himself.'
}];

var categoriesList = [{
  type: 'categorie',
  img: {
    name: 'post4',
    widht: [780, 709, 481, 230]
  },
  category: 'entertainment'
}, {
  type: 'categorie',
  img: {
    name: 'slide1',
    widht: [872, 820, 719, 603, 467, 300]
  },
  category: 'travel'
}, {
  type: 'categorie',
  img: {
    name: 'post1',
    widht: [780, 683, 465, 230]
  },
  category: 'technology'
}];

var popularPosts = [{
  title: 'Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.',
  date: {
    datetime: '2015-08-21',
    time: 'August 21 2015'
  }
}, {
  title: 'He was still hurriedly thinking all this through, unable to decide to get out of the bed, when the clock struck quarter to seven',
  date: {
    datetime: '2015-08-21',
    time: 'August 22 2015'
  }
}, {
  title: 'As if from deep inside him, there was a painful and uncontrollable squeaking mixed in with it',
  date: {
    datetime: '2015-08-23',
    time: 'August 23 2015'
  }
}, {
  title: 'The first thing he wanted to do was to get up in peace without being disturbed, to get dressed, and most of all to have his breakfast.',
  date: {
    datetime: '2015-08-24',
    time: 'August 24 2015'
  }
}];

var newPosts = [{
  title: 'It was a simple matter to throw off the covers',
  date: {
    datetime: '2015-07-15',
    time: 'July 15 2015'
  }
}, {
  title: 'The first thing he wanted to do was get the lower part',
  date: {
    datetime: '2015-07-16',
    time: 'July 16 2015'
  }
}, {
  title: 'At the same time, though, he did not forget to remind himself that calm',
  date: {
    datetime: '2015-07-17',
    time: 'July 17 2015'
  }
}, {
  title: 'It took just as much effort to get back to where he had been earlier',
  date: {
    datetime: '2015-07-18',
    time: 'July 18 2015'
  }
}];

var mostCommentedPosts = [{
  title: 'The first thing he wanted to do was get the lower part of his body out of the bed, but he had never seen this lower part, and could not imagine what it looked like',
  date: {
    datetime: '2015-09-21',
    time: 'September 21 2015'
  }
}, {
  title: 'So then he tried to get the top part of his body out of the bed first, carefully turning his head to the side',
  date: {
    datetime: '2015-09-22',
    time: 'September 22 2015'
  }
}, {
  title: 'It took just as much effort to get back to where he had been earlier, but when he lay there sighing',
  date: {
    datetime: '2015-09-23',
    time: 'September 23 2015'
  }
}, {
  title: 'At times like this he would direct his eyes to the window and look out as clearly as he could',
  date: {
    datetime: '2015-09-24',
    time: 'September 24 2015'
  }
}];

var recentPosts = [{
  title: 'Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.',
  date: {
    datetime: '2015-08-21',
    time: 'March 21 2017'
  }
}, {
  title: 'He was still hurriedly thinking all this through, unable to decide to get out of the bed, when the clock struck quarter to seven',
  date: {
    datetime: '2015-08-22',
    time: 'March 22 2017'
  }
}, {
  title: 'As if from deep inside him, there was a painful and uncontrollable squeaking mixed in with it',
  date: {
    datetime: '2015-08-23',
    time: 'March 23 2017'
  }
}];

var socialButtons = [{
  title: 'Facebook',
  icon: 'facebook',
  link: 'https://www.facebook.com/'
}, {
  title: 'Google+',
  icon: 'google-plus',
  link: 'https://plus.google.com'
}, {
  title: 'LinkedIn',
  icon: 'linkedin',
  link: 'https://www.linkedin.com/'
}, {
  title: 'Pinterest',
  icon: 'pinterest',
  link: 'https://www.pinterest.com/'
}, {
  title: 'Twitter',
  icon: 'twitter',
  link: 'https://twitter.com'
}];

var instagramGallery = [{
  img: {
    name: 'instagram1',
    widht: [300]
  }
}, {
  img: {
    name: 'instagram2',
    widht: [300]
  }
}, {
  img: {
    name: 'instagram3',
    widht: [300]
  }
}, {
  img: {
    name: 'instagram4',
    widht: [300]
  }
}, {
  img: {
    name: 'instagram5',
    widht: [300]
  }
}, {
  img: {
    name: 'instagram6',
    widht: [300]
  }
}];

var footerLinkList = [{
  link: 'https://en.wikipedia.org/wiki/Privacy_policy',
  text: 'Privacy Policy'
}, {
  link: 'https://en.wikipedia.org/wiki/Terms_of_service',
  text: 'Terms & Conditions'
}];

new Vue({
  el: '.page',
  data: {
    windowWidth: 0,
    menuShow: false,
    carouselContent: carouselContent,
    latestPosts: latestPosts,
    categoriesList: categoriesList,
    popularPosts: popularPosts,
    newPosts: newPosts,
    mostCommentedPosts: mostCommentedPosts,
    recentPosts: recentPosts,
    socialButtons: socialButtons,
    instagramGallery: instagramGallery,
    footerLinkList: footerLinkList,
    itemsInRow: 4
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth();
    });
  },

  methods: {
    getWindowWidth: function getWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    reorderItem: function reorderItem(i, length) {
      if (i === 0 || i === length - 1) {
        return i;
      } else if (i < this.itemsInRow) {
        return i + i;
      }
      return i - (length - 1 - i);
    },
    reorderClass: function reorderClass(i) {
      if (i < this.itemsInRow) {
        return i % 2;
      }
      return !(i % 2);
    },
    goToUp: function goToUp() {
      var scrollStep = -window.scrollY / (1000 / 15);
      var scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  }
});