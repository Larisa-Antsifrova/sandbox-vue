<template>
  <form>
    <CustomSelect :items="['Kyiv', 'Vyshgorod', 'Odessa', 'Lviv']" />
    <CustomInput />
    <Button>Search Apartment</Button>
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
};
</script>

<style lang="scss" scoped></style>
