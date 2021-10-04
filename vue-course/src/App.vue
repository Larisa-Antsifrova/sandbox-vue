<template>
  <div :id="$style.app">
    <ApartmentFilterForm />

    <h2>{{ text }}</h2>

    <CustomInput v-model="text" />
    <CustomSelect :items="['name', 'label', 'price']" />

    <ApartmentsList :items="apartments">
      <template v-slot:title>
        Appartments
      </template>

      <template v-slot:apartment="{ apartment }">
        <ApartmentItem
          :key="apartment.id"
          :description="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          @click.native="handleItemClick"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import ApartmentItem from './components/apartment/ApartmentItem.vue';
import CustomInput from './components/shared/CustomInput.vue';
import CustomSelect from './components/shared/CustomSelect.vue';
import apartments from './components/apartment/apartments';

export default {
  name: 'App',
  components: {
    ApartmentFilterForm,
    ApartmentsList,
    ApartmentItem,
    CustomInput,
    CustomSelect,
  },
  methods: {
    handleItemClick() {
      console.log('Item has been clicked on.');
    },
  },
  data() {
    return {
      text: '',
      apartments,
    };
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
