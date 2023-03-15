<script setup>
import { ref, onMounted } from "vue";

const cvp = ref(null);
function draw() {
  let ctx = cvp.value.getContext("2d");

  const rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);

  const circle = new Path2D();
  circle.moveTo(125, 35);
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  const p = new Path2D("M10 10 h 80 v 90 h -80 Z")

  ctx.stroke(rectangle);
  ctx.fill(circle);
  ctx.strokeStyle = '#34dddd'
  ctx.stroke(p)
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
