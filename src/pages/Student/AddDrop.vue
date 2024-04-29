<template>
  <q-page class="q-pa-md request-form-page container">
    <h1>Add Drop</h1>

    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        flat
        bordered
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddDrop",
});
</script>
