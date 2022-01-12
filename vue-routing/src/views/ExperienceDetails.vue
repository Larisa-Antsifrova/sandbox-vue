<template>
  <section>
    <h1>Experiences</h1>
    <h2>{{ experience.name }}</h2>

    <div class="experience-details">
      <img
        :src="`require(@/assets/${experience.image})`"
        :alt="experience.name"
      />

      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
