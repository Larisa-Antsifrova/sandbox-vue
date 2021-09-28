<template>
  <div class="apartments-list">
    <ApartmentItem
      v-for="{ id, descr, rating, imgUrl, price } in items"
      :key="id"
      :description="descr"
      :rating="rating"
      :imgSrc="imgUrl"
      :price="price"
    />
  </div>
</template>

<script>
import ApartmentItem from './ApartmentItem.vue';

export default {
  name: 'ApartmentsList',
  components: { ApartmentItem },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
