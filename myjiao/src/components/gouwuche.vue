<template>
  <div class="hello">
      <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>购物车</h3>
     </header>
     <section>
         <ul>
             <li v-for="item in soot" :key="item.id">
                <van-card
                    num="2"
                    tag="标签"
                    :price=item.goodsPrice
                    :desc=item.goodsStyle 
                    :title=item.goodsName
                    :thumb="imageURL"
                    origin-price="10.00"
                    >
                    <div slot="footer">
                        <van-button size="mini">+</van-button>
                        <van-button size="mini">-</van-button>
                    </div>
                </van-card>
            </li>
        </ul>
     </section>
     <footer>
        <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
        >
        <van-checkbox v-model="checked">全选</van-checkbox>
        <span slot="tip">
            你的收货地址不支持同城送, <span>修改地址</span>
        </span>
        </van-submit-bar>
     </footer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'gouwuche',
    data() {
        return {
            imageURL:'',
            checked:'',
            onSubmit1:'',
            id:'',
            sid:'',
            gc:'',
            to:[],
            soot:[],
        }
    },
    methods: {
        fanhui(){
            this.$router.go(-1)
        },
         onSubmit(){
        alert('提交完成')
        
         }
    },
    mounted() {
        var _this=this;
        //console.log(this.$route.query.sid)
        axios({
      method:'get',
      url:'http://101.132.188.237:8080/Airdb/getAllCar.do',
      params:{carUid:33}
    }).then((data)=>{
        var srr=[];
        for(var i=0;i<data.data.data.length;i++){
            if(srr.indexOf(data.data.data[i].carGid)==-1){
                srr.push(data.data.data[i].carGid)
            }
        }
        _this.gc=srr
        console.log(_this.gc)
      //_this.id=data.data.data.carGid
      
      
      
      
    })
   
   
     axios({
        
      method:'get',
      url:'http://101.132.188.237:8080/Airdb/selectAllGoods.do',
      
    }).then((data)=>{
       
    //   console.log(data.data.data)
      _this.to=data.data.data
      //console.log(_this.to)
      var soo=[]
      for(var i=0;i<data.data.data.length;i++){
            if(_this.gc.indexOf(data.data.data[i].goodsId)!=-1){
                soo.push(data.data.data[i])
            }
        }
        _this.soot=soo
        console.log(_this.soot)
      
    })
    
    
    },
    
}

</script>
<style>
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;
 
}
header{
    display:flex;
    
    border: 1px solid #bbbbbb;
}
header h3{
    width: 88%;
    text-align:center;
    line-height: 37px;
}
header span{
    margin: 10px;
}
section{
    overflow: auto;
    flex:1;

}
</style>