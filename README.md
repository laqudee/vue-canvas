# vue-canvas

## 绘制矩形

- canvas支持矩形和路径（一系列点连成的线段）

- fillRect(x,y,width,height) // 绘制填充的矩形

- strokeRect(x,y,width, height) // 绘制矩形边框

- clearRect(x,y,width, height) // 清除制定矩形区域，让清楚部分完全透明

## 绘制路径

- 路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合

1. beginPath()
2. closePath()
3. stroke() // 通过线条来绘制图形轮廓
4. fill() // 填充

- fill()，路径自动闭合
- stroke()则不会闭合路径

- 使用arc()方法，绘制圆弧或者圆

- arc(x, y, radius, startAngle, endAngle, anticlockwise)

- arcTo(x1, y1, x2, y2, radius)

- 弧度 = (Math.PI/180)*角度

## 二次贝塞尔曲线及三次贝塞尔曲线

- quadraticCurveTo(cp1x, cp1y, x, y)
- bezierCurveTo(cp1x, cp1y, cp2x, cp27, x, y)

## Path2D对象

- 返回一个新初始化的Path2D对象

- new Path2D()
- new Path2D(path)
- new Path2D(d) // 从SVG建立Path对象

- 所有的路径方法都可以在Path2D中使用

- Path2D.addPath(path [, transform])

## styles and colors

- ctx.fillStyle
- ctx.strokeStyle

- 透明度Transparency
- ctx.globalAlha示例

- rgba

### 线型Line Styles

- lineWidth = value
- lineCap = type // 线段端点的样式，butt / round / squre; 默认是butt
- lineJoin = type // 决定图像两线段连接处所显示的样式：round / bevel / miter，默认是miter
- miterLimit = value // 用来设置外延与连接点的最大距离，如果交点大于此值，连接效果就会编程了bevel
- getLineDash()
- setLineDash() // 使用虚线
- lineDashOffset = value

### 渐变Gradients

- createLinearGradient(x1, y1, x2, y2)

- createRadialGradient(x1, y1, r1, x2, y2, r2)

- gradient.addColor(position, color)

### 图案样式 Pattern

- createPattern(image, type)
- type
  - repeat
  - repeat-x
  - repeat-y
  - no-repeat

### 阴影 Shadows

- shadowOffsetX
- shadowOffsetY
- shadowBlur // 用于设定阴影的模糊程度
- shadowColor // 标准的CSS颜色值

### 填充规则
- fill(type)

- type:
  - nonzero // 默认值
  - evenodd
## 绘制文本

- `fillText(text, x,y, [,maxWidth])`
  - 在指定(x,y)位置填充指定文本，最大宽度可选

- `strokeText(text, x, y, [, maxWidth])`
  - 绘制文本边框

- font

- textAlign: start, end, left, right, center // default: center

- textBaseline: top, hanging, middle, alphabetic, ideographic, bottom

- direction: ltr, rtl, inherit

- measureText()
  - 将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性

## Use Image

- 引入图像到canvas的步骤：
  1. 获得一个指向HTMLImageElement的对象或者另一个canvas元素的引用作为源，也可以是URL
  2. 使用 drawImage函数将图片绘制在画布上

```js
let img = new Image()
img.onload = () => {
    // run drawImage()
}
img.src = 'myImage.png'
```

- data:url

- drawImage(image, x, y, width, height)

### 切片 Slicing

- drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

## Transformations

- 移动Translating
- 旋转Torating
- 缩放Scaling
- 变形Transforms

### 状态存储与状态恢复
- save() 保存画布的所有状态
- restore() 保存和恢复canvas状态，没有参数

- 每一次save()，都会将当前状态存入栈中（先进后出）；每调一次restore()都会弹出一个状态覆盖当前状态（即恢复状态）

### 移动 Translating

- translate(x, y)
  - x：左右偏移量
  - y：上下偏移量

- 变形之前先保存状态

### 旋转 Rotating

- rotate(angle)
  - angle是旋转的角度，顺时针，以弧度为单位
  - 旋转的中心点始终是canvas的原点，如果要改变它，需要translate方法

### 缩放 Scaling

- scale(x,y)
  - x：水平缩放因子
  - y：垂直缩放因子

### 变形 Transforms

- transform(a,b,c,d,e,f)

## 组合 Compositing

- globalCompositeOperation

- clip
  - 将当前正在构建的路径转换为当前的裁剪路径

## 动画的基本步骤

1. 清空canvas
2. 保存canvas状态
3. 绘制动画图形
4. 恢复canvas状态

## 操控动画 Controlling an animation

- 在for循环中完成动画是不太可能的

- setInterval
- setTimeout

- window.setInterval(), window.setTimeout(), window.requestAnimationFrame()设定一个定期执行的函数

- window.requestAnimationFrame()
  - 提供更有效并且更加平缓的方式来执行动画

## 像素操作

- 直接通过ImageData对象操纵像素数据，直接读取或将数据数组写到该对象中

- ImageData对象中存储着canvas对象真实的像素数据
  - width
  - height
  - data（Uint8ClampedArry），一维数组，包含着RGBA格式的整型数据，范围0~255

- height x width x 4字节数据

```js
// 读取图片中位于第50行，第300列的像素的蓝色部分
blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2]

// 根据行、列读取某像素点的RGBA值的公式
imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 0/1/2/3]

// 使用Uint8ClampedArray.length属性读取像素数组的大小（以字节为单位）
let numBytes = imageData.data.length
```

### 创建一个空白的ImageData对象

```js
// 默认像素为透明黑
let myImageData = ctx.createImageData(width, height)

let myImageData2 = ctx.createImageData(anotherImageData)
```

### 得到场景数据

```js
let myImageData = ctx.getImageData(letf, top, width, height)
```

### 在场景中写入像素数据

```js
ctx.putImageData(myImageData, dx, dy)
```

### 图片的灰度与反相颜色

- invert():减掉颜色的最大色值255
- gray(): 用红绿和蓝色的平均值，也可以使用加权平均
  - x = 0.299r + 0.587g + 0.114b

### 缩放与反锯齿

- imageSmoothingEnabled属性

```js
zoomctx.drawImage(canvas, Math.abs(x - 5), Math.abs(y - 5), 10, 10, 0, 0, 200, 200)
```

### 保存图片

- canvas.toDataURL('img/png', quality)
  - quality: 0 --> 1

- canvas.toBlob(callback, type, encoderOptions)

## 性能优化

- 在离屏canvas上预渲染相似的图形或重复的对象
- 避免浮点数的坐标点，使用整数
- 不要在用drawImage()时缩放图像
- 使用多层画布去画一个复杂的场景

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black
  }
  canvas { position: absolute; }
  #ui-layer { z-index: 3 }
  #game-layer { z-index: 2 }
  #background-layer { z-index: 1 }
</style>

```

- 用 CSS 设置大的背景图

- 关闭透明度