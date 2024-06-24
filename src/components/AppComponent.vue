<template>
  <div>
    <q-layout view="hhr LpR lFf" container style="height: 100vh">
      <q-header
        reveal
        elevated
        bordered
        style="height: 70px"
        class="text-black header"
      >
        <q-toolbar class="q-pt-md q-gutter-sm">
          <q-btn flat round dense icon="menu" @click="drawer = !drawer" />
          <q-toolbar-title>
            <span style="font-family: Ephesis; font-size: 24px"
              >Jashim Shop</span
            >
          </q-toolbar-title>
          <q-btn icon="people" flat dense @click="profile" rounded />
          <q-btn icon="search" flat dense @click="search" rounded />
          <q-btn icon="support" flat dense @click="basket" rounded />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :mini="miniState"
        show-if-above
        @mouseout="miniState = true"
        @mouseover="miniState = false"
        mini-to-overlay
        bordered
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list
            padding
            v-for="btn in buttons"
            :key="btn.name"
            @click="navigate(btn.link)"
          >
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="btn.name" />
              </q-item-section>
              <q-item-section>{{ btn.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page>
          <router-view />
          <GoodsBasket style="position: fixed; top: 150px" v-if="showBasket" />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import GoodsBasket from "../components/GoodsBasket.vue";

const drawer = ref(false);
const miniState = ref(true);

const { props } = defineProps({
  buttons: [
    {
      type: Array,
      required: true,
      default: "Data is not delivered",
    },
  ],
});

const router = useRouter();

const navigate = (route) => {
  router.push(route);
};
const showBasket = ref(false);
const basket = () => {
  showBasket.value = !showBasket.value;
};
</script>

<style scoped>
.header {
  background-color: #faeddf;
}
</style>
