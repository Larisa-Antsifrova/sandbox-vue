<template>
  <main class="home-page">
    <SectionWithHeaderSpacer>
      <Container>
        <ApartmentFilterForm @submit="filter" class="filter-form" />

        <p v-if="!filteredApartments.length">Nothing found...</p>

        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentItem
              :key="apartment.id"
              :id="apartment.id"
              :description="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import ApartmentFilterForm from '../components/apartment/ApartmentFilterForm.vue';
import ApartmentsList from '../components/apartment/ApartmentsList.vue';
import ApartmentItem from '../components/apartment/ApartmentItem.vue';
import Container from '../components/shared/Container.vue';
import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';

import { getApartmentsList } from '../services/apartments-service';

export default {
  name: 'HomePage',
  components: {
    ApartmentFilterForm,
    ApartmentsList,
    ApartmentItem,
    Container,
    SectionWithHeaderSpacer,
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
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
      apartments: [],
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
.filter-form {
  margin-bottom: 60px;
}
</style>
