<template>
  <main class="my-orders-page">
    <SectionWithHeaderSpacer>
      <Container>
        <section class="my-orders-page__content">
          <MainTitle>Orders</MainTitle>
        </section>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';
import Container from '../components/shared/Container.vue';
import MainTitle from '../components/shared/MainTitle.vue';

export default {
  name: 'MyOrdersPage',
  components: {
    SectionWithHeaderSpacer,
    Container,
    MainTitle,
  },
};
</script>

<style lang="scss" scoped></style>
