<script setup>
import { ref, onMounted } from "vue";

const cvs = ref(null);

function draw() {
  let ctx = cvs.value.getContext("2d");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`;
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}

onMounted(() => {
  draw();
});
</script>

<template>
  <div>
    <canvas ref="cvs" width="150" height="150"></canvas>
  </div>
</template>

<style></style>
