<template>
  <div v-if="isVisible">
    <h2 v-show="isVisible">Directives: v-for with arrays</h2>

    <ul>
      <template v-for="tech in techs">
        <li :key="tech" v-if="tech !== 'Docker'">{{ tech }}</li>
      </template>
    </ul>

    <h2 v-show="isVisible">Directives: v-for with objects</h2>

    <ul>
      <li v-for="(db, key) in dbs" :key="key">{{ `${key}: ${db.type}` }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Directives',
  data() {
    return {
      isVisible: true,
      techs: ['Docker', 'Kubernetes', 'Istio', 'RabbitMQ', 'Nomad', 'Nginx'],
      dbs: {
        mongoDB: { type: 'non-relational' },
        mySQL: { type: 'relational' },
        redis: { type: 'non-relational' },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
