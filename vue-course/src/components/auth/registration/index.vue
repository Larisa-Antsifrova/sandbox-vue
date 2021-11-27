<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Register</MainTitle>
    <Form class="registration__form" ref="form" @submit.prevent="handleSubmit">
      <CustomInput
        placeholder="Name"
        v-model="formData.name"
        name="name"
        class="registration__input"
      />
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
      <CustomInput
        placeholder="Confirm password"
        v-model="formData.confirmPassword"
        name="confirmPassword"
        type="password"
        :rules="passwordConfirmation"
        class="registration__input"
      />
      <Button type="submit" class="registration__button" :loading="loading"
        >Register</Button
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
  name: 'Registration',
  components: { AuthContainer, Form, CustomInput, Button, MainTitle },
  data() {
    return {
      loading: false,
      formData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  computed: {
    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    passwordConfirmation() {
      return [
        value => ({
          hasPassed: value === this.formData.password,
          message: 'Passwords do not match',
        }),
      ];
    },
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;

        const { form } = this.$refs;
        const isFormValid = form.validate();

        if (isFormValid) {
          this.$store.dispatch('auth/registration', this.formData);

          this.$router.push({ name: 'home' });

          form.reset();
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
