const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      description: "Awesome socks to keep your feet warm and trendy!",
      image: "./assets/images/socks_green.jpg",
      brand: "Vue Mastery",
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
        },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
  computed: {
    inStock() {
      return !!this.inventory;
    },
    title() {
      return this.brand + " " + this.product;
    },
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(image) {
      this.image = image;
    },
  },
});
