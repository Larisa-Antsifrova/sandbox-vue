const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      description: "Awesome socks to keep your feet warm and trendy!",
      image: "./assets/images/socks_green.jpg",
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
        },
        {
          id: 2235,
          color: "blue",
        },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
  },
});
