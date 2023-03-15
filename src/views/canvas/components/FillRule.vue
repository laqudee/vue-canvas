<script setup>
import { ref, onMounted } from "vue";

const ruleList = [
  { label: "非零", value: "nonzero" },
  { label: "奇偶", value: "evenodd" },
];
const ruleType = ref("evenodd");
function changeRule(value) {
  if (value) {
    draw();
  }
}

const cvp = ref(null);
function draw() {
  const ctx = cvp.value.getContext("2d");

  // 清除
  ctx.clearRect(0, 0, 150, 150);
  ctx.beginPath()
  ctx.arc(50, 50, 30, 0, Math.PI*2, true);
  ctx.arc(50, 50, 15, 0, Math.PI*2, true);
  ctx.fill(ruleType.value);
}

onMounted(() => {
  draw();
});
</script>

<template>
  <div class="wrapper">
    <div>
      <select v-model="ruleType" @change="changeRule" placeholder="请选择fill规则">
        <option :value="it.value" v-for="it in ruleList">{{ it.label }}</option>
      </select>
    </div>
    <canvas ref="cvp" width="150" height="150"></canvas>
  </div>
</template>

<style>
select {
    width: 100%;
}
</style>
