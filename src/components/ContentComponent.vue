<template>
  <div>
    <div class="">
      <q-img
        src="../assets/bg-image.png"
        :height="$q.screen.width < 700 ? '350px' : '750px'"
        fit="fill"
      >
        <template v-slot:loading>
          <q-spinner-gears color="white" />
        </template>
        <div class="absolute-center text-center bg-transparent text-white">
          <p :class="[$q.screen.width < 700 ? 'titleMobile' : 'titleDesktop']">
            LOOK YOUR BEST
          </p>
          <p>FOR YOUR SPECIAL DAY</p>
          <q-btn
            color="brown"
            no-caps
            label="New Arrival"
            @click="newArrival"
          />
        </div>
      </q-img>
    </div>
    <FeaturedProducts @handleToShopPage="handleToShopPage" />
  </div>
</template>

<script setup>
import { QSpinnerGears, useQuasar, useTimeout } from "quasar";
import { useRouter } from "vue-router";
import FeaturedProducts from "./FeaturedProducts.vue";

const router = useRouter();
const { registerTimeout } = useTimeout();
const newArrival = () => {
  try {
    router.push({ name: "Products" });
  } catch (error) {
    throw new Error(error);
  }
};

const $q = useQuasar();

const handleToShopPage = () => {
  router.push({ name: "Shop" });
};
</script>

<style>
.mobileImg {
  border-radius: 50px;
}
.titleDesktop {
  font-size: 38px;
}

.titleMobile {
  font-size: 16px;
}
</style>
