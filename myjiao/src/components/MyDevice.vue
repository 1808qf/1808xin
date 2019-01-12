<template>
	<div class="MyShop">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>我的设备<i class="iconfont icon-jia1"></i></p>	
		</header>
		
		
		
		
 <router-link to='/kongzhi'>
 	<p>{{this.goodname}}</p>
 	<img :src="'http://101.132.188.237:8080/Airdb'+img"/>
 	<p>{{this.styley}}</p>
    
 
 </router-link>
	
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'Detail',
		data(){
			return{
				detail:"",
				img:"",
				goodname:'',
				styley:'',
				
				
			}
		},
		methods:{
			tap(){
				this.$router.go(-1)  //返回上一层路径，也可以/home，就是返回home路径
			}
		},
		mounted(){
			var _this=this;
			axios({
		      method:'get',
		      url:'http://101.132.188.237:8080/Airdb/selectAllGoods.do'
		    }).then((data)=>{
		     
		     _this.str=data.data.data
		     _this.img=data.data.data[_this.$route.params.id].goodsImg;
		     _this.goodname=data.data.data[_this.$route.params.id].goodsName;
		     _this.styley=data.data.data[_this.$route.params.id].goodsStyle;
		     
		      
		      
		       console.log(_this.img)
		       console.log( _this.str)
		       console.log( _this.goodname)
		       console.log(_this.styley)
		       
		       
		      
		    })
		}
	}
</script>

<style>
header{
 	height: 50px;
 	border:1px solid #666;
 	color:#666;	
 }
 header p{
 	line-height: 50px;
 	text-align: center;
 	font-size: 20px;	
 }
 
 header .fanhui{
 	position: absolute;
    left: 20px;
 } 
header .icon-jia1{
	float: right;
	margin-right: 20px;
}





</style>