<template>
  <div class="orders-list">
    <p v-if="!items.length">No orders</p>
    <template v-else>
      <OrdersItem
        v-for="item in items"
        :order="item.apartment"
        :key="item.id"
      />
    </template>
  </div>
</template>

<script>
import OrdersItem from './OrdersItem.vue';

export default {
  name: 'OrdersList',
  components: {
    OrdersItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
