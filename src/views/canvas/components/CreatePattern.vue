<script setup>
import { ref, onMounted } from "vue";
import image from "@/assets/canvas_createpattern.png";

const cvp = ref(null);
function draw() {
  let ctx = cvp.value.getContext("2d");

  // 创建 image对象，用作图案
  let img = new Image();
  img.src = image;
  img.onload = function () {
    // 创建图案
    let ptrn = ctx.createPattern(img, "repeat");
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
  };
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
