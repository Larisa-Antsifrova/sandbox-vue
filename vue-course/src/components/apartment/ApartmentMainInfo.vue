<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="partment-main-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="partment-main-info__photo" />
    <p class="partment-main-info__description">{{ apartment.descr }}</p>
  </article>
</template>

<script>
import Rating from '../StarRating.vue';

export default {
  name: 'ApartmentMainInfo',
  components: { Rating },
  props: {
    apartment: {
      type: Object,
      required: true,
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
    margin-top: 20px;
    text-align: center;
  }
}
</style>
