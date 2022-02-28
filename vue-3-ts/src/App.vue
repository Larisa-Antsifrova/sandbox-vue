<script setup lang="ts">
import { ref, reactive, computed } from "vue";

interface AppInfo {
  name: string;
  moto: string;
}

const count = ref(0);

const appInfo: AppInfo = reactive({
  name: "Counter",
  moto: "An app you can count on!",
});

// Example of infered types based on returned values
const nextCount = computed(() => {
  if (count.value !== null) {
    return count.value + 1;
  }

  return null;
});

// Example of implicit type reference
function addCount(number: number) {
  if (count.value !== null) {
    count.value += number;
  }
}
</script>

<template>
  <h1>{{ appInfo.name }}</h1>
  <h1>{{ appInfo.moto }}</h1>

  <p>{{ count }}</p>
  <div>
    <button @click="addCount(1)">Add</button>
  </div>
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
