<script setup lang="ts">
import { ref, onMounted } from "vue";
import ControlBar from "./ControlBar.vue";
import fetchCount from "../services/fetchCount";

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

// Exampled of typed function as inline callback
onMounted(() => {
  fetchCount(initialCount => {
    count.value = initialCount;
  });
});

function addCount(number: number) {
  if (count.value !== null) {
    if (count.value >= props.limit) {
      alert(props.messageOnLimit);
    } else {
      count.value += number;
    }
  }
}

function resetCount() {
  count.value = 0;
}
</script>

<template>
  <div>
    <p>{{ count }}</p>

    <ControlBar @add-count="addCount" @reset-count="resetCount" />
  </div>
</template>
