<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <q-input v-model="text" type="text" label="Label" />
    <ProductsComponent />
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed, provide, ref, watch, watchEffect } from "vue";
import ProductsComponent from "../components/ProductsComponent.vue";

const $q = useQuasar();
const text = ref("");

const values = computed(() => {
  return text.value;
});

$q.notify({
  message: values,
});

provide("text", values);
</script>

<style></style>
