<template>
  <main class="apartment-page">
    <SectionWithHeaderSpacer>
      <Container>
        <div v-if="apartment" class="apartment-page__content">
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
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import ApartmentMainInfo from '../components/apartment/ApartmentMainInfo.vue';
import ApartmentOwner from '../components/apartment/ApartmentOwner.vue';
import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';
import ApartmentReviews from '../components/reviews';
import { getApartmentById } from '../services/apartments-service';

import reviewsList from '../components/reviews/reviews.json';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentMainInfo,
    ApartmentOwner,
    ApartmentReviews,
    SectionWithHeaderSpacer,
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      apartment: null,
    };
  },
  // Examples of life cycle hooks
  // beforeCreate() {
  //   console.log('in beforeCreate', this.reviewsList);
  // },
  // created() {
  //   console.log('in created', this.reviewsList);
  // },
  // beforeMount() {
  //   console.log('in beforeMount', this.$el);
  // },
  // mounted() {
  //   console.log('in mounted', this.$el);
  // },
  // beforeDestroy() {
  //   console.log('in beforeDestroy', this.$el);
  // },
  // destroyed() {
  //   console.log('in destroyed', this.$el);
  // },
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
