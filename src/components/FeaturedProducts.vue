<template>
  <div>
    <h4 align="center">Featured Products</h4>
    <center>
      <q-btn
        flat
        no-caps
        outline
        label="View All"
        @click="viewAllBtn"
        class="viewAllBtn"
        align="center"
      />
    </center>

    <div
      :class="[$q.screen.width < 1150 ? 'column' : 'row']"
      class="q-py-md"
      align="center"
    >
      <div
        :class="[$q.screen.width < 1150 ? '' : 'desktopType col']"
        v-for="img in img"
        :key="img.url"
        align="center"
      >
        <img :src="img.url" alt="" />
        <p style="font-size: 18px">{{ img.name }}</p>
        <p>{{ img.price }}</p>
      </div>
    </div>

    <div>
      <q-img
        src="../assets//FeaturedProducts/made-to-orderBackgroundImg.png"
        alt=""
        style="height: 250px"
      >
        <div
          class="absolute-center"
          style="background-color: transparent; width: 550px"
          align="center"
        >
          <h4>Made-To-Order</h4>
          <q-btn color="brown" label="Learn More" @click="learnMoreBtn" />
        </div>
      </q-img>
    </div>

    <div>
      <ShopCollection />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import FeaturedProdcutsImg1 from "../assets/FeaturedProducts/FeaturedProdcutsImg (1).png";
import FeaturedProdcutsImg2 from "../assets/FeaturedProducts/FeaturedProdcutsImg (2).png";
import FeaturedProdcutsImg3 from "../assets/FeaturedProducts/FeaturedProdcutsImg (3).png";
import FeaturedProdcutsImg4 from "../assets/FeaturedProducts/FeaturedProdcutsImg (4).png";
import FeaturedProdcutsImg5 from "../assets/FeaturedProducts/FeaturedProdcutsImg (5).png";
import ShopCollection from "./ShopCollection.vue";
const emit = defineEmits(["handleToShopPage"]);
const router = useRouter();
function viewAllBtn() {
  emit("handleToShopPage");
}

const img = [
  {
    url: FeaturedProdcutsImg1,
    name: "Travel Hoodie",
    price: "$699",
  },
  {
    url: FeaturedProdcutsImg2,
    name: "Terracotta Overshirt",
    price: "$699",
  },
  {
    url: FeaturedProdcutsImg3,
    name: "Roxie Red Overshirt",
    price: "$699",
  },
  {
    url: FeaturedProdcutsImg4,
    name: "Checked Formalshirt",
    price: "$699",
  },
  {
    url: FeaturedProdcutsImg5,
    name: "Marron Overshirt",
    price: "$699",
  },
];

const learnMoreBtn = () => {
  router.push({ name: "Shop" });
};
</script>

<style scoped>
.viewAllBtn {
  border: solid 1px #b1b1b1;
}

.desktopType:first-child {
  /* margin-left: 75px; */
}

.mobileScroll {
  width: 500px;
  height: 500px;
  align-items: center;
}
</style>
