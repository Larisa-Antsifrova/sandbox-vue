<template>
  <div v-if="isVisible">
    <h1 v-show="isVisible">Title: Directives</h1>
  </div>
</template>

<script>
export default {
  name: 'Directives',
  data() {
    return {
      isVisible: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
