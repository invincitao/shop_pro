// pages/goodList/goodList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tabs选中的状态
    activeTab: "all",
    // tabs数据
    tabs: [{
        name: "综合",
        target: "all"
      },
      {
        name: "销量",
        target: "sales"
      },
      {
        name: "价格",
        target: "price"
      }
    ]
  },
  // 子传父事件
  handleTabs: function (msg) {
    const target = msg.detail;
    this.setData({
      activeTab: target
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
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