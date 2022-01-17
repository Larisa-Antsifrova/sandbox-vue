<template>
  <div class="go-back">
    <button @click="goBack" class="go-back__btn">Go back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.go-back {
  text-align: left;
}

.go-back__btn {
  padding: 8px;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
}
</style>
