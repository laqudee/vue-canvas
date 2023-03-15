<script setup>
import { ref, onMounted, watch } from "vue";

const name = ref("Laqudee");
watch(name, (val, oldVal) => {
  if (val !== oldVal) {
    draw();
  }
});

const cvp = ref(null);
function draw() {
  const ctx = cvp.value.getContext("2d");

  // 清除
  ctx.clearRect(0, 0, 150, 150);
  
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0,0,0,0.5)";

  ctx.font = "20px Times Roman";
  ctx.fillStyle = "#000";
  ctx.fillText(name.value, 5, 30);
}

onMounted(() => {
  draw();
});
</script>

<template>
  <div class="wrapper">
    <div>
      <input type="text" v-model="name" placeholder="请输入姓名" />
    </div>
    <canvas ref="cvp" width="150" height="150"></canvas>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
