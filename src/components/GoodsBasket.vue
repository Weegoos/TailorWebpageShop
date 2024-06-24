<template>
  <div class="shadow-2 basket">
    <p>{{ counter }}</p>
    <q-btn label="Counter" @click="counter++" />
  </div>
</template>

<script setup>
import { useQuasar, useTimeout } from "quasar";
import {
  onBeforeUnmount,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  ref,
} from "vue";

const counter = ref(0);
const $q = useQuasar();
const { registerTimeout } = useTimeout();
onRenderTracked((e) => {
  $q.notify({
    message: `Target: ${e.target.value}; Key: ${e.key}; Effect: ${e.effect}`,
  });
});

onBeforeUnmount(() => {
  registerTimeout(() => {
    $q.notify({
      message: "Вы собираетесь удалить карзину",
    });
  }, 500);
});

onUnmounted(() => {
  registerTimeout(() => {
    $q.notify({
      message: "Корзина удалена",
    });
  }, 500);
});

onRenderTriggered((e) => {
  if (e.newValue === 8) {
    $q.notify({
      message: "Вы достигли лимита!",
      color: "negative",
    });
  }
});
</script>

<style scoped>
.basket {
  background-color: white;
  width: 150px;
  height: 250px;
  position: relative;
  left: 150px;
}
</style>
