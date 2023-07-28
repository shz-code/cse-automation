<template>
  <q-page class="login-page flex flex-center">
    <q-card class="login-card">
      <q-card-section>
        <div class="text-h2 text-center text-weight-bold">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="login">
          <q-input
            filled
            v-model="userId"
            label="User ID"
            type="text"
            required
          />
          <q-input
            filled
            class="q-mt-md"
            v-model="password"
            label="Password"
            type="password"
            required
          />
          <q-btn
            type="submit"
            color="primary"
            label="Login"
            class="login-button"
            :disable="!userId || !password"
            :loading="isLoading"
            :ripple="false"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import authStore from "src/stores/auth-store";

const authStoreInstance = authStore();

export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      userId: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    async login() {
      this.isLoading = true;
      await authStoreInstance.getRes();
      this.isLoading = false;
    },
  },
});
</script>

<style scoped>
.login-card {
  max-width: 800px;
  width: 100%;
  margin: auto;
}

.login-button {
  margin-top: 20px;
}
</style>
