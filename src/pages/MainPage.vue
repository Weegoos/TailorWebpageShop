<template>
  <div>
    <ContentComponent />
  </div>
</template>

<script setup>
import { onErrorCaptured, provide } from "vue";
import ContentComponent from "../components/ContentComponent.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
onErrorCaptured((err, instance, info) => {
  $q.notify({
    message: `${err} : ${info}`,
    color: "negative",
    icon: "error",
  });
});
</script>

<style></style>
