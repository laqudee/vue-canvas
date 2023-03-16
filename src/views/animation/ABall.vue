<script setup>
import { ref, onMounted } from "vue";

const cvs = ref(null)
const cvsWidth = 600
const cvsHeight = 300
const ctx = ref(null)
const raf = ref(null)
const running = ref(false)

const ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    radius: 25,
    color: 'blue'
}

function ballDraw() {
    ctx.value.beginPath();
    ctx.value.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.value.closePath()
    ctx.value.fillStyle = this.color
    ctx.value.fill()
}

// 清除
function clear() {
    // 长尾效果
    ctx.value.fillStyle = 'rgba(255,255,255,0.3)';
    // 清楚
    ctx.value.fillRect(0, 0, cvsWidth, cvsHeight);
}

function draw() {
    clear()
    ballDraw.call(ball)
    ball.x += ball.vx
    ball.y += ball.vy

    // 加速度
    ball.vy *= 0.99
    ball.vy += 0.25

    // 控制边界
    if (ball.y + ball.vy > cvsHeight || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy
    }
    if (ball.x + ball.vx > cvsWidth || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx
    }

    raf.value = window.requestAnimationFrame(draw)
}

function mousemove(e) {
    if (!running.value) {
        clear()
        ball.x = e.offsetX
        ball.y = e.offsetY
        ballDraw.call(ball)
    }
}

function handleClick() {
    if (!running.value) {
        raf.value = window.requestAnimationFrame(draw)
        running.value = true
    }
}

function mouseout(e) {
    window.cancelAnimationFrame(raf.value)
    running.value = false
}

onMounted(() => {
    ctx.value = cvs.value.getContext('2d')
    ballDraw.call(ball)
})
</script>

<template>
    <canvas class="cn" ref="cvs" width="600" height="300" @click="handleClick" @mousemove="mousemove" @mouseout="mouseout"></canvas>
</template>

<style scoped>
.cn {
    border: 1px solid #000;
    margin-top: 20px;
}
</style>
