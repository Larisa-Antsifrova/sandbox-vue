<template>
  <div class="star-rating">
    <span
      v-for="index in starLimit"
      :key="index"
      class="star star--outlined"
    ></span>
    <div class="star-rating__fullfilled" :style="ratingWithStyle">
      <span
        v-for="index in starLimit"
        :key="index"
        class="star star--colored"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ratingWidth() {
      return (this.rating / this.starLimit) * 100;
    },
    ratingWithStyle() {
      return `width: ${this.ratingWidth}%;`;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;
  display: inline-flex;

  &__fullfilled {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}

.star {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 3px;
  flex-shrink: 0;

  &--colored {
    background: url('/img/star-filled.svg') center no-repeat;
    background-size: contain;
  }

  &--outlined {
    background: url('/img/star-outlined.svg') center no-repeat;
    background-size: contain;
  }
}
</style>
