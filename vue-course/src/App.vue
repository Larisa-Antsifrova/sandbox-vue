<template>
  <div id="app">
    <div class="content">
      <Header />

      <Container>
        <ApartmentFilterForm @submit="filter" />
      </Container>

      <Container>
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
      </Container>
    </div>

    <Footer />
  </div>
</template>

<script>
import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import ApartmentItem from './components/apartment/ApartmentItem.vue';
import Container from './components/shared/Container.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

import apartments from './components/apartment/apartments';

export default {
  name: 'App',
  components: {
    ApartmentFilterForm,
    ApartmentsList,
    ApartmentItem,
    Container,
    Footer,
    Header,
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

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
