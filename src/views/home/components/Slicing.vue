<script setup>
import { ref, onMounted } from "vue";

const cvs = ref(null);
const source = ref(null);
const frame = ref(null);

function draw() {
    let ctx = cvs.value.getContext("2d");

    // draw slice
    ctx.drawImage(document.getElementById('source'),
        33, 71, 104, 124, 21, 20, 87, 104);

    // draw frame
    ctx.drawImage(document.getElementById('frame'), 0, 0)
}

onMounted(() => {
    draw()
});
</script>

<template>
    <canvas ref="cvs" width="200" height="150"></canvas>
    <div style="display:none">
        <img id="source" ref="source" src="@/assets/lu.png" width="30" height="22">
        <img id="frame" ref="frame" src="@/assets/xk.png" width="13" height="15">
    </div>
</template>

<style></style>
