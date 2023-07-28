<template>
  <q-dialog v-model="showModal" persistent>
    <q-card class="details-modal">
      <q-card-section>
        <div class="q-mb-md">
          <h6 class="q-my-md">Request Description</h6>
          <p class="bg-blue-grey-1 q-pa-sm rounded-borders">
            {{ data.description }}
          </p>
        </div>
        <!-- Attachment link with conditional checking -->
        <a
          href="#"
          v-if="data.attachmentUrl"
          target="_blank"
          class="bg-blue-grey-1 q-pa-sm rounded-borders text-weight-bold"
          >See Attachment
          <i class="fa-solid fa-link"></i>
        </a>
        <!-- Remarks -->
        <q-input
          v-if="permission"
          v-model="remarks"
          label="Write remarks"
          class="q-mt-sm"
          dense
          filled
          type="textarea"
        />
        <div v-else>
          <h6 class="q-my-md">Remarks</h6>
          <p class="bg-blue-grey-1 q-pa-sm rounded-borders">
            {{ data.remarks }}
          </p>
        </div>
        <!-- Status  -->
        <div class="row justify-between items-center status q-my-sm">
          <div class="q-mt-sm col-sm-4 col-xs-12">
            Current Status:
            <i :class="statusIcon"></i>
            <span class="text-weight-bold">{{ " " }} {{ data.status }}</span>
          </div>
          <q-select
            dense
            v-model="status"
            v-if="permission"
            :options="statusOptions"
            label="Update status"
            class="col-sm-8 col-xs-12"
          />
        </div>
        <div class="q-mt-sm">
          <p>
            Request Date:
            <span class="text-weight-bold">{{ data.requestDate }}</span>
          </p>
          <p>
            Last Updated Date:
            <span class="text-weight-bold">{{ data.stateUpdateDate }}</span>
          </p>
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn v-if="permission" color="primary" @click="save">Save</q-btn>
        <q-btn color="secondary" @click="cancel">Cancel</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailsPopup",
  data() {
    return {
      showModal: true,
      status: "",
      remarks: "",
      statusOptions: ["Pending", "Processing", "Finished"],
    };
  },
  methods: {
    showAttachment() {
      // handle showing attachment
    },
    save() {
      // handle saving data
      this.showModal = false;
      this.hidePopup();
    },
    cancel() {
      // handle cancelling
      this.showModal = false;
      this.hidePopup();
    },
  },
  mounted() {
    this.remarks = this.data.remarks;
  },
  computed: {
    statusIcon() {
      let str = "fa-solid fa-stop";
      if (this.data.status === "Pending") return (str += " danger");
      if (this.data.status === "Processing") return (str += " warning");
      return (str += " success");
    },
  },
  props: {
    hidePopup: {
      type: Function,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    permission: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.details-modal {
  max-width: 750px;
  width: 100%;
}
a {
  color: black;
}
</style>
