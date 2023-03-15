<script setup>
import { ref, onMounted } from "vue";
import image from "@/assets/canvas_backdrop.png";

const cvs = ref(null);
function draw() {
  let ctx = cvs.value.getContext("2d");

  let img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
  img.src = image;
}

onMounted(() => {
  draw();
});
</script>

<template>
  <canvas ref="cvs" width="200" height="150"></canvas>
</template>

<style></style>
