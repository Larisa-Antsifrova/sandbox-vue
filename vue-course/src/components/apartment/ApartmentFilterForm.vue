<template>
  <form @submit.prevent="handleSubmit">
    <CustomSelect :items="['Kyiv', 'Vyshgorod', 'Odessa', 'Lviv']" />
    <CustomInput />
    <Button type="submit">Search Apartment</Button>
  </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import Button from '../Button.vue';

export default {
  components: {
    CustomSelect,
    CustomInput,
    Button,
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', 'The form is submitted!');
    },
  },
};
</script>

<style lang="scss" scoped></style>
