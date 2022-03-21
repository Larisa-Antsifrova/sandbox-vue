app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" alt="socks" />
          </div>

          <div class="product-info">
            <h1>{{ title }}</h1>

            <p v-if="inStock > 10">In stock</p>
            <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
            <p v-else>Out of stock</p>

            <p>Shipping: {{shipping}}</p>

            <ul>
              <li v-for="detail in details" :key="detail">{{detail}}</li>
            </ul>

            <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }"
            ></div>

            <div v-for="size in sizes" :key="size">{{size}}</div>

            <button
              class="button"
              :class="{disabledButton: !inStock}"
              @click="addToCart"
              :disabled="!inStock"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <review-form @review-submitted="addReview"></review-form>
      </div>`,
  data() {
    return {
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
      reviews: [],
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
    shipping() {
      return this.premium ? "Free" : 2.99;
    },
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
});
