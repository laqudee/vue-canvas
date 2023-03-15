<script setup>
import { ref, onMounted } from "vue";

let offset = 0;
const cvp = ref(null);
function draw() {
  let ctx = cvp.value.getContext("2d");

  // 清空画布
  ctx.clearRect(0, 0, 150, 150);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  requestAnimationFrame(march)
}

onMounted(() => {
  march();
});
</script>

<template>
  <div>
    <canvas ref="cvp" width="150" height="150"></canvas>
  </div>
</template>

<style></style>
