<template>
  <div id="app">
    <notifications />
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
  mounted() {
    this.$notify({
      title: 'Important message',
      text: 'Hello user! This is a notification!',
    });
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
