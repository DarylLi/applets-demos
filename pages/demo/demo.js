//demo.js
// This is our App Service.
// This is our data.
var helloData = {
  name: 'WeChat'
}

// Register a Page.
Page({
  data: helloData,
  changeName: function (e) {
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  },
  onPageScroll:function(e){
  console.log("我在滚动")
  },
  onPullDownRefresh:function(){
    console.log("我在下拉")
  },
   onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
   onShareAppMessage: function () {
     return {
       title: '自定义转发标题',
       path: '/pages/demo/demo'
     }
   }
})