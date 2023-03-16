<script setup>
import { ref, onMounted, watch } from "vue";
import image from "@/assets/xiniu.jpg";

const cvs = ref(null);
const cvsW = 400;
const cvsH = 200;
const ctx = ref(null);
const type = ref("original");

let img = new Image();
img.crossOrigin = "anonymous";
img.src = image;

function init() {
  img.onload = function () {
    ctx.value.drawImage(img, 0, 0, 400, 200);
  };
}

let original = function () {
  ctx.value.drawImage(img, 0, 0, 400, 200);
};

let invert = function () {
  ctx.value.drawImage(img, 0, 0, 400, 200);
  const imageData = ctx.value.getImageData(0, 0, cvsW, cvsH);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // red
    data[i + 1] = 255 - data[i + 1]; // green
    data[i + 2] = 255 - data[i + 2]; // blue
  }
  ctx.value.putImageData(imageData, 0, 0);
};

let grayscale = function () {
  ctx.value.drawImage(img, 0, 0, 400, 200);
  const imageData = ctx.value.getImageData(0, 0, cvsW, cvsH);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }
  ctx.value.putImageData(imageData, 0, 0);
};

watch(type, (val, oldVal) => {
  if (val && val !== oldVal) {
    switch (val) {
      case "inverted":
        return invert();
      case "grayscale":
        return grayscale();
      default:
        return original();
    }
  }
});

onMounted(() => {
  ctx.value = cvs.value.getContext("2d");
  init();
});
</script>

<template>
  <div class="cn-wrapper">
    <canvas class="cn" ref="cvs" width="400" height="200"></canvas>
    <div class="di">
      <label for="one">Original</label>
      <input id="one" type="radio" v-model="type" value="original" />
      <label for="two">Grayscale</label>
      <input id="two" type="radio" v-model="type" value="grayscale" />
      <label for="three">Inverted</label>
      <input id="three" type="radio" v-model="type" value="inverted" />
    </div>
  </div>
</template>

<style scoped>
.cn-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.di {
  margin: 0;
}

input {
  margin-right: 10px;
}
</style>
