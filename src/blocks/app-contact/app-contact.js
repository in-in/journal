Vue.component('app-contact', {
  template: '#app-contact',
  props: {
    type: {
      required: true
    },
    contact: String
  },
  filters: {
    formatTel(val) {
      if (!val) {
        return '';
      }
      return '+' + val.replace(/[^0-9]/g, '');
    }
  }
});
