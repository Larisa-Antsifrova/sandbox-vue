<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect class="form__select" :items="cities" v-model="city" />
    <CustomInput
      v-model="price"
      placeholder="Price, from"
      error-message="Should not be empty"
      type="number"
      :rules="rules"
    />
    <Button class="form__submit" type="submit">Search Apartment</Button>
  </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import Button from '../Button.vue';
import { isRequired, charLimit } from '../../utils/validationRules';

export default {
  components: {
    CustomSelect,
    CustomInput,
    Button,
  },
  computed: {
    cities() {
      return [
        { value: '', label: 'City', selected: true },
        'Kyiv',
        'Vyshgorod',
        'Odessa',
        'Lviv',
      ];
    },
    rules() {
      return [isRequired, charLimit(10)];
    },
  },
  data() {
    return {
      price: '',
      city: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
