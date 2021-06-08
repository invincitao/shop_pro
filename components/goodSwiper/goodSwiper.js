// components/goodSwiper/goodSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pics: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePreview: function (e) {
      console.log(e);
      const current = e.target.dataset.current
      const pics = e.target.dataset.pics
      wx.previewImage({
        current: current,
        urls: pics.map(v => v.pics_big_url),
      })
    }
  }
})