<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Log in</MainTitle>
    <Form class="login__form" ref="form" @submit.prevent="handleSubmit">
      <CustomInput
        placeholder="Email"
        v-model="formData.email"
        name="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        placeholder="Password"
        v-model="formData.password"
        name="password"
        type="password"
        :rules="passwordRules"
        class="login__input"
      />
      <Button type="submit" class="login__button" :loading="loading"
        >Log in</Button
      >
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
      loading: false,
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
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;

        const isFormValid = this.$refs.form.validate();

        if (isFormValid) {
          this.$store.dispatch('login', this.formData);

          this.$router.push({ name: 'home' });
        }
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Oops!',
          text: error.message,
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
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
