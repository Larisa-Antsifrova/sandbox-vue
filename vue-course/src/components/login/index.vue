<template>
  <Form @submit="handleSubmit">
    <CustomInput v-model="formData.email" name="email" />
    <CustomInput v-model="formData.password" name="password" />
  </Form>
</template>

<script>
import Form from '../shared/form';
import CustomInput from '../shared/CustomInput.vue';

export default {
  name: 'Login',
  components: { Form, CustomInput },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
