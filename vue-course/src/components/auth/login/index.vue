<template>
  <AuthContainer>
    <MainTitle>Log in</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit">
      <CustomInput v-model="formData.email" name="email" :rules="emailRules" />
      <CustomInput
        v-model="formData.password"
        name="password"
        type="password"
        :rules="passwordRules"
      />
      <Button type="submit">Enter</Button>
    </Form>
  </AuthContainer>
</template>

<script>
import AuthContainer from '../AuthContainer.vue';
import Form from '../../shared/form';
import CustomInput from '../../shared/CustomInput.vue';
import Button from '../../Button.vue';
import MainTitle from '../../shared/MainTitle.vue';

import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../../utils/validationRules';

export default {
  name: 'Login',
  components: { AuthContainer, Form, CustomInput, Button, MainTitle },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();

      if (isFormValid) {
        console.log(this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
