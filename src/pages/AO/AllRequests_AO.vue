<template>
  <q-page class="flex">
    <div v-if="!isLoading" class="container">
      <RequestTable :data="data" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import RequestTable from "src/components/Table/RequestTable.vue";
import authStore from "src/stores/auth-store";
import { storeToRefs } from "pinia";

const authStoreInstance = authStore();

const { getRows } = storeToRefs(authStoreInstance);

export default defineComponent({
  name: "AllRequests",
  data() {
    return {
      data: [],
      isLoading: true,
    };
  },
  async mounted() {
    await authStoreInstance.setRows();
    this.data = getRows;
    this.isLoading = false;
  },
  components: {
    RequestTable,
  },
});
</script>
