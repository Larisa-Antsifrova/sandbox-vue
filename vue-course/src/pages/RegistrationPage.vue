<template>
  <main class="registration">
    <AuthSection>
      <RegistrationForm />
    </AuthSection>
  </main>
</template>

<script>
import RegistrationForm from '../components/auth/registration';
import AuthSection from '../components/auth/AuthSection.vue';

export default {
  name: 'RegistrationPage',
  components: {
    RegistrationForm,
    AuthSection,
  },
};
</script>

<style lang="scss" scoped></style>
