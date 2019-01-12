<template>
	<div class="a-home">
		<div class="a-home-1">
			<span @click="map()">设备</span>
			<span @click="pap()">场景</span>
		</div>
		
		<img src="../assets/imgs/a-shouye1.jpg" alt="" />
		<h1 class="a-t">您还没有添加设备</h1>
		<p  class="a-p" @click="tap()"><i class="iconfont icon-chucuo"></i><span >添加设备</span></p>
		
		<footer><h1>详情</h1></footer>
		
		<ul>
          <router-link :to="'/kongzhi/'+item.goodsId" tag="li" v-for="item in str"  :key="item.id">
            <h2>{{item.goodsModel}}</h2>
            <p>{{item.goodsStyle}}</p>
            <p>￥{{item.goodsPrice}}</p>
          </router-link>
        </ul>
        
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:"Home",
		data(){
			return{
				detail:"",
				str:[],
			}
		},
		methods:{
			map(){
				this.$router.push('/Set')
			},
			pap(){
				this.$router.push('/changjing')
			},
			tap(){
				this.$router.push('/Set')
			},
			
		},
		mounted(){
			this.$emit('toparent',this.tit)
			
			var _this=this;
//			axios({
//		      method:'get',
//		      url:'http://101.132.188.237:8080/Airdb/selectAllGoods.do'
//		    }).then((data)=>{
//		      console.log(data.data.data)
//		      _this.str=data.data.data
//		      
//		    })
		    
		    
					axios({
			method:'get',
			url:"http://101.132.188.237:8080/Airdb/getUserId.do",
			  //name、password是接口参数,跟后台相连
		}).then(function(data){
			console.log(data)	
			} )
			
		}
	}
</script>

<style>
	.a-home{
		color: #000000;
	
	}
	.a-home-1{
		width: 100vw;
		height: 50px;
		background: pink;
		text-align: center;
		line-height: 50px;
	}
.a-home-1 span{
	margin: 0 20px;
	font-size:20px;
}	
	img{
		width: 100vw;
		height: 40vh;
	}
	.a-t{
		font-size: 24px;
		text-align: center;
	}
	.a-p{
		font-size: 14px;
		margin-top:10px;
		height: 30px;
		display: flex;
		
	}
	
	.a-p i{
		display: block;
		transform:rotate(45deg);
		font-size: 30px;
		margin:0 10px 0 120px;
	}
	.a-p span{
		float: left;
		line-height:30px ;	
	}
</style>