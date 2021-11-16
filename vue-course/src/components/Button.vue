<template>
  <button
    v-on="$listeners"
    v-bind:type="type"
    :disabled="loading"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <CircleLoader v-if="loading" :width="35" :height="35" class="btn__loader" />
    <span class="btn__content" :class="contentStyles">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import CircleLoader from './loaders/Circle.vue';

export default {
  name: 'Button',
  components: { CircleLoader },
  props: {
    type: { type: String, default: 'button' },
    outlined: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
  computed: {
    contentStyles() {
      return {
        'btn__content--hidden': this.loading,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  min-width: 220px;
  width: 100%;
  padding: 8px 15px;

  font-size: 18px;

  color: #ffffff;
  background-color: #ff6620;
  border: 1px solid transparent;

  cursor: pointer;

  &--outlined {
    color: #ff6620;
    background-color: #ffffff;
    border: 1px solid #ff6620;
  }

  &__content--hidden {
    opacity: 0;
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
