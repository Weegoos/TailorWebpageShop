<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="q-mt-lg characteristics"
    style="background-color: #d9d9d9; height: auto"
  >
    <div :class="[$q.screen.width < 1150 ? 'column' : 'row']" class="q-py-xl">
      <div class="col">
        <img src="../assets/Characteristics/quality.png" alt="" />
        <p class="text-weight-bold text-h5 text-center">Quality</p>
        <p class="text-caption text-center">
          Our objective is to design and tailor a made-to-measure suit with a
          guaranteed fit. We ensure nothing but comfort, style, and class
          whenever and wherever you are.
        </p>
      </div>

      <div class="col">
        <img src="../assets/Characteristics/customisability.png" alt="" />
        <p class="text-weight-bold text-h5 text-center">Customisability</p>
        <p class="text-caption text-center">
          Our objective is to design and tailor a made-to-measure suit with a
          guaranteed fit. We ensure nothing but comfort, style, and class
          whenever and wherever you are.
        </p>
      </div>
      <div class="col">
        <center>
          <img src="../assets/Characteristics/convenience.png" alt="" />
        </center>

        <p class="text-weight-bold text-h5 text-center">Convenience</p>
        <p class="text-caption text-center">
          Our objective is to design and tailor a made-to-measure suit with a
          guaranteed fit. We ensure nothing but comfort, style, and class
          whenever and wherever you are.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.characteristics img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
</style>
