//全局路由配置
import tabbarView from "./page/tabbarview.vue"
import VueRouter from "vue-router"
import Vue from 'vue'
import index from "@/page/index"
import fangying from "@/page/fangying"
import zhibo from "@/page/zhibo"
import mine from "@/page/mine"
import login from "@/page/login"
import show from "@/page/show"
import other from "@/page/other"

Vue.use(VueRouter);
var routes = [{
	path: "/",
	components: {
		default: tabbarView
	},
	children: [{
			path: "/index",
			component: index
		},
		{
			path: "/fangying",
			component: fangying
		},
		{
			path: "/zhibo",
			component: zhibo
		},
		{
			path: "/mine",
			component: mine
		}, {
			path: "/login",
			component: login
		}
	]
},{
	path:"/show",
	components:{
		show:show
	}
},{
	path:"/other",
	components:{
		show:other
	}
}];
var router = new VueRouter({
	routes
});
//tabbar配置
var bars = [{
		path: "/index",
		name: "首页",
		img: "https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png",
		imgd: "https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png"
	},
	{
		path: "/fangying",
		name: "课程",
		img: "https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",
		imgd: "https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png"
	},
	{
		path: "/zhibo",
		name: "动态",
		img: "https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png",
		imgd: "https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png"
	},
	{
		path: "/mine",
		name: "我的",
		img: "https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",
		imgd: "https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png"
	}
];
//按需导出
export {
	router,
	bars
}
