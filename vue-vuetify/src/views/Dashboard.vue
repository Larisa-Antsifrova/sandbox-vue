<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard page</h1>

    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              slot="activator"
              small
              depressed
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>

          <span>Sort by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              depressed
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>

          <span>Sort by person name</span>
        </v-tooltip>
      </v-row>
      <v-card class="pa-3" v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="float-right">
              <v-chip
                small
                class="white--text caption my-2"
                :color="chipColor(project.status)"
                >{{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(property) {
      this.projects.sort((a, b) => (a[property] < b[property] ? -1 : 1));
    },
    chipColor(projectStatus) {
      switch (projectStatus) {
        case "ongoing":
          return "#ffaa2c";
        case "complete":
          return "#3cd1c2";
        case "overdue":
          return "#f83e70";
        default:
          return "";
      }
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.chip.complete {
  background-color: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>

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
