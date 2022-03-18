const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    updateCart(productId) {
      this.cart.push(productId);
    },
  },
});
