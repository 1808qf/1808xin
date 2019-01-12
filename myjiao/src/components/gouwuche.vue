<template>
  <div class="hello">
      <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>购物车</h3>
     </header>
     <section>
         <van-card
            num="2"
            tag="标签"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            :thumb="imageURL"
            origin-price="10.00"
            >
            <div slot="footer">
                <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button>
            </div>
</van-card>
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
export default {
    name:'gouwuche',
    data() {
        return {
            imageURL:'',
            checked:'',
            onSubmit1:'',
        }
    },
    methods: {
        fanhui(){
            this.$router.go(-1)
        },
        onSubmit(){
            console.log('提交完成')
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