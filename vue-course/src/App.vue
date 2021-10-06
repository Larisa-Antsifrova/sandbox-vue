<template>
  <div :id="$style.app">
    <ApartmentFilterForm @submit="filter" />
    <p v-if="!filteredApartments.length">Nothing found...</p>
    <ApartmentsList v-else :items="filteredApartments">
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
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) {
        return apartments;
      }

      return apartments.filter(
        apartment => apartment.location.city === this.filters.city,
      );
    },
    filterByPrice(apartments) {
      if (!this.filters.price) {
        return apartments;
      }

      return apartments.filter(
        apartment => apartment.price >= this.filters.price,
      );
    },
  },
  data() {
    return {
      text: '',
      apartments,
      filters: {
        city: '',
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByPrice(this.filterByCityName(this.apartments));
    },
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
