<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link to="/">
          <Logo />
        </router-link>

        <AuthActions />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from '../shared/Container.vue';
import Logo from '../Logo.vue';
import AuthActions from './AuthActions.vue';

export default {
  name: 'Header',
  components: { Container, Logo, AuthActions },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  z-index: 2;

  background: $secondary-color;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
