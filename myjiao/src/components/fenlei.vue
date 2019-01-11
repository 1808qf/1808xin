<template>
  <div class="hello">
     <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>商品分类</h3>
         <span class="iconfont icon-sousuo"></span>
     </header>
     <section>
         <div class="cleft">
             <dl v-for="item in fenlei" :key="item.id">
                 <dt><span class="iconfont icon-31dianpu"></span></dt>
                 <dd>{{item}}</dd>
             </dl>
         </div>
         <div class="cright">
             <div>
                 <p>热门分类</p>
                 <ul>
                     <li v-for="item in re" :key="item.id"><router-link to="/xiangqingye" tag="span">{{item.gtName}}</router-link></li>
                 </ul>
                 <p>热门单品</p>
                 <div class="cdan" v-for="(item,i) in xinghao" :key="i">
                     <h2><img :src="'http://10.8.155.42:8080/Airdb'+item.goodsImg" alt=""></h2>
                     <div class="cxinghao">
                     <p>型号</p>
                     <p>{{item.goodsName}}</p>
                     <p>价格</p>
                     <p>{{item.goodsPrice}}</p>
                     </div>
                 </div>
             </div>
         </div>
     </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
    name:'fenlei',
    data() {
        return {
            re:[],
            xinghao:[]
            ,fenlei:['空调','手机','锅','空调','空调',],
            sso:'',
        }
    },
    methods: {
        fanhui(){
            this.$router.go(-1)
        }
    },
    mounted() {
        this.sso=Number(this.$route.params.gtid)+5
        //console.log()
         var _this=this;
         
    axios({
      method:'get',
      url:'http://10.8.155.42:8080/Airdb/GoodsTypeAll.do'
    }).then((data)=>{
      //console.log(data.data.data)
      _this.re=data.data.data
    })
     axios({
      method:'get',
      url:'http://10.8.155.42:8080/Airdb/HotGoodsByTypeId.do',
      //params:{TypeId:this.$route.params.gtid+5}
      params:{TypeId:this.sso}
    }).then((data)=>{
      console.log(data.data.data)
      _this.xinghao=data.data.data
      
      
    })
    },

}

</script>
<style scoped>
li{
    list-style: none;
}
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;
 
}
header{
    display:flex;
    justify-content: space-between;
    border: 1px solid #bbbbbb;
}
section{
    display:flex;
    justify-content: space-between;
    border: 1px solid #bbbbbb;
}
header h3{
    width: 40%;
    text-align:center;
    line-height: 37px;
}
header span{
    margin: 10px;
}
section{
    overflow-y: auto;
    flex: 1;
}
.cleft{
    position: fixed;
    width: 25%;
    height: 100%;
    background: #eaeaea;
}
.cleft dt,.cleft dd{
    text-align: center;
}
.cright{
    margin-left: 25%;
    width: 75%
   
}
.cright ul{
    display: flex;
    flex-wrap: wrap;
}
.cright li{
    width: 32.5%;
    height:92px ;
    border:1px solid #e2e2e2;
}
.cdan{
   display: flex;

}
.cdan h2{
    width:30%;
}
.cdan img{
    width: 100%;
    height: 100%;
}
.cxinghao{
    width: 70%;
}
</style>