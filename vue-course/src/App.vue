<template>
  <div id="app">
    <Notification />

    <div class="content">
      <Header />

      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/header/Header.vue';
import Notification from './components/notifications';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Notification,
  },
  mounted() {
    console.log(this.isLoggedIn);
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
