<template>
  <button v-on="$listeners" v-bind:type="type" class="btn btn--outlined">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: { type: String, default: 'button' },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  min-width: 220px;
  padding: 8px 15px;

  font-size: 18px;

  color: #ffffff;
  background-color: #ff6620;
  border: 1px solid transparent;

  cursor: pointer;

  &--outlined {
    color: #ff6620;
    background-color: #ffffff;
    border: 1px solid #ff6620;
  }
}
</style>
