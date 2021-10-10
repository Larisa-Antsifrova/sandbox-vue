<template>
  <Container>
    <h1>Apartment Details Page</h1>

    <p>Work in progress...</p>
  </Container>
</template>

<script>
import Container from '../components/shared/Container.vue';

export default {
  name: 'ApartmentPage',
  components: { Container },
  mounted() {
    console.log('id', this.$route.params.id);
    console.log('name', this.$route.query.name);
  },
};
</script>

<style lang="scss" scoped></style>
