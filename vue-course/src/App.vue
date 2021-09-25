<template>
  <div :id="$style.app">
    <h2>{{ title }}</h2>
    <Directives />
    <Button
      @click="
        () => {
          increment(5);
        }
      "
      outlined
      >Brand New Button</Button
    >
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Directives from './components/Directives.vue';

export default {
  name: 'App',
  components: { Button, Directives },
  data() {
    return {
      amountOfClicks: 0,
    };
  },
  computed: {
    title() {
      return `Amount of clicks: ${this.amountOfClicks}`;
    },
  },
  methods: {
    increment(num) {
      this.amountOfClicks += num;
    },
  },
};
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  background-color: #eeeeee;
}
</style>
