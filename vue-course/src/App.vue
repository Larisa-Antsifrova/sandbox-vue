<template>
  <div id="app">
    <Notification />

    <div class="content">
      <Header />

      <router-view></router-view>
    </div>
    <Footer />
    <p>{{ $store.state.userName }}</p>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Notification from './components/notifications';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Notification,
  },
  mounted() {
    console.log('store', this.$store.state.userName);
    setTimeout(() => {
      this.$store.commit('changeName', 'Hello');
    }, 1000);
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
