Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeStatus: {
      // type是必填字段,表示属性的类型
      type: Boolean,
      // value是选填字段,表示属性的默认值
      value: false,
      // observer是选填字段
      observer: ()=> {}
    },
    count: {
      type: Number
      // Number类型value默认是0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    /* 定义变量count,数据绑定 */
    likePicUrl: 'images/like.png',
    disLikePicUrl: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event) {
      let like = this.properties.likeStatus;
      let count = this.properties.count;
      
      // this.setData({})指明要更新的变量
      this.setData({
        count: like?count-1:count+1,
        likeStatus: !like
      });
    }
  }
})