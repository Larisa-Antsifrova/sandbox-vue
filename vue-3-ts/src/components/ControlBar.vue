<script setup lang="ts">
// defineEmits - compile micro
const emit = defineEmits<{
  (event: "add-count", num: number): void;
  (event: "reset-count"): void;
}>();
</script>

<template>
  <div>
    <button class="btn" @click="emit('add-count', 1)">Add</button>
    <button class="btn" @click="emit('reset-count')">Reset</button>
  </div>
</template>

<style scoped>
.btn {
  min-width: 80px;
  padding: 8px 12px;
  background-color: tomato;
  border: 1px solid transparent;
  border-radius: 8px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;

  transition: all 250ms ease-out;
}

.btn:hover {
  color: tomato;
  border: 1px solid tomato;
  background-color: #fff;

  transition: all 250ms ease-in;
}
</style>
