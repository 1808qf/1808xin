<template>
  <div class="register">
    
    <header>
    	<span @click="map()">登陆&nbsp;/</span>
    	<span @click="pap()">注册</span>
    </header>
    <section>
    	<div class="a-reg">登陆</div>
    	<div id="dl">
			    	<input type="text" id="" placeholder="请输入用户名" v-model="users"/>
			    	<input type="text" id="" placeholder="请输入密码" v-model="pass"/>
			    	<input type="button" id="btn" value="登陆" @click="login()"/>
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
    token:""
    }
  },
  methods:{
  	map(){
				this.$router.push('/login')
			},
		pap(){
				this.$router.push('/register')
		},
		login(){
  		var _this=this;
  		console.log(_this.users,_this.pass)
			axios({
				method:'get',
				url:"http://101.132.188.237:8080/Airdb/userlogin.do",
				params:{name:_this.users,password:_this.pass}  //name、password是接口参数,跟后台相连
			}).then(function(data){
				console.log(data)
				var code=data.data.code
				console.log(code)
				if(code==0){
					alert('登陆失败，请重新登陆')
					
				}else{
					alert('登陆成功，进入首页')
					//this.$store.common("cun",_this.token)
					//console.log(this.$store.store.token)
					// location.href="/cayxm/home"
					this.$router.push("/home")
				}
			} )

  	},
  }
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
	height: 52px;
	margin: 10px auto;
	text-align: center;
}

#btn{
	width: 30vw;
	height: 58px;
	font-size: 20px;
	margin-top:40px;
}


</style>
