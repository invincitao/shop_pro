/* 1.使用Promise对wx.requestq请求方法进行封装
 * 2.通用请求URL
 * 3.加入遮罩信息
 */
// 保存基准路径
const BASE_URL = "https://106.55.254.112/api/public/v1";

const request = (params) => {
  return new Promise((reslove, reject) => {
    wx.request({
      // 结构出url
      ...params,
      url: BASE_URL + params.url,
      // 成功
      success: (res) => {
        reslove(res.data)
      },
      // 失败
      fail: (err) => {
        reject(err)
      },
      // 完成
      complete: () => {

      }
    })
  })
}
// 导出
module.exports = {
  request
}