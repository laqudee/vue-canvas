<script setup>
import { ref, onMounted } from "vue";

const cvp = ref(null);
function draw() {
  let ctx = cvp.value.getContext("2d");

  // 创建gradients
  let lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, "#00ABEB");
  lingrad.addColorStop(0.5, "#fff");
  lingrad.addColorStop(0.5, "#26C000");
  lingrad.addColorStop(1, "#fff");

  let lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, "#000");
  lingrad2.addColorStop(1, "rgba(0,0,0,0)"); // 透明

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // 绘制图像
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}

onMounted(() => {
  draw();
});
</script>

<template>
  <div>
    <canvas ref="cvp" width="150" height="150"></canvas>
  </div>
</template>

<style></style>
