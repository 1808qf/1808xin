<template>
  <div class="hello">
      <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>购物车</h3>
     </header>
     <section>
         <ul>
             <li>产品</li>
             <li>价格</li>
             <li><button>+</button><span>0</span><button>-</button></li>
         </ul>
     </section>
     <footer>
         <button>结算</button>
     </footer>
  </div>
</template>

<script>
export default {
    name:'gouwuche',
    methods: {
        fanhui(){
            this.$router.go(-1)
        }
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