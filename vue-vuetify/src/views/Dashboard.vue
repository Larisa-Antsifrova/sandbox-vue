<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard page</h1>

    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn outlined block class="primary">One</v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-btn outlined block class="primary">Two</v-btn>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col cols="4" md="3">
          <v-btn outlined block class="success">One</v-btn>
        </v-col>
        <v-col cols="4" md="3">
          <v-btn outlined block class="success">One</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
};
</script>

<!-- <v-btn class="d-none d-sm-flex">visible #1</v-btn>
    <v-btn class="d-flex d-sm-none">visible #2</v-btn>
    <v-btn class="d-none d-sm-flex d-md-none">visible #3</v-btn>

    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed dark color="pink">click me</v-btn>
    <v-btn text color="pink">click me</v-btn>

    <v-btn class="pink white--text" depressed>
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn class="pink white--text" small depressed>
      <v-icon small left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn class="pink white--text" large depressed>
      <span>email me</span>
      <v-icon large right>mdi-email</v-icon>
    </v-btn>

    <v-btn fab color="indigo" small dark depressed>
      <v-icon>mdi-heart</v-icon>
    </v-btn> -->
