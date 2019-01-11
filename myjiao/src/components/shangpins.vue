<template>
  <div class="hello">
    <header>
      <div class="ckuang">
        <h2>商城</h2>
        <div class="csousuo">
          <input type="search" v-model="ipt"/>
          <ul class="csso">
            <li v-for="item in list" :key="item.id">{{item}}</li>
          </ul>
          
        
        </div>
         <router-link to="/gouwuche" tag="span" class="iconfont icon-gouwucheman"></router-link>
      </div>
    </header>
    <footer>
      <div class="clunbo">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="cone"><img v-if="str[2]" :src="'http://101.132.188.237:8080/Airdb'+str[3].goodsImg" alt=""></mt-swipe-item>
          <mt-swipe-item class="ctwo"><img v-if="str[4]" :src="'http://101.132.188.237:8080/Airdb'+str[4].goodsImg" alt=""></mt-swipe-item>
          <mt-swipe-item class="cserry"><img v-if="str[5]" :src="'http://101.132.188.237:8080/Airdb'+str[5].goodsImg" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <div>
        <ul class="cfen">
          <li class="cfenlei" v-for="item in arr" :key="item.id" ><router-link :to="'/fenlei/'+item.gtId" tag="span">{{item.gtName}}</router-link></li>
        </ul>
        <div class="chantu" >
          
            <img v-if="str[0]" :src="'http://101.132.188.237:8080/Airdb'+str[0].goodsImg" alt="">
           
          
        </div>
        <ul>
          <router-link :to="'/xiangqingye2/'+item.goodsId" tag="li" v-for="item in str"  :key="item.id">
            <h2>{{item.goodsModel}}</h2>
            <p>{{item.goodsStyle}}</p>
            <p>￥{{item.goodsPrice}}</p>
          </router-link>
        </ul>
      </div>
    </footer>
  </div>
</template>


<script>
import axios from 'axios';
let sources=[];
export default {
  name: 'shangpins',
  data () {
    return {
    	tit:'商城首页' ,//控制的是头部标题
      arr:[],
      str:[],
      value:"",
      ipt:'',
      too:[],
    }
  },
  methods: {
    shujv(){

    }
  },
  
  mounted() {
    //console.log(this.str)
    this.$emit('toparent',this.tit)
    var _this=this;
    axios({
      method:'get',
      url:'http://101.132.188.237:8080/Airdb/GoodsTypeAll.do'
    }).then((data)=>{
      console.log(data.data.data)
      _this.arr=data.data.data
      
      
    })
    axios({
      method:'get',
      url:'http://101.132.188.237:8080/Airdb/selectAllGoods.do'
    }).then((data)=>{
      console.log(data.data.data)
      _this.str=data.data.data
      
    })
   
  },
  computed: {
    list(){
      
      let arr1=[];
      var _this=this;
      if(this.ipt!=''){
      this.str.map(function(item){
        if(item.goodsName.indexOf(_this.ipt)!=-1){
          arr1.push(item.goodsName)
        }
      })
      return arr1;
      }else{
        return arr1;
      }
    }
  },
  
}
</script>


<style scoped>
ul,li{
	list-style:none;
}
.hello{
	
  height: 100vh;
  display: flex;
  flex-direction: column;
 
}
header{
  height:52px;
 
 
}
.iconfont{
  font-size: 32px;
}
.ckuang{
  display: flex;
  height: 52px;
  background:#d9d9d9;
}

footer{
  overflow: scroll;
  flex: 1;
}
.csousuo{
  width: 67%;
}
.csousuo input{
      margin: 18px 0 0 30px;
          height: 49%;
    border-radius: 5px;
}
.ckuang h2,.ckuang span{
  line-height: 52px;
}
.clunbo{
  height: 160px;
  background: brown
}
.clunbo img{
  width: 100%;
  height: 100%;
}
.cfen{
  display: flex;
   justify-content:space-between;
   flex-wrap: wrap;
}
.cfenlei{
  width: 24%;
  height: 92px;
  
   
  border: 1px solid #bc8f8f;
}
.chantu{
  height: 150px;
  background: chartreuse;
}
.chantu img{
  width: 100%;
  height: 100%;
}
.cfenlei span{
  display: block;
    width: 100%;
    height: 100%;
}
.csso{
    position: fixed;
    width: 48%;
    left: 77px;
    z-index: 1;
    background: white;
}
</style>
