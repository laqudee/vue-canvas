<template>
  <div class="about">
    <canvas ref="tutorial" id="tutorial" width="150" height="150">
      current stock price: $3.15 + 0.15
    </canvas>
    <div>
      <canvas ref="canvas2" width="200" height="200"></canvas>
    </div>
    <div>
      <canvas ref="canvas3" width="150" height="150"></canvas>
    </div>
    <div>
      <canvas ref="canvas4" width="150" height="150"></canvas>
    </div>
    <div>
      <canvas ref="canvas5" width="150" height="200"></canvas>
    </div>
    <div>
      <canvas ref="canvas6" width="150" height="150"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tutorial = ref(null)
function draw() {
  let ctx = tutorial.value.getContext('2d')
  ctx.fillStyle = 'rgb(200,0,0)'
  ctx.fillRect(10, 10, 55, 50)

  ctx.fillStyle = 'rgba(0,0,200, 0.5)'
  ctx.fillRect(20, 20, 55, 50)

  ctx.fillStyle = '#fff000'
  ctx.fillRect(75, 75, 100, 100)
  ctx.clearRect(95, 95, 60, 60)
  ctx.strokeRect(100, 100, 50, 50)
}

const canvas2 = ref(null)
function draw2() {
  let ctx = canvas2.value.getContext('2d')

  ctx.fillStyle = '#bcde4f'
  ctx.beginPath()
  ctx.moveTo(0, 100)
  ctx.lineTo(80, 100)
  ctx.quadraticCurveTo(100, 100, 100, 115)
  ctx.lineTo(100, 165)
  ctx.fill()

  ctx.beginPath()
  ctx.strokeStyle = '#f2f'
  ctx.moveTo(0, 100)
  ctx.lineTo(100, 165)
  ctx.closePath()
  ctx.stroke()

  ctx.translate(80, 0)
  ctx.rotate(33 * Math.PI / 180)
  ctx.beginPath()
  ctx.fillStyle = '#000'
  ctx.font = "14px serif"
  ctx.fillText('统一单点登录', 10, 120)
}

const canvas3 = ref(null)
function draw3() {
  let ctx = canvas3.value.getContext('2d')

  ctx.fillStyle = '#f2f'
  ctx.beginPath()
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
  ctx.moveTo(110, 75)
  ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口 (顺时针)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
  ctx.stroke();
}

const canvas4 = ref(null)
function draw4() {
  let ctx = canvas4.value.getContext('2d')

  // 填充三角形
  ctx.beginPath()
  ctx.moveTo(25, 25)
  ctx.lineTo(105, 25)
  ctx.lineTo(25, 105)
  ctx.fill()

  // 描边三角形
  ctx.beginPath()
  ctx.lineTo(125, 125)
  ctx.lineTo(125, 45)
  ctx.lineTo(45, 125)
  ctx.closePath()
  ctx.stroke()
}

const canvas5 = ref(null)
function draw5() {
  let ctx = canvas5.value.getContext('2d')

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath()
      let x = 25 + j * 50
      let y = 25 + i * 50
      let radius = 20
      let startAngle = 0
      let endAngle = Math.PI + (Math.PI * j) / 2;
      let anticlockwise = i % 2 == 0 ? false : true

      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

      if (i > 1) {
        ctx.fill()
      } else {
        ctx.stroke()
      }
    }
  }
}

const canvas6 = ref(null)
function draw6() {
  let ctx = canvas6.value.getContext('2d')

  // 二次贝塞尔曲线
  ctx.beginPath()
  ctx.moveTo(75, 25)
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke()

  // ctx.beginPath();
  // ctx.moveTo(75, 40);
  // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  // ctx.fill();
}

onMounted(() => {
  draw()
  draw2()
  draw3()
  draw4()
  draw5()
  draw6()
})

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

tutorial {
  border: 1px solid black;
}
</style>
