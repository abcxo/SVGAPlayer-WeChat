# SVGAPlayer-WeChat

SVGAPlayer 在微信小程序中的实现，借助 SVGAPlayer，你可以在微信小程序中播放矢量动画，但有以下限制。

## 限制

### 位图动画不能播放

因为小程序的位图渲染能力相当弱，因此，位图动画被禁止使用。

### 矢量动画不能过于复杂

不能使用过于复杂的矢量动画，因为，过于复杂的矢量（矢量元素过多、效果太炫）会导致小程序卡死。

## 使用方法

### 下载源码

直接下载本仓库源码

### 转换 SVGA 文件至小程序兼容格式

1. 将 svga 文件放置在 res 目录下
2. 在命行令中，使用 node 执行 ```node script/converter.js``` 即可完成转换
3. 将 *.wx.svga 文件放置在 HTTP 服务器

### 集成

将 svga 目录复制到你的工程目录下，然后在需要添加动画的地方，添加 [canvas](https://mp.weixin.qq.com/debug/wxadoc/dev/component/canvas.html#canvas) 组件。

在对应的 js 代码中，添加以下实现。

```js
import SVGAPlayer from '../../svga/player'
import SVGAParser from '../../svga/parser'

Page({
  onLoad: function () {
    let player = new SVGAPlayer('canvas', 500, 500); // width = 500, height = 500, 对应的是 canvas 画布的大小。
    let parser = new SVGAParser();
    parser.load("http://yourserver.com/yourfile.wx.svga", (videoItem) => {
      player.setVideoItem(videoItem);
      player.startAnimation();
    });
  }
})

```

* svga 文件需要放置在安全域名下