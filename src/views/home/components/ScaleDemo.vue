<script setup>
import { ref, onMounted } from "vue";

const cvs = ref(null);

function draw() {
  let ctx = cvs.value.getContext("2d");

  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  ctx.scale(-1, 1);
  ctx.font = "48px serif";
  ctx.fillText("MND", -135, 120);
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
