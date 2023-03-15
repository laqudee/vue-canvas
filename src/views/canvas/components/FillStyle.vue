<script setup>
import { ref, onMounted } from "vue";

const cvp = ref(null);
function draw() {
  let ctx = cvp.value.getContext("2d");

  for (let i = 0; i< 6; i++) {
    for (let j = 0; j< 6; j++) {
        ctx.fillStyle = `rgb(${Math.floor(255-42.5*i)}, ${Math.floor(255-42.5*j)}, 0)`
        ctx.fillRect(j*25, i*25, 25, 25)
    }
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
