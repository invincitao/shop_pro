// components/productList/productList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productList: {
      type: Array,
      value: []
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
    handleTap: function (e) {
      const v = e.target.dataset.v
      const query = v.navigator_url.split('?')[1];
      console.log(query);
      wx.navigateTo({
        url: '/pages/goodList/goodList?' + query,
      })
    }
  }
})