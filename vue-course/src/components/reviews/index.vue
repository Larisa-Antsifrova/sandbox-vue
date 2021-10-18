<template>
  <section class="reviews">
    <ReviewsItem
      v-for="review in reviews"
      :key="review.author"
      :review="review"
    />
  </section>
</template>

<script>
import ReviewsItem from './reviews-item';

export default {
  name: 'Reviews',
  components: { ReviewsItem },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.reviews {
  margin-top: 20px;
  background: $card-bg;
  padding: 0 2px;

  &__heading {
    padding: 20px 20px 10px;
  }

  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
  }
}
</style>
