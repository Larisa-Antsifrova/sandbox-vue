<template>
  <div class="apartment-item">
    <router-link :to="{ name: 'apartment' }" class="apartment-item__link">
      <div class="apartment-item__inner">
        <img :src="imgSrc" alt="" class="apartment-item__photo" />
        <div class="apartment-item__content">
          <p class="apartment-item__description">
            {{ description }}
          </p>
          <div class="apartment-item__rating">
            <StarRating :rating="rating" />
          </div>
          <div class="apartment-item__price">UAH {{ price }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import StarRating from '../StarRating.vue';

export default {
  name: 'ApartmentItem',
  components: {
    StarRating,
  },
  props: {
    description: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-item {
  position: relative;
  width: calc(100% / 3);
  padding: 0 15px;
  margin-bottom: 30px;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__link {
    text-decoration: none;
    color: #ffffff;
    font: inherit;
  }
}
</style>
