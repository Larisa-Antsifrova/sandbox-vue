<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'Form',
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      inputs: [],
    };
  },
  methods: {
    registerInput(input) {
      this.inputs.push(input);
    },
    unregisterInput(input) {
      this.inputs.filter(item => item !== input);
    },
  },
};
</script>

<style lang="scss" scoped></style>
