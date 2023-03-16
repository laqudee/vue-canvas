<script setup>
import { ref, onMounted } from "vue";
import image from "@/assets/xiniu.jpg";

const cvs = ref(null);
const zoom = ref(null);
const ctx = ref(null);
const zoomctx = ref(null);
const checked = ref(true);

let img = new Image();
img.crossOrigin = "anonymous";
img.src = image;

function init() {
  img.onload = function () {
    draw(this);
  };
}

function change() {
  zoomctx.value.imageSmoothingEnabled = checked.value;
  zoomctx.value.mozImageSmoothingEnabled = checked.value;
  zoomctx.value.webkitImageSmoothingEnabled = checked.value;
  zoomctx.value.msImageSmoothingEnabled = checked.value;
}

function draw(img) {
  ctx.value.drawImage(img, 0, 0, 400, 200);
  img.style.display = "none";
}

function zoomFn(event) {
  let x = event.layerX;
  let y = event.layerY;
  zoomctx.value.drawImage(
    cvs.value,
    Math.abs(x - 5),
    Math.abs(y - 5),
    10,
    10,
    0,
    0,
    200,
    200
  );
}

function saveImage() {
  let res = zoom.value.toDataURL("image/png");
  downloadImg(res, 'zoom-smoothing.png')
}

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

function downloadImg(url, filename) {
  const file = dataURLtoFile(url, filename);
  const aTag = document.createElement("a");
  const href = URL.createObjectURL(file);
  aTag.download = file.name;
  aTag.href = href;
  aTag.click();
  URL.revokeObjectURL(href);
}

onMounted(() => {
  ctx.value = cvs.value.getContext("2d");
  zoomctx.value = zoom.value.getContext("2d");
  init();
});
</script>

<template>
  <canvas ref="cvs" width="400" height="200" @mousemove="zoomFn"></canvas>
  <canvas ref="zoom" width="200" height="200"></canvas>
  <div>
    <label for="smoothbtn">
      <input
        type="checkbox"
        id="smoothbtn"
        v-model="checked"
        @change="change"
      />
      Enable image smoothing
    </label>
    <button @click="saveImage">Save Image</button>
  </div>
</template>

<style scoped>
canvas {
  margin: 20px;
}
</style>
