<template>
  <div class="hello">
     <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <router-link to="/pinbiao" tag="span">商品</router-link>
         <router-link to="/xiangqing" tag="span">详情</router-link>
         <router-link to="/pingjia" tag="span">评价</router-link>
     </header>
     <section>
         <router-view></router-view>
        
     </section>
     <footer>
        <div class="cche">
            <span class="iconfont icon-shoucang"></span>
            <span class="iconfont icon-gouwuche2"></span>
            <mt-button type="primary" @click="foo()">加入购物车</mt-button>
            
                 <van-sku
                v-model="showBase"
                :sku="sku"
                :goods="goods"
                :goods-id="goodsId"
                :hide-stock="sku.hide_stock"
                :quota="quota"
                :quota-used="quotaUsed"
                :custom-stepper-config="customStepperConfig"
                @buy-clicked="onBuyClicked"
                @add-cart="onAddCartClicked"
                /> 
               <mt-button @click="aaa()" type="danger" > 立即购买 </mt-button>

            
 
        </div>

     </footer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
    name:'xiangqingye',
    data() {
        return {
            
           goods:{},
            
            quota:'',
            quatoUsed:'',
            quotaUsed:'',
            showBase:'',
            puota:'6',
            quotaUsed:'6',
            quotaUsed:'6',
                 sku: {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: [
    {
      k: '颜色', // skuKeyName：规格类目名称
      v: [
        {
          id: '30349', // skuValueId：规格值 id
          name: 's', // skuValueName：规格值名称
          imgUrl: 'http://101.132.188.237:8080/Airdb/img/guabi.webp' // 规格类目图片，只有第一个规格类目可以定义图片
        },
        {
          id: '1215',
          name: 'm',
          imgUrl: 'https://img.yzcdn.cn/2.jpg'
        }
      ],
      k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: [
    {
      id: 3, // skuId，下单时后端需要
      price: 100, // 价格（单位分）
      s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
      s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
      s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      stock_num: 110 // 当前 sku 组合对应的库存
    }
  ],
  price: '11111', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false, // 是否无规格商品
  messages: [
    {
      // 商品留言
      datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
      multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
      name: '留言', // 留言名称
      type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
      required: '1' // 是否必填 '1' 表示必填
    }
  ],
  hide_stock: false // 是否隐藏剩余库存
},
goods: {
  // 商品标题
  title: '测试商品',
  // 默认商品 sku 缩略图
  picture: 'http://101.132.188.237:8080/Airdb/img/guabi.webp'
},
customStepperConfig: {
  // 自定义限购文案
  quotaText: '每次限购5件',
  // 自定义步进器超过限制时的回调
  handleOverLimit: (data) => {
    const { action, limitType, quota, quotaUsed } = data;

    if (action === 'minus') {
      Toast('至少选择一件商品');
    } else if (action === 'plus') {
      // const { LIMIT_TYPE } = Sku.skuConstants;
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        let msg = `单次限购${quota}件`;
        if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
        Toast(msg);
      } else {
        Toast('库存不够了');
      }
    }
  }
},
messageConfig: {
  // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
  uploadImg: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
    });
  },
  // 最大上传体积 (MB)
  uploadMaxSize: 3,
  // placehold配置
  placeholderMap: {
    text: 'xxx',
    tel: 'xxx',
    
  }
},
skuData: {
  // 商品 id
  goodsId: '3',
  // 留言信息
  messages: {
    message_0: '12',
    message_1: ''
  },
  // 另一种格式的留言，key 不同
  cartMessages: {
    '留言1': 'xxxx'
  },
  // 选择的商品数量
  selectedNum: 1,
  // 选择的 sku 组合
  selectedSkuComb: {
    id: 2257,
    price: 100,
    s1: '30349',
    s2: '1193',
    s3: '0',
    stock_num: 111
  }
}
            
        }
    },
    methods: {
        fanhui(){
            this.$router.go(-1)
        },
        foo(){
            var _this=this;
            
            //console.log(_this.$route.params.xq)
            axios({
      method:'get',
      url:'http://101.132.188.237:8080/Airdb/addCar.do',
      params:{carUid:33, carGcount:5,carGid:_this.$route.params.xq}
    }).then((data)=>{
      
    })
    
           alert('添加成功')
           this.$router.push({
                name:'gouwuche',
                path:'/gouwuche',
                query:{
                    sid:_this.$route.params.xq
                }
            })

        },
        aaa(){
            this.showBase="true"
            console.log(this.sku.skuData.selectedNum)
        },
        onBuyClicked(){
            //console.log(22)
             var _this=this;
        
        axios({
      method:'get',
      url:'http://101.132.188.237:8080/Airdb/SelectGoodsByGoodsId.do',
      params:{GoodsId:this.$route.params.xq}
    }).then((data)=>{
      console.log(data.data.data)
     
      _this.skuData.goodsId=data.data.data.goodsId
       //console.log( _this.sku.price)
    //   _this.sjz.push(data.data.data[_this.num])
    //   console.log(_this.sjz);
      
      
    })
        }
    },
    mounted() {
        var _this=this;
        //console.log(this.$route.params.xq)
        axios({
      method:'get',
      url:'http://101.132.188.237:8080/Airdb/SelectGoodsByGoodsId.do',
      params:{GoodsId:this.$route.params.xq}
    }).then((data)=>{
      console.log(data.data.data)
      _this.goods.picture="http://101.132.188.237:8080/Airdb/"+data.data.data.goodsImg
      _this.sku.price=data.data.data.goodsPrice
      //_this.skuData.goodsId=data.data.data.goodsId
       //console.log( _this.sku.price)
    //   _this.sjz.push(data.data.data[_this.num])
    //   console.log(_this.sjz);
      
      
    })
    },
    

}

</script>
<style scoped>
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;
 
}
header{
    height:6%;
    display:flex;
    justify-content:space-around;
    border: 1px solid #bbbbbb;
}
section{
    overflow-y: auto;
    flex: 1;
}
header span{
    
    line-height: 25px;
}

footer{
    background: red;
    height: 54px;
    
}
footer .iconfont{
    font-size: 47px;
}
.cche{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>