<template>	
	<div class="a-set">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>添加设备</p>
			<div class="a-ss">
				<img src="../assets/imgs/a-erwei.jpg"/>
				<span class="a-sm">扫描家电二维码</span>
			</div>
			
		</header>
		<form >
		    <i class="iconfont icon-sousuo"></i>
			<input type="text" name="" id="" placeholder="请输入家电型号" />
		</form>
		<section>
			<h1>{{detail}}</h1>
			<ul class="a-u">

				

				<li  v-for="(item,i) in list" :key="i">
				<router-link :to="'/MyDevice/'+i">
					<img :src="'http://101.132.188.237:8080/Airdb'+ item.goodsImg"/>
					<!--<p>{{'http://101.132.188.237:8080/Airdb'+item.goodsName}}</p>-->
					<!--<p>{{item.goodsName}}</p>-->
					
				</router-link>
				</li>

			</ul>
			
			
		</section>
	</div>
</template>

<script>
    import axios from 'axios';
	export default{
		name:'Detail',
		data(){
			return{
				detail:"",
				list:[],
			}
		},
		mounted(){
			var _this=this;
			axios({
				method:'get',
				url:"http://101.132.188.237:8080/Airdb/selectAllGoods.do",
				params:{ }  
			}).then((data)=>{
			
			    _this.list=data.data.data
			    console.log(_this.list);
			})
			axios({
			method:'get',
			url:"http://101.132.188.237:8080/Airdb/getUserId.do",
			  //name、password是接口参数,跟后台相连
		}).then(function(data){
			console.log(data)	
			} )
			
		},
		
		
		methods:{
			tap(){
				this.$router.go(-1)  //返回上一层路径，也可以/home，就是返回home路径
			 },
//			 map(){
//           javascript:if(confirm('是否要添加?'))location.href='home';
//             
//			 },

		},
		
		
		
		
		
	}
</script>
 
<style>
.a-set{
 	height: 100vh;
 	display: flex;
 	flex-direction: column;
 }
 header{
 	width: 100vw;
 	height: 200px;
 	background:#494949;
 }
 header p{
 	height: 50px;
 	line-height: 50px;
 	text-align: center;
 	font-size: 30px;
 	color:#fff;
 	margin: 10px ;
 }
 header .a-ss{
 	width: 230px;
 	height:60px;
 	border: 1px solid #ccc;	
 	margin: 40px auto;
 	text-align: center;
 	line-height: 60px;
 	border-radius: 60px;
 }
header .a-ss img{
	width: 24px;
	height: 24px;

	
} 
header .a-ss span{
	margin-left: 20px;
	color:#fff;
} 
 header .fanhui{
 	color: #fff;
 	position: absolute;
    left: 20px;
 }
 
 form{
 	width:100vw;
 	background:#F2F2F2 ;
 	text-align: center;
 	line-height: 40px;
 	margin:30px auto ;
 	border-radius:40px ;
 	overflow:hidden;
 }
 form .icon-sousuo{
 	color:#ccc;
 	font-size:30px;
 	
 }
 form input{
 	margin-left:20px;
 	height: 30px;
 	border: 0;
 	background:#F2F2F2 ;
 	font-size:14px;
 }
 section{
 	flex: 1;
 	overflow-y:auto;
 }
 section .a-u{
 	width:100vw;
 	display: flex;
 	flex-wrap: wrap;	
 }
section .a-u li{
	width: 32.7vw;
	height: 100px;
	border: 1px solid #ccc;
	list-style: none;
}
 section .a-u li img{
    width: 32.7vw;
	height: 100px;
	}
</style>