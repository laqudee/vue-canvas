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
- setLineDash()
- lineDashOffset = value

## 绘制文本

- fillText(text, x,y, [,maxWidth])

