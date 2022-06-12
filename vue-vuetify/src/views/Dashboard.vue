<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard page</h1>

    <v-container class="my-5">
      <v-card class="pa-3">
        <v-row>
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>Create a new website</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>The Net Ninja</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>1st of July</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Status</div>
            <div>Ongoing</div>
          </v-col>
        </v-row>
      </v-card>
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

<!-- <v-row>
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
      </v-row> -->
