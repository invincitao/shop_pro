// components/myTabs/myTabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    activeTab: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // activeTab: "all"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap: function (e) {
      // console.log(e.target.dataset.target);
      const target = e.target.dataset.target
      // this.setData({
      //   activeTab: target
      // })
      this.triggerEvent("mytab", target)
    }
  }
})