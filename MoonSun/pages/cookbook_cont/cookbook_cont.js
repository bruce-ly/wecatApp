// pages/cookbook_cont/cookbook_cont.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cont: null,
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://way.jd.com/jisuapi/search',
      data: {
        keyword: options.name,
        num: 1,
        appkey: '6152b4a63f878576d65e83dbf68ff5d4'
      },
      success: function (req) {
        var cont = req.data.result.result.list[0];
        if (cont) {
          that.setData({
            cont: cont,
            content: cont.content.replace(/<br\s\/>/g, '\n')
          });
        } else {
          console.log('没有找到···');
        }
      }
    });
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