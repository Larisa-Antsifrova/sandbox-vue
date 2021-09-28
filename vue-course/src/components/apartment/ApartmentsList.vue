<template>
  <Container>
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
  </Container>
</template>

<script>
import Container from '../shared/Container.vue';
import ApartmentItem from './ApartmentItem.vue';

export default {
  name: 'ApartmentsList',
  components: { ApartmentItem, Container },
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
