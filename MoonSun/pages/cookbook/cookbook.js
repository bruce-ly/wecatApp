// pages/cookbook/cookbook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '白菜',
    inputShowed: false,
    list: null,
    time: null
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: '',
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ''
    });
  },
  inputTyping: function (e) {
    var that = this;
    clearTimeout(this.data.time);
    this.setData({
      inputVal: e.detail.value,
      time: setTimeout(function () {
        fnGetList.call(that);
      }, 1000)
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fnGetList.call(this);
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
});

function fnGetList() {
  var that = this;
  wx.request({
    url: 'https://way.jd.com/jisuapi/search',
    data: {
      keyword: that.data.inputVal,
      num: 20,
      appkey: '6152b4a63f878576d65e83dbf68ff5d4'
    },
    success: function (req) {
      if (req.data.result.result.list) {
        that.setData({
          list: req.data.result.result.list
        });
      } else {
        console.log('没有找到···');
      }
    }
  });
}