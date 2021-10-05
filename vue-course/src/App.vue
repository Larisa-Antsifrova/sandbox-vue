<template>
  <div :id="$style.app">
    <ApartmentFilterForm @submit="logger" />

    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentItem
          :key="apartment.id"
          :description="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          @click.native="handleItemClick"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import ApartmentItem from './components/apartment/ApartmentItem.vue';
import apartments from './components/apartment/apartments';

export default {
  name: 'App',
  components: {
    ApartmentFilterForm,
    ApartmentsList,
    ApartmentItem,
  },
  methods: {
    handleItemClick() {
      console.log('Item has been clicked on.');
    },
    logger(value) {
      console.log('Logger: ', value);
    },
  },
  data() {
    return {
      text: '',
      apartments,
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
