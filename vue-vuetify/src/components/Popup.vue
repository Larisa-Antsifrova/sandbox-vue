<template>
  <v-dialog max-width="600px" v-model="isDialogVisible">
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
        <v-form class="px-3" ref="form">
          <v-text-field
            :rules="inputRules"
            prepend-icon="mdi-folder"
            label="Title"
            v-model="title"
          >
          </v-text-field>

          <v-textarea
            :rules="inputRules"
            prepend-icon="mdi-edit"
            v-model="description"
          >
            <template v-slot:label>
              <div>Project description</div>
            </template>
          </v-textarea>

          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :rules="inputRules"
                v-bind="attrs"
                v-on="on"
                prepend-icon="mdi-date-range"
                label="Due date"
                :value="formattedDate"
              >
              </v-text-field>
            </template>

            <v-date-picker v-model="due"> </v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn
            :loading="isLoading"
            class="success mx-0 mt-3"
            depressed
            @click="submit"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { format, parseISO } from "date-fns";
import db from "@/fb";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      title: "",
      description: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters."],
      isLoading: false,
      isDialogVisible: false,
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;
        const project = {
          title: this.title,
          description: this.description,
          due: format(parseISO(this.due), "EEEE, MMMM do yyyy"),
          person: "Athour",
          status: "ongoing",
        };

        await addDoc(collection(db, "projects"), project);

        this.isLoading = false;
        this.isDialogVisible = false;
        this.$emit("projectAdded");
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "EEEE, MMMM do yyyy") : "";
    },
  },
};
</script>
