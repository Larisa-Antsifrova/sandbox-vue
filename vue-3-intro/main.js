const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      description: "Awesome socks to keep your feet warm and trendy!",
      selectedVariant: 0,
      brand: "Vue Mastery",
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
  computed: {
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
});
