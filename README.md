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

