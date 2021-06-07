// 引入request
const ajaxUtil = require('../../ajaxUtil/request.js')
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
    ],
    goodsList: []
  },
  // 定义参数
  // 页码
  pagenum: 1,
  // 页容量
  pagesize: 20,
  // 总数
  total: 0,
  cid: "",
  query: "",
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
  onLoad: async function (options) {
    let params = {}
    if (options.cid) {
      params.cid = options.cid
      this.cid = options.cid
    }
    if (options.query) {
      params.query = options.query
      this.query = options.query
    }
    params.pagenum = this.pagenum
    params.pagesize = this.pagesize
    const goods = await ajaxUtil.request({
      data: {
        ...params
      },
      url: "/goods/search"
    })
    this.total = goods.message.total
    this.pagenum = goods.message.pagenum
    this.pagesize = 20
    this.setData({
      goodsList: goods.message.goods
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
  // 下拉获取数据
  getProductList: async function () {
    const params = {}
    params.pagenum = 1
    params.pagesize = this.pagesize
    if (this.cid) {
      params.cid = this.cid
    }
    if (this.query) {
      params.query = this.query
    }
    const goods = await ajaxUtil.request({
      url: "/goods/search",
      data: {
        ...params
      }
    })
    wx.stopPullDownRefresh()
    // 赋值总页数和当前页码数
    this.total = goods.message.total
    this.setData({
      goodsList: goods.message.goods
    })
  },
  onPullDownRefresh: function () {
    this.setData({
      goodsList: []
    })
    this.getProductList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    if (parseInt(this.pagenum) + 1 <= Math.ceil((this.total / this.pagesize))) {
      this.pagenum = parseInt(this.pagenum) + 1
      const params = {}
      params.pagenum = this.pagenum
      params.pagesize = this.pagesize
      if (this.cid) {
        params.cid = this.cid
      }
      if (this.query) {
        params.query = this.query
      }
      const goods = await ajaxUtil.request({
        data: {
          ...params
        },
        url: "/goods/search"
      })
      this.total = goods.message.total
      this.setData({
        goodsList:[
          ...this.data.goodsList,
          ...goods.message.goods
        ]
      })
    }else{
      wx.showToast({
        title: '到底啦！',
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})