<template>
<div>
    <div class="clunbo">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="cone"><img src="./assets/vue1.jpg"/></mt-swipe-item>
          <mt-swipe-item class="ctwo"><img src="./assets/vue2.jpg"/></mt-swipe-item>
          <mt-swipe-item class="cserry"><img src="./assets/vue3.jpg"/></mt-swipe-item>
        </mt-swipe>

      </div>
      <ul class="cjieshao" v-for="(item,i) in sjz" :key="i">
          
          <li>特点</li>
          <li>{{item.goodsStyle}}</li>
          <li>{{item.goodsPrice}}<span>库存{{item.goodsSales}}</span></li>
      </ul>
      <ul class="cfuwu">
          <li>服务</li>
          <li>厂家认证</li>
          <li>全国联保</li>
          <li>全国包邮</li>
          <li>&gt;</li>
      </ul>
      <ul class="cyixuan">
          <li>已选</li>
          <li>太阳花一剑</li>
          <li>&gt;</li>
      </ul>
       <div class="cpeisong">
            <h3>配送至</h3>
            <ul >
                <li>杭州市至<span>&gt;</span></li>
                <li>杭州市工业区</li>
                <li>17:00之前付款预计23号送达</li>
            </ul>
             
        </div>
       <div>
           
       </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    
    name:'xiangqing2',
    data() {
        return {
            sjz:[],
            num:"",
            numo:'',
            
        }
    },
    mounted() {
        //console.log(shu)
        this.num=this.$route.params.xq-2
        this.numo=this.$route.params.xq+2
        //console.log(this.num)
        var _this=this
        //console.log(this.$route.params.xq)
        
        axios({
      method:'get',
      url:'http://101.132.188.237:8080/Airdb/selectAllGoods.do'
    }).then((data)=>{
     // console.log(data.data.data)
      
      _this.sjz.push(data.data.data[_this.num])
      //console.log(_this.sjz);
      
      
    })
      axios({
      method:'get',
      url:'http://101.132.188.237:8080/Airdb/SelectGoodsByGoodsId.do',
      params:{GoodsId:this.numo}
    }).then((data)=>{
      console.log(data.data.data)
      
    //   _this.sjz.push(data.data.data[_this.num])
    //   console.log(_this.sjz);
      
      
    })
    
    },
    
}

</script>
<style>
	ul,li{
		list-style: none;
	}
.clunbo{
  height: 160px;
  background: brown
}
.clunbo img{
  width: 100%;
  height: 100%;
}
.cjieshao{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 125px;
}
.cjieshao li{
    margin: 0 15px;
}
.cjieshao li~li{
    color: #ff9900;
}
.cjieshao li:last-child{
    font-size: 20px;
}
.cjieshao span{
    font-size: 14px;
    color: #999999;
    float: right;
}
.cfuwu,.cyixuan{
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #e2e2e2;
    border-bottom: 2px solid #e2e2e2;
}
.cyixuan{
    
    margin-top: 20px;
}
.cpeisong{
     border: 1px solid #e2e2e2;
}
.cpeisong h3{
    width: 20%;
    float: left;
    height: 60px;
    line-height: 60px;
}
</style>