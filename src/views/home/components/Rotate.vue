<script setup>
import { ref, onMounted } from "vue";

const cvs = ref(null);

function draw() {
  let ctx = cvs.value.getContext("2d");

  // rotate from canvas origin
  ctx.save();
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);

  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // right rectangles, rotate from rectangle center
  // draw blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // translate to rectangle center
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25); // rotate
  ctx.translate(-200, -80); // translate back

  // draw grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(150, 30, 100, 100);
}

onMounted(() => {
  draw();
});
</script>

<template>
  <div>
    <canvas ref="cvs" width="300" height="150"></canvas>
  </div>
</template>

<style></style>
