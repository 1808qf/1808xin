<template>
<div class="a-kongzhi">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>挂式空调</p>	
		</header>
		
		<section>
			<div class="a-gua">{{wendu}}℃</div>
			<ul class="a-feng">
				<li>风速低</li>
				<li>风向上</li>
				<li>手动风向</li>
			</ul>
		</section>
		<footer>
			<div class="a-fo">
				<ul class="a-fo-u1">
					<li>开关</li>
					<li>模式</li>
				</ul>
				<ul class="a-fo-u2">
					<li>风速</li>
					<li>风向</li>
					<li>扫风</li>
					
				</ul>
				<ul class="a-fo-u3">
					<li @click="jia()"><i class="iconfont icon-jia1"></i></li>
					<li>温度</li>
					<li @click="jian()"><i class="iconfont icon-jian"></i></li>
					
				</ul>
				<ul class="a-fo-u4">
					<li>定时</li>
					<li>睡眠</li>
					<li>睡眠</li>	
				</ul>
			</div>
		</footer>
	</div>
</template>

<script>
   import axios from 'axios';
	export default{
		name:'Detail',
		data(){
			return{
				wendu:"0",
				
			}
		},
		methods:{
			tap(){
				this.$router.go(-1)  //返回上一层路径，也可以/home，就是返回home路径
			},
			jia(){
				var _this=this;
				/*axios({
					method:'get',
					url:"http://101.132.188.237:8080/Airdb//updateTem.do",
					params:{airTem:_this.wendu}  
				}).then((data)=>{  
				    console.log(data);
				})*/
				//console.log(this.wendu)
				_this.wendu++;
				
				
			},
			jian(){
				var _this=this;
				_this.wendu--;
				
			}
		},	
		
	}
</script>
 
<style>
.a-kongzhi{
 	height: 100vh;
 	display: flex;
 	flex-direction: column;
 }
 header{
 	height: 50px;
 	border:1px solid #666
 }
 header p{
 	line-height: 50px;
 	text-align: center;
 	font-size: 30px;	
 }
 
 header .fanhui{
 	position: absolute;
    left: 20px;
 } 
section .a-gua{
	width: 200px;
	height: 100px;
	background: pink;
	margin: 78px auto;
	text-align: center;
	line-height: 100px;
	font-size: 30px;
	border: 1px solid #666;
} 
section .a-feng{
	display: flex;
	justify-content: space-around;
	list-style: none;
	font-size:16px;
}
footer .a-fo{
	margin-top: 50px;
	border: 1px solid #666;
}
footer .a-fo-u1{
	display: flex;
	list-style: none;
	
}
footer .a-fo-u1 li{
	width: 100vw;
	height: 70px;
	text-align: center;
	line-height: 70px;
	font-size: 16px;
	border: 1px solid #666;
}
footer .a-fo-u2{
	display: flex;
	list-style: none;
}
footer .a-fo-u2 li{
	width: 100vw;
	height: 70px;
	text-align: center;
	line-height: 70px;
	font-size: 16px;
	border: 1px solid #666;
}
footer .a-fo-u3{
	display: flex;
	list-style: none;
}
footer .a-fo-u3 li{
	width: 100vw;
	height: 70px;
	text-align: center;
	line-height: 70px;
	font-size: 16px;
	
}
footer .a-fo-u4{
	display: flex;
	list-style: none;
}
footer .a-fo-u4 li{
	width: 100vw;
	height: 70px;
	text-align: center;
	line-height: 70px;
	font-size: 16px;
	border: 1px solid #666;
}

 .iconfont{
 	color:#333;
 }




</style>