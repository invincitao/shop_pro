// 导入request
const ajaxUtil = require("../../ajaxUtil/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    swiperData: [],
    navsData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 发请求拿到轮播图的数据
    let swpierImage = await ajaxUtil.request({
      url: "/home/swiperdata"
    })
    // 发请求拿到导航栏的数据
    let navsIcon = await ajaxUtil.request({
      url: "/home/catitems"
    })
    this.setData({
      swiperData: swpierImage.message,
      navsData: navsIcon.message
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})