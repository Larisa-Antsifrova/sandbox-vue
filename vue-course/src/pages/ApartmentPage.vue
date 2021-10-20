<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentMainInfo
          :apartment="apartment"
          class="apartment-page__main-info"
        />
        <div class="apartment-page__additional-info">
          <ApartmentOwner
            :owner="apartment.owner"
            class="apartment-page__owner"
          />
          <ApartmentReviews
            :reviews="reviewsList"
            class="apartment-page__review"
          />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import ApartmentMainInfo from '../components/apartment/ApartmentMainInfo.vue';
import ApartmentOwner from '../components/apartment/ApartmentOwner.vue';
import ApartmentReviews from '../components/reviews';

import apartments from '../components/apartment/apartments';
import reviewsList from '../components/reviews/reviews.json';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentMainInfo,
    ApartmentOwner,
    ApartmentReviews,
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
    apartment() {
      return apartments.find(
        apartment => apartment.id === this.$route.params.id,
      );
    },
  },
  beforeCreate() {
    console.log('in beforeCreate', this.reviewsList);
  },
  created() {
    console.log('in created', this.reviewsList);
  },
  beforeMount() {
    console.log('in beforeMount', this.$el);
  },
  mounted() {
    console.log('in mounted', this.$el);
  },
  beforeDestroy() {
    console.log('in beforeDestroy', this.$el);
  },
  destroyed() {
    console.log('in destroyed', this.$el);
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

  &__main-info {
    width: 70%;
  }

  &__additional-info {
    margin-left: 30px;
    min-width: 30%;
    flex-grow: 0;
    flex-shrink: 1;
  }

  &__owner,
  &__review {
    max-width: 350px;
    margin-left: 30px;
  }
}
</style>
