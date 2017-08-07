//index.js
//获取应用实例

import SVGAPlayer from '../../svga/player'
import SVGAParser from '../../svga/parser'

var app = getApp()

Page({
  onLoad: function () {
    var that = this
    let files = [
      "https://raw.githubusercontent.com/yyued/SVGAPlayer-WeChat/master/res/HamburgerArrow.wx.svga",
      "https://raw.githubusercontent.com/yyued/SVGAPlayer-WeChat/master/res/PinJump.wx.svga",
      "https://raw.githubusercontent.com/yyued/SVGAPlayer-WeChat/master/res/TwitterHeart.wx.svga",
      "https://raw.githubusercontent.com/yyued/SVGAPlayer-WeChat/master/res/Walkthrough.wx.svga",
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
