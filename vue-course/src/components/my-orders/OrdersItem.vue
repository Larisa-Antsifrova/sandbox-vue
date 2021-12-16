<template>
  <div class="orders-item">
    <img class="orders-item__photo" :src="order.imgUrl" alt="Apartment photo" />
    <div class="orders-item__details">
      <div class="orders-item__text">
        <h2 class="orders-item__title">{{ order.title }}</h2>
        <p class="orders-item__location">{{ order.location.city }}</p>
        <p class="orders-item__cost">
          <span class="orders-item__price">UAH {{ order.price }}</span> per
          night
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrdersItem',
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
