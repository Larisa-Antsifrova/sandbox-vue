import Vue from 'vue';

export const Button = Vue.component('Btn', {
  render(createElement) {
    return createElement('button', this.$slots.default);
  },
});
