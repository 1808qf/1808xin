<template>
  <div class="register">
    
    <header>
    	<span @click="map()">登陆&nbsp;/</span>
    	<span @click="pap()">注册</span>
    </header>
    <section>
    	<div class="a-reg">注册</div>
    	<div id="dl">
			    	<input type="text" id="txt1" placeholder="请输入用户名" v-model="users"/>
			    	<input type="text" id="txt2" placeholder="请输入密码" v-model="pass"/>
			    	<input type="text" id="txt3" placeholder="请输入手机号" v-model="phonenum"/>
			    	<input type="text" id="txt4" placeholder="请输入手机验证码" v-model="yzm"/>
			    	<input type="text" id="txt5" @click="send()" placeholder="获取验证码" />
			    	<input type="button"  id="btn" @click="register()" value="注册" />
    	</div>
    </section>
   <h1></h1>
  </div>
</template>

<script>
	import axios from 'axios';
export default {
  name: 'register',
  data () {
    return {
     users:'',
     pass:'',
     phonenum:'',
     yzm:'',
      
    }
  },
  
  methods:{
  	map(){
				this.$router.push('/login')
			},
		pap(){
				this.$router.push('/register')
		},
  	send(){
  		var _this=this;
  		axios({
  			method:'get',
  			url:"http://101.132.188.237:8080/Airdb/GetMessage.do",
  			params:{phone:_this.phonenum,id:'1'}   
  		}).then(function(data){
  			console.log(data.data)
  		} )
  		
  	},
  	register(){
  		var _this=this;
  		console.log(_this.users,_this.pass)
		axios({
			method:'get',
			url:"http://101.132.188.237:8080/Airdb/addUser.do",
			params:{name:_this.users,password:_this.pass,yzm:_this.yzm,id:'2'}  //name、password是接口参数,跟后台相连
		}).then(function(data){
			console.log(data)
			var code=data.data.code
			if(code==1){
			alert('注册成功')
				location.href="/#/login"
			}else{
				alert("注册失败")
			}
		} )
  	},
  },
}
</script>


<style scoped>
 .hello{
 	height: 100vh;
 	width: 100vm;
 	display: flex;
 	flex-direction: column;
 	color:#fff;
 }
 
 header{
 	height: 50px;
 	background: green;
 	text-align: center;
 	line-height: 50px;
 	font-size:34px;
 	
 }
 section{
 	flex: 1;
 }
section .a-reg{
	width:124px;
	height:124px;
	margin:50px auto;
	background: pink;
	flex-direction: column;
	text-align: center;
 	line-height: 124px;
 	border-radius: 50%;
 	font-size:30px;
	
}
#dl{
	width: 100vw;
	text-align: center;
}
input{
	width: 78vw;
	height: 48px;
	margin: 10px auto;
	text-align: center;
}
#dl #txt4{
	width: 52vw;
	height: 48px;
}
#dl #txt5{
	width: 25vw;
	height: 48px;
	background: #EFEFEF;
	border: 1px solid #ccc
}
#btn{
	width: 40vw;
	height: 58px;
	font-size: 20px;
	margin-top:40px;
	
}


</style>
