<template>
  <div class="team">
    <h1 class="subheading grey--text">Team page</h1>

    <v-container class="my-5">
      <v-row>
        <v-col
          v-for="person in team"
          :key="person.name"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4"> image </v-responsive>

            <v-card-text>
              <div class="subtitle-1">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn depressed>
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  components: {},
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "Web developer" },
        { name: "Ryu", role: "Graphic designer" },
        { name: "Chun Li", role: "Web developer" },
        { name: "Gouken", role: "Social media maverick" },
        { name: "Yoshi", role: "Sales guru" },
      ],
    };
  },
};
</script>
