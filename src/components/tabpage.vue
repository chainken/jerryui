<template>
		<ul class="tabbar">
		<li @click="selecedBar=bar"  :class="{selected:selecedBar==bar,trans:open}"  v-for="bar in bars">
			<div>
			<!-- <img :src="bar.img" /> -->
			<span>{{bar.name}}</span>
			</div>
		</li>
	   </ul>
</template>

<script>
	 var bars = [{
			 		path: "/index",
			 		name: "首页",
			 		imgd: "https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png",
			 		img: "https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png"
			 	},
			 	{
			 		path: "/fangying",
			 		name: "放映厅",
			 		img: "https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",
			 		imgd: "https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png"
			 	},
			 	{
			 		path: "/zhibo",
			 		name: "直播",
			 		img: "https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png",
			 		imgd: "https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png"
			 	},
			 	{
			 		path: "/mine",
			 		name: "我的",
			 		img: "https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",
			 		imgd: "https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png"
			 	},
			 	{
			 		path: "/fangying",
			 		name: "放映厅",
			 	img: "https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",
			 	imgd: "https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png"
			 	},
			 	{
			 		path: "/zhibo",
			 		name: "直播",
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
	 export default{
		 name:"tabpage",
		 data:()=>{
			 return {open:false,selecedBar:bars[0],bars
			 
			 }
		 }
	 }
</script>

<style scoped>
	.tabbar {
		background: white;
		height: .6rem;
		font-size: 0.3rem;
		width: 100%;
		overflow-x: scroll;
		white-space: nowrap;
	}
	
	.tabbar li {
		height: 100%;
		width: 20%;
		display: inline-block;
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		
	}
	.tabbar li div{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.tabbar li img {
		width: 0.6rem;
	}
	
	.tabbar li.selected{
		font-weight:bold;
	}
	.tabbar li a{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width:100%;
		height:100%;
	}
</style>
