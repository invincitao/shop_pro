const ajaxUtil = require('../../ajaxUtil/request.js')
// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList: [],
    select_active: 0,
    rightContent: [],
  },
  handleTap: function (e) {
    const index = e.target.dataset.index
    this.setData({
      select_active: index,
      rightContent: this.data.cateList[index].children
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const categoryList = await ajaxUtil.request({
      url: "/categories"
    })
    this.setData({
      cateList: categoryList.message,
      rightContent: categoryList.message[this.data.select_active].children
    })
    console.log(this.data.cateList);
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