<template>
  <div>
    <h4 class="" align="center">Shop Collection</h4>

    <div
      class="shopCollection q-gutter-y-md"
      :class="[$q.screen.width < 1150 ? 'column mobileContainer' : 'row']"
      align="center"
    >
      <div
        class="shopContainer col-4"
        v-for="imgs in shopCollectionTopRowImg"
        :key="imgs.name"
        align="center"
      >
        <div class="imgStyle">
          <q-img :src="imgs.url" alt="" class="centeredImage">
            <caption class="captionImgShopCollection">
              <p class="captionImgText">{{ imgs.name }}</p>
            </caption>
          </q-img>
        </div>
      </div>
    </div>

    <Characteristics />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import shopCollectionTopRowImg1 from "../assets/ShopCollection/shopCollection (1).png";
import shopCollectionTopRowImg2 from "../assets/ShopCollection/shopCollection (2).png";
import shopCollectionTopRowImg3 from "../assets/ShopCollection/shopCollection (3).png";
import shopCollectionTopRowImg4 from "../assets/ShopCollection/shopCollection (4).png";
import shopCollectionTopRowImg5 from "../assets/ShopCollection/shopCollection (5).png";
import shopCollectionTopRowImg6 from "../assets/ShopCollection/shopCollection (6).png";
import Characteristics from "./Characteristics.vue";
onMounted(() => {
  console.clear();
});

const shopCollectionTopRowImg = [
  {
    url: shopCollectionTopRowImg1,
    name: "Suits & Vests",
  },
  {
    url: shopCollectionTopRowImg2,
    name: "Coats & Blazers",
  },
  {
    url: shopCollectionTopRowImg3,
    name: "Pants & Trausers",
  },
  {
    url: shopCollectionTopRowImg4,
    name: "Formal Shirts",
  },
  {
    url: shopCollectionTopRowImg5,
    name: "Tuxedos",
  },
  {
    url: shopCollectionTopRowImg6,
    name: "Casual Wear",
  },
];
</script>

<style scoped>
.imgStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.centeredImage {
  max-width: 100%;
  height: auto;
  width: 250px;
}

.shopCollection {
  display: flex;
  justify-content: center;
}

.mobileContainer {
  flex-direction: column;
}

.captionImgShopCollection {
  background-color: white;
  /* max-width: 150px; */
  position: relative;
  top: 20vh;
  width: 170px;
}

.captionImgText {
  font-size: 16px;
  padding: 3px;
  position: relative;
  top: 5px;
  font-weight: bold;
}
</style>
