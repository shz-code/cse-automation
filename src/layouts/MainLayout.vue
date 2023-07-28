<template>
  <q-layout view="hHh lpR fff">
    <!-- Layout Header Start -->
    import { RouterLink } from "vue-router";
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <!-- Toggle left menu -->
        <q-btn
          class="lt-md"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <!-- Header Title & Utilities -->
        <div class="fit row wrap justify-between items-center content-center">
          <q-toolbar-title>
            <router-link to="/">
              <q-avatar>
                <q-img src="~assets/CSE_LOGO.png" spinner-color="white" />
              </q-avatar>
              <span class="title"> CSE Automation </span>
            </router-link>
          </q-toolbar-title>
          <div class="auth-btns">
            <router-link to="/login">
              <q-btn color="secondary" label="Log In"></q-btn>
            </router-link>
          </div>
        </div>
      </q-toolbar>
    </q-header>
    <!-- Layout Header End -->

    <!-- Layout Left Menu Start -->
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <SideBar />
    </q-drawer>

    <!-- Layout Left Menu End -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Layout Footer Start -->
    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <!-- Layout Footer End -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import SideBar from "src/components/SideBar.vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: {
    SideBar,
  },
});
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: white;
}
</style>
