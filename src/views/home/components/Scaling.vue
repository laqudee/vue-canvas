<script setup>
import { ref, onMounted } from "vue";
import image from "@/assets/lu.png";

const cvs = ref(null);
function draw() {
  let ctx = cvs.value.getContext("2d");

  let img = new Image();
  img.onload = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        ctx.drawImage(img, j * 50, i * 38, 50, 40);
      }
    }
  };
  img.src = image;
}

onMounted(() => {
  draw();
});
</script>

<template>
  <div>
    <canvas ref="cvs" width="200" height="150"></canvas>
  </div>
</template>

<style></style>
