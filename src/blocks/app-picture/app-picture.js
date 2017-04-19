Vue.component('app-picture', {
  template: '#app-picture',
  props: ['img'],
  data() {
    return {
      path: 'assets/images/'
    };
  }
});
