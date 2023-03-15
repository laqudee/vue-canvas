<script setup>
import { ref, onMounted, watch } from "vue";
const miterNumber = ref(10);

watch(miterNumber, (val, oldVal) => {
    if (val && val !== oldVal) {
        draw()
    }
})

const cvp = ref(null);
function draw() {
  let ctx = cvp.value.getContext("2d");
  
  // 清空画布
  ctx.clearRect(0, 0, 150, 150);

  // 绘制参考线
  ctx.strokeStyle = '#09f'
  ctx.lineWidth = 2
  ctx.strokeRect(-5, 50, 160, 50)

  // 设置线条样式
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 10

  ctx.miterLimit = miterNumber.value

  // 绘制线条
  ctx.beginPath()
  ctx.moveTo(0, 100)
  for (let i = 0; i< 24; i++) {
    let dy = i % 2 === 0 ? 25 : -25
    ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy)
  }
  ctx.stroke()
  return false
  
}

onMounted(() => {
  draw();
});
</script>

<template>
  <div>
    <div>
        <input type="number" v-model="miterNumber" placeholder="请输入miterLimit值查看效果">
    </div>
    <canvas ref="cvp" width="150" height="150"></canvas>
  </div>
</template>

<style>
</style>