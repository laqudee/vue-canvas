<script setup>
import { ref, onMounted } from "vue";
import sunImage from '@/assets/sun.png'
import earthImage from '@/assets/earth.png'
import moonImage from '@/assets/moon.png'

const cvs = ref(null);
function draw() {
  let ctx = cvs.value.getContext("2d");

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

let sun = new Image()
let moon = new Image()
let earth = new Image()
function init() {
  sun.src = sunImage;
  moon.src = moonImage;
  earth.src = earthImage;
  window.requestAnimationFrame(draw);
}

onMounted(() => {
  init()
});
</script>

<template>
  <div>
    <canvas ref="cvs" width="300" height="300"></canvas>
  </div>
</template>

<style>
</style>
