<script setup>
import { ref, onMounted } from "vue";
import image from "@/assets/xiniu.jpg";

const cvs = ref(null);
const ctx = ref(null);

let img = new Image();
img.crossOrigin = "anonymous";
img.src = image;

const hoveredColor = ref(null)
const selectedColor = ref(null)

function pick(event, destination) {
  let x = event.layerX;
  let y = event.layerY;
  let pixel = ctx.value.getImageData(x, y, 1, 1);
  let data = pixel.data;

  const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
  destination.style.background = rgba;
  destination.textContent = rgba;

  return rgba;
}

function mousemove(event) {
  pick(event, hoveredColor.value);
}

function handleClick(event) {
  pick(event, selectedColor.value);
}

function init() {
  img.onload = function () {
    ctx.value.drawImage(img, 0, 0, 400, 200);
    img.style.display = "none";
  };
}

onMounted(() => {
  ctx.value = cvs.value.getContext("2d");
  init();
});
</script>

<template>
  <div class="cn-wrapper">
    <canvas
      class="cn"
      ref="cvs"
      width="400"
      height="200"
      @mousemove="mousemove"
      @click="handleClick"
    ></canvas>
    <div class="di">
        <p>Hovered color</p>
        <div ref="hoveredColor" class="hovered"></div>
    </div>
    <div class="di">
        <p>Selected color</p>
        <div ref="selectedColor" class="hovered"></div>
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
    height: 200px;
    width: 200px;
    margin: 0;
}
.hovered {
    width: 100%;
    height: 170px;
}
p {
    text-align: center;
}
</style>
