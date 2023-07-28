<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
.container {
  max-width: 1200px;
  width: 100%;
  padding: 0 10px;
}
p {
  margin-bottom: 0;
}
.danger {
  color: red;
}
.warning {
  color: yellow;
}
.success {
  color: green;
}
</style>
