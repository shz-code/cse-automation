<template>
  <q-page class="q-pa-md request-form-page container">
    <q-card>
      <q-card-section>
        <div class="text-h2 text-center text-weight-bold">Submit a Request</div>
      </q-card-section>
      <!-- Request submit form -->
      <q-card-section>
        <q-form @submit="submitForm">
          <!-- Select box for selecting a type of request -->
          <q-select
            filled
            dense
            v-model="selectedType"
            :options="typeOptions"
            label="Select Type"
            class="q-my-md"
          />
          <!-- Request Description -->
          <q-input
            filled
            dense
            v-model="description"
            label="Description"
            type="textarea"
            class="q-my-md"
          />
          <!-- Request attachment -->
          <q-file
            dense
            filled
            bottom-slots
            v-model="file"
            label="Label"
            counter
            class="q-my-md"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
            <!-- Cancel icon -->
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="file = null"
                class="cursor-pointer"
              />
            </template>
            <!-- File Hint -->
            <template v-slot:hint>
              Only upload one attachment. (PNG/JPEF/PDF)
            </template>
          </q-file>
          <!-- Submit Button -->
          <q-btn type="submit" label="Submit" :loading="false" />
        </q-form>
      </q-card-section>
    </q-card>

    <div class="q-mt-lg">
      <p>Your request will be addressed by the AO</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "NewRequest_STU",
  data() {
    return {
      selectedType: null,
      typeOptions: [
        { label: "Course Add", value: "courseAdd" },
        { label: "Course Drop", value: "courseDrop" },
        { label: "Others", value: "others" },
      ],
      description: "",
      file: ref(null),
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      this.showNotification("negative", "done");
      console.log(this.selectedType, this.description, this.file);
    },
  },
  setup() {
    const $q = useQuasar();
    return {
      showNotification(type, msg) {
        $q.notify({
          message: msg,
          color: type,
          position: "top",
          icon: type == "positive" ? "fa-solid fa-check" : "fa-solid fa-xmark",
        });
      },
    };
  },
});
</script>
