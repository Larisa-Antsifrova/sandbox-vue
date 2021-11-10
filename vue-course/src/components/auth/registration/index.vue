<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Register</MainTitle>
    <Form class="registration__form" ref="form" @submit.prevent="handleSubmit">
      <CustomInput
        placeholder="Email"
        v-model="formData.email"
        name="email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        placeholder="Password"
        v-model="formData.password"
        name="password"
        type="password"
        :rules="passwordRules"
        class="registration__input"
      />
      <Button type="submit" class="registration__button">Register</Button>
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
import { loginUser } from '../../../services/auth-service';

export default {
  name: 'Registration',
  components: { AuthContainer, Form, CustomInput, Button, MainTitle },
  data() {
    return {
      formData: {
        name: '',
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
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      try {
        const isFormValid = this.$refs.form.validate();

        if (isFormValid) {
          const { data } = await loginUser(this.formData);
          console.log(data);
        }
      } catch (error) {
        console.log('Error in handleSubmit', error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  &__form {
    display: block;
    flex-direction: column;
  }
  &__title {
    text-align: center;
  }
  &__input {
    margin-bottom: 20px;
    width: 100%;
  }
  &__button {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
