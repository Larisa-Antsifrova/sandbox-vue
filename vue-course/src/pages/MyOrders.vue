<template>
  <main class="my-orders-page">
    <SectionWithHeaderSpacer>
      <Container>
        <section class="my-orders-page__content">
          <h2>Orders</h2>
        </section>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';
import Container from '../components/shared/Container.vue';
export default {
  name: 'MyOrdersPage',
  components: {
    SectionWithHeaderSpacer,
    Container,
  },
};
</script>

<style lang="scss" scoped></style>
