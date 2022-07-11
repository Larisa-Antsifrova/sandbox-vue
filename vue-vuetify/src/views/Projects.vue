<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects page</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>

          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { collection, onSnapshot } from "firebase/firestore";
import db from "@/fb";

export default {
  name: "Projects",
  components: {},
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    await onSnapshot(collection(db, "projects"), res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === "Athour");
    },
  },
};
</script>
