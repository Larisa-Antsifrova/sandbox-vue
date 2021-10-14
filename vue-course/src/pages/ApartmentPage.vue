<template>
  <main class="apartment-page">
    <Container>
      <ApartmentMainInfo :apartment="apartment" />
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import ApartmentMainInfo from '../components/apartment/ApartmentMainInfo.vue';

import apartments from '../components/apartment/apartments';

export default {
  name: 'ApartmentPage',
  components: { Container, ApartmentMainInfo },
  computed: {
    apartment() {
      return apartments.find(
        apartment => apartment.id === this.$route.params.id,
      );
    },
  },
  mounted() {
    console.log('apartment', this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
