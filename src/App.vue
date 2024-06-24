<template>
  <div>
    <keep-alive>
      <AppComponent :buttons="buttons" />
    </keep-alive>
  </div>
</template>

<script setup>
import { onActivated, ref } from "vue";
import AppComponent from "./components/AppComponent.vue";
import { useQuasar } from "quasar";
defineOptions({
  name: "App",
});

const buttons = [
  {
    name: "H",
    label: "Home",
    link: "/",
  },
  {
    name: "P",
    label: "Products",
    link: "/products",
  },
  {
    name: "SP",
    label: "Shop",
    link: "/shop",
  },
  {
    name: "W",
    label: "Weggings",
    link: "/weggings",
  },
  {
    name: "SC",
    label: "Services",
    link: "/weggings",
  },
  {
    name: "C",
    label: "Contact",
    link: "/contact",
  },
];
</script>
