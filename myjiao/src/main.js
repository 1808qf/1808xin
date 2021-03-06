// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/font/iconfont.css"
import Vant from 'vant';
import 'vant/lib/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from  './store'


Vue.use(MintUI);
Vue.config.productionTip = false
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  
})









