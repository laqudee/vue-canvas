<script setup>
import { ref, onMounted } from "vue";
import image from "@/assets/capitan_meadows,_yosemite_national_park.jpg";

const cvs = ref(null);

let img = new Image();
img.src = image;

let CanvasXSize = 800;
let CanvasYSize = 200;
let speed = 30; // lower is faster
let scale = 1.05;
let y = -4.5; // vertical offset

let dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

function init() {
  img.onload = function () {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
      x = CanvasXSize - imgW;
      clearX = imgW;
    } else {
      clearX = CanvasXSize;
    }

    if (imgH > CanvasYSize) {
      clearY = imgH;
    } else {
      clearY = CanvasYSize;
    }

    // get canvas context
    ctx = cvs.value.getContext("2d");

    // set refresh context
    return setInterval(draw, speed);
  };
}

function draw() {
  ctx.clearRect(0, 0, clearX, clearY);

  if (imgW < CanvasXSize) {
    if (x > CanvasXSize) {
      x = -imgW + x;
    }
    // draw additinal image
    if (x > 0) {
      ctx.draw(img, -imgW + x, y, imgW, imgH);
    }
  } else {
    if (x > CanvasXSize) {
      x = CanvasXSize - imgW;
    }
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }

  ctx.drawImage(img, x, y, imgW, imgH);

  x += dx;
}

onMounted(() => {
    init()
});
</script>

<template>
  <div>
    <canvas ref="cvs" width="800" height="200"></canvas>
  </div>
</template>
