<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="partment-main-info__photo" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>

    <div class="apartment-main-info__btn">
      <Button @click="bookApartment" :loading="isLoading">Book</Button>
    </div>
  </article>
</template>

<script>
import Rating from '../StarRating.vue';
import Button from '../Button.vue';
import { bookApartment } from '../../services/order-service';

export default {
  name: 'ApartmentMainInfo',
  components: { Rating, Button },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async bookApartment() {
      const body = {
        date: Date.now(),
        apartmentId: this.$route.params.id,
      };

      try {
        this.isLoading = true;
        await bookApartment(body);

        this.$notify({
          type: 'success',
          title: 'Booking successful!',
        });
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Oops! Something went wrong.',
          text: error.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  &__photo {
    max-width: 100%;
  }
  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }
  &__btn {
    max-width: 150px;
    margin-top: 20px;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
