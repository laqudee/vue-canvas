<script setup>
import { ref, onMounted } from "vue";

const cvp = ref(null);
function draw() {
  let ctx = cvp.value.getContext("2d");

  const lineCap = ['butt', 'round', 'square']

  ctx.strokeStyle='#09f';
  ctx.beginPath()
  ctx.moveTo(10, 10)
  ctx.lineTo(140, 10)
  ctx.moveTo(10, 140)
  ctx.lineTo(140, 140)
  ctx.stroke()
  

  ctx.strokeStyle = '#b1e'
  for (let i = 0; i< 10; i++) {
    ctx.lineWidth = 1+ i;
    ctx.lineCap = lineCap[i % 3]
    ctx.beginPath()
    ctx.moveTo(5+i*14, 5)
    ctx.lineTo(5+i*14, 140)
    ctx.stroke()
  }
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
