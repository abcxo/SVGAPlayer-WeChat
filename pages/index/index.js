//index.js
//获取应用实例

import SVGAPlayer from '../../svga/player'
import SVGAParser from '../../svga/parser'

var app = getApp()

Page({
  onLoad: function () {
    var that = this
    let files = [
      "http://legox.yy.com/svga/svga-weixin/HamburgerArrow.wx.svga",
      "http://legox.yy.com/svga/svga-weixin/PinJump.wx.svga",
      "http://legox.yy.com/svga/svga-weixin/TwitterHeart.wx.svga",
      "http://legox.yy.com/svga/svga-weixin/Walkthrough.wx.svga",
    ];
    let player = new SVGAPlayer('canvas', wx.getSystemInfoSync().windowWidth, 500);
    let parser = new SVGAParser();
    let source = files[Math.ceil(Math.random() * 4) - 1];
    parser.load(source, (videoItem) => {
      player.setVideoItem(videoItem);
      player.startAnimation();
    });
  }
})
