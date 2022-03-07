const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "Awesome socks to keep your feet warm and trendy!",
      image: "./assets/images/socks_green.jpg",
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
    };
  },
});
