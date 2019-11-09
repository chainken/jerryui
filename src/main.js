import Vue from 'vue'
import App from './page/App.vue'
import {router} from "./config.js"
//记录用户状态
var ob ={username:null};
import Vuex  from "vuex"
Vue.config.productionTip = false
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{user: {
    username:null
  },path:"/index",show:false}
})
new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')
