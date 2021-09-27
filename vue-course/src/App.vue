<template>
  <div :id="$style.app">
    <ApartmentItem
      :description="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      :imgSrc="
        'https://i.pinimg.com/originals/d3/26/02/d32602bc80600de34e3ff98853d93934.jpg'
      "
    />
  </div>
</template>

<script>
import ApartmentItem from './components/apartment/ApartmentItem.vue';

export default {
  name: 'App',
  components: { ApartmentItem },
  data() {
    return {
      apartment: {
        id: '1234567890',
        title: 'Awesome Apartment',
        descr: 'The best apartment with breakfast and unlimited tea.',
        price: 1200,
        rating: 4.7,
        location: {
          city: 'Kyiv',
        },
        owner: {
          name: 'Ellen',
          phone: '063-33-33-330',
          email: 'ellen@mail.com',
        },
      },
    };
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
