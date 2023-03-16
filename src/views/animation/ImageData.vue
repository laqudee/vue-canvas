<script setup>
import { ref, onMounted } from 'vue'

const cvs = ref(null)
const ctx = ref(null)

onMounted(() => {
    ctx.value = cvs.value.getContext('2d')
})
</script>

<template>
    <div>
        <canvas class="cn" ref="cvs" width="600" height="300"></canvas>
    </div>
</template>

<style scoped>
.cn {
    border: 1px solid #000;
    margin-top: 20px;
}
</style>