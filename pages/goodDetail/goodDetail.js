const ajaxUtil = require('../../ajaxUtil/request.js')
// pages/goodDetail/goodDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: {},
    isCollect: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const {
      goods_id
    } = options
    const detail = await ajaxUtil.request({
      data: {
        goods_id
      },
      url: "/goods/detail"
    })
    const Collect = wx.getStorageSync('Collect') || []
    // 用== 就行  ===即判断数据类型还要比较值
    const index = Collect.findIndex(v => v.goods_id == goods_id)
    // 如果等于-1就说明没找着，就是false
    if (index === -1) {
      this.setData({
        isCollect: false
      })
    } else {
      this.setData({
        isCollect: true
      })
    }
    this.setData({
      goodsDetail: detail.message
    })
  },
  // 加入购物车
  handleAddCart: function () {
    const cart = wx.getStorageSync('cart') || []
    const index = cart.findIndex(v => v.goods_id === this.data.goodsDetail.goods_id)
    if (index === -1) {
      if (this.data.goodsDetail.goods_number <= 0) {
        wx.showToast({
          title: '该商品没库存',
          mask: true
        })
      }
      const goodsDetail = this.data.goodsDetail
      goodsDetail.num = 1
      goodsDetail.checked = true
      cart.push(goodsDetail)
      wx.showToast({
        title: '成功加入购物车',
        mask: true
      })
    } else {
      if (cart[index].num + 1 >= this.data.goodsDetail.goods_number) {
        wx.showToast({
          title: '已经超过商品库存!',
          icon: "error"
        })
      } else {
        cart[index].num += 1
        wx.showToast({
          title: '成功加入购物车了',
          mask: true
        })
      }
    }
    wx.setStorageSync('cart', cart)
  },
  // 收藏
  handleCollect: function () {
    const Collect = wx.getStorageSync('Collect') || [];
    const index = Collect.findIndex(v => v.goods_id === this.data.goodsDetail.goods_id)
    if (index === -1) {
      Collect.push(this.data.goodsDetail)
      this.setData({
        isCollect: true
      })
      wx.showToast({
        title: '收藏成功',
        mask: true
      })
    } else {
      Collect.splice(index, 1)
      this.setData({
        isCollect: false
      })
      wx.showToast({
        title: '取消收藏',
        mask: true
      })
    }
    wx.setStorageSync('Collect', Collect)
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