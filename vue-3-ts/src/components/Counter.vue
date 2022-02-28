<script setup lang="ts">
import { ref } from "vue";

interface Props {
  limit: number;
  messageOnLimit?: string;
}

// defineProps - compile micro
// 1. Executes in compile-time
// 2. No need to be imported
// withDefaults - to provide some props default values
const props = withDefaults(defineProps<Props>(), {
  messageOnLimit: "Yep, that is the limit!",
});

const count = ref(0);

function addCount(number: number) {
  if (count.value !== null) {
    if (count.value >= props.limit) {
      alert(props.messageOnLimit);
    } else {
      count.value += number;
    }
  }
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <div>
      <button class="btn" @click="addCount(1)">Add</button>
    </div>
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
