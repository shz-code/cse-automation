<template>
  <td class="table-cell">{{ row.serial }}</td>
  <td class="table-cell">{{ row.studentId }}</td>
  <td class="table-cell">{{ row.name }}</td>
  <td class="table-cell">{{ row.type }}</td>
  <td class="table-cell table-actions">
    <q-btn dense color="primary" class="table-view" @click="detailsPopUp"
      >View Details</q-btn
    >
  </td>
  <td class="table-cell"><i :class="statusIcon"></i> {{ row.status }}</td>

  <DetailsPopup
    v-if="showPopup"
    :hidePopup="hidePopup"
    :data="row"
    :permission="permission"
  />
</template>

<script>
import { defineComponent } from "vue";
import DetailsPopup from "./DetailsPopup.vue";

export default defineComponent({
  name: "TdData",
  data() {
    return {
      showPopup: false,
    };
  },
  computed: {
    statusIcon() {
      let str = "fa-solid fa-stop";
      if (this.row.status === "Pending") return (str += " danger");
      if (this.row.status === "Processing") return (str += " warning");
      return (str += " success");
    },
  },
  methods: {
    detailsPopUp() {
      this.showPopup = true;
    },
    hidePopup() {
      this.showPopup = false;
    },
  },
  props: {
    row: {
      type: Object,
      required: true,
    },
    permission: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    DetailsPopup,
  },
});
</script>
