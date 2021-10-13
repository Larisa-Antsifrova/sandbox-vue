<template>
  <article class="apartment-main-info">
    <h1 class="partment-main-info__title">{{ apartment.title }}</h1>
    <img :src="apartment.imgUrl" alt="" class="partment-main-info__photo" />
    <p class="partment-main-info__description">{{ apartment.descr }}</p>
  </article>
</template>

<script>
export default {
  name: 'ApartmentMainInfo',
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
