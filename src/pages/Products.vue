<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <q-input v-model="text" type="text" label="Label" />
  </div>
</template>

<script setup>
import { QSpinnerGears, useQuasar } from "quasar";
import { onBeforeUpdate, onUpdated, ref } from "vue";

const $q = useQuasar();
const text = ref("");
onBeforeUpdate(() => {
  $q.notify({
    message: "Данные обрабатываются",
    spinner: QSpinnerGears,
    caption: "Подождите",
  });

  onUpdated(() => {
    $q.notify({
      message: `Данные обработаны:`,
      color: "positive",
      icon: "check",
    });
  });
});
</script>

<style></style>
