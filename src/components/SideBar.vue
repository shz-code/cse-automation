<template>
  <q-list class="q-pt-lg">
    <q-item>
      <q-item-section class="text-center">
        <q-item-label> Harish </q-item-label>
        <q-item-label caption lines="1"> Harish@haru.com </q-item-label>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-btn> Profile Settings </q-btn>
      </q-item-section>
    </q-item>
    <!-- Dynamic menu loop start-->
    <!-- Check if menu is loaded -->

    <!-- <div v-if="isLoading" class="q-ml-md q-py-md">
      <q-spinner color="primary" size="2rem" :thickness="5" />
    </div> -->

    <!-- Iterate over the menu -->
    <!-- v-else -->
    <q-list class="menu" v-for="i in list" :key="i.name" separator>
      <!-- Check if menu is nested or not -->
      <div v-if="i.nested" class="dropdown-container">
        <q-btn-dropdown
          :label="i.name"
          flat
          align="left"
          :icon="i.icon"
          color="primary"
          class="dropdown q-py-sm"
        >
          <q-list v-for="x in i.pages" :key="x.name">
            <MenuItem :menu="x" />
          </q-list>
        </q-btn-dropdown>
      </div>
      <MenuItem :menu="i" v-else />
    </q-list>
    <!-- Privacy Btn  -->
    <q-item clickable v-ripple>
      <q-item-section>
        <q-item-label class="flex items-center">
          <q-item-section avatar>
            <q-icon color="primary" name="security" />
          </q-item-section>
          Privacy
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
  <!-- Dynamic menu loop end-->
</template>

<script>
import { defineComponent } from "vue";
import MenuItem from "./MenuItem.vue";
import authStore from "src/stores/auth-store";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "SideBar",
  setup() {
    const authStoreInstance = authStore();
    // let isLoading = true;
    const { getMenu } = storeToRefs(authStoreInstance);
    return {
      list: getMenu,
      // isLoading,
    };
  },
  async mounted() {
    // this.isLoading = false;
    // await authStoreInstance.setMenu();
    // this.list = getMenu;
    // this.isLoading = false;
  },
  components: { MenuItem },
});
</script>

<style scoped lang="scss">
.dropdown {
  width: 100%;
}
</style>
