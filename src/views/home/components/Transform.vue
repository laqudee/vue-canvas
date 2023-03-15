<script setup>
import { ref, onMounted } from "vue";

const cvs = ref(null);

function draw() {
  let ctx = cvs.value.getContext("2d");

  let sin = Math.sin(Math.PI / 6);
  let cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  let c = 0;
  for (let i = 0; i < 12; i++) {
    c = Math.floor((255 / 12) * i);
    ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
  ctx.fillRect(0, 50, 100, 100);
}

onMounted(() => {
  draw();
});
</script>

<template>
  <div>
    <canvas ref="cvs" width="200" height="250"></canvas>
  </div>
</template>

<style></style>
