<script setup lang="ts">
import { ref, reactive } from "vue";

interface AppInfo {
  name: string;
  moto: string;
}

const count = ref(0);

const appInfo: AppInfo = reactive({
  name: "Counter",
  moto: "An app you can count on!",
});
</script>

<template>
  <h1>{{ appInfo.name }}</h1>
  <h1>{{ appInfo.moto }}</h1>

  <p>{{ count }}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
