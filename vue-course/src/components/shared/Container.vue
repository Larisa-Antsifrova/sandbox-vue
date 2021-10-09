<template>
  <div class="container">
    <slot>Default Value</slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  max-width: 1110px;
  margin: 0 auto;
}
</style>
