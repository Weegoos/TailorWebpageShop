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
      <q-footer reveal elevated bordered>
        <q-toolbar class="text-white" style="background-color: #515050">
          <div
            class="q-gutter-lg column"
            style="width: 100vw"
            v-for="footer in footers"
            :key="footer.footerHeadline"
          >
            <div class="col footerContent">
              <q-btn flat dense :label="footer.footerHeadline" />
              <br />
              <q-btn flat :label="footer.btn1" no-caps @click="clickBtn1">
                <q-badge
                  v-if="footer.newBadge1"
                  color="teal"
                  label="New"
                  floating
                />
              </q-btn>
              <br />
              <q-btn flat :label="footer.btn2" no-caps @click="onClick">
                <q-badge
                  v-if="footer.newBadge2"
                  color="teal"
                  label="New"
                  floating
                />
              </q-btn>
              <br />
              <q-btn flat :label="footer.btn3" no-caps @click="onClick">
                <q-badge
                  v-if="footer.newBadge3"
                  color="teal"
                  label="New"
                  floating
                />
              </q-btn>

              <br />
              <q-btn flat :label="footer.btn4" no-caps @click="onClick">
                <q-badge
                  v-if="footer.newBadge4"
                  color="teal"
                  label="New"
                  floating
                />
              </q-btn>
            </div>
          </div>
        </q-toolbar>
      </q-footer>
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

const footers = [
  {
    footerHeadline: "Sign up and Save",
    btn1: "Subscribe",
    newBadge1: false,
  },
  {
    footerHeadline: "Location",
    btn1: "Location",
    newBadge1: false,
  },
  {
    footerHeadline: "About",
    btn1: "FAQ",
    newBadge1: false,
    btn2: "Services",
    newBadge2: false,
    btn3: "Contact",
    newBadge3: false,
    btn4: "Start a Return ",
    newBadge4: true,
  },
  {
    footerHeadline: "Tailoring",
    btn1: "Made-to-Measure",
    newBadge1: false,
    btn2: "Weddings",
    newBadge2: false,
    btn3: "Made-to-Order",
    newBadge3: false,
  },
  {
    footerHeadline: "Orders",
    btn1: "Returns",
    newBadge1: false,
    btn2: "Terms and Conditions",
    newBadge2: false,
    btn3: "Privacy and policy",
    newBadge3: false,
    btn4: "Gifts",
    newBadge4: false,
  },
];

const emit = defineEmits(["handleBtn"]);
function clickBtn1() {
  emit("handleBtn", { msg: "Batyr is clicking button" });
}
</script>

<style scoped>
.header {
  background-color: #faeddf;
}

.footerContent {
  margin-top: 55px;
}
</style>
