import Vue from 'vue';

// Render method
const Button = Vue.component('Btn', {
  render(createElement) {
    return createElement('button', this.$slots.default);
  },
});

// Template property - precompiler required
// const Button = Vue.component('Btn', {
//   template: '<button>String Button</button>',
// });

export default Button;
