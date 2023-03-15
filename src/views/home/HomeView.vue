<script setup>
import { ref, onMounted } from "vue";
import SimpleLineImage from "./components/SimpleLineImage.vue";
import Scaling from "./components/Scaling.vue";
// import Slicing from "./components/Slicing.vue";
import SaveAndRestore from "./components/SaveAndRestore.vue";
import Translate from "./components/Translate.vue";
import Rotate from './components/Rotate.vue'
import ScaleDemo from "./components/ScaleDemo.vue";
import TransformDemo from "./components/Transform.vue"

const cvh = ref(null)
function draw() {
  let ctx = cvh.value.getContext('2d')
  ctx.font = "18px input"
  ctx.fillText("Laqudee Des Canvas", 0, 20)

  ctx.textBaseline = "hanging";
  ctx.font = "16px input"
  ctx.strokeText("Communist International", 0, 100)

  const text = ctx.measureText("foo");
  console.log(text.width);
  
}

onMounted(() => {
  draw()
})

</script>

<template>
  <div class="canvas-wrapper">
    <div><canvas ref="cvh" width="200" height="150"></canvas></div>
    <SimpleLineImage />
    <Scaling />
    <!-- <Slicing /> -->
    <SaveAndRestore />
    <Translate />
    <Rotate />
    <ScaleDemo />
    <TransformDemo />
  </div>
</template>

<style>
.canvas-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
div {
    margin-bottom: 20px;
    margin-right: 20px;
}
</style>