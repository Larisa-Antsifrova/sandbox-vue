<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" dark depressed v-bind="attrs" v-on="on">
        Add new project
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3">
          <v-text-field prepend-icon="mdi-folder" label="Title" v-model="title">
          </v-text-field>

          <v-textarea prepend-icon="mdi-edit" v-model="description">
            <template v-slot:label>
              <div>Project description</div>
            </template>
          </v-textarea>

          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-bind="attrs"
                v-on="on"
                prepend-icon="mdi-date-range"
                label="Due date"
                v-model="title"
              >
              </v-text-field>
            </template>
          </v-menu>

          <v-btn class="success mx-0 mt-3" depressed @click="submit"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.description);
    },
  },
};
</script>
