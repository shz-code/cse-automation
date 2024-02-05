<template>
  <router-link :to="menu.url" class="text-black flex">
    <q-item clickable v-ripple class="full-width">
      <q-item-section>
        <q-item-label class="flex items-center">
          <q-item-section avatar>
            <q-icon color="primary" :name="menu.icon" />
          </q-item-section>
          {{ menu.name }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </router-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
});
</script>
