<template>
	
	<ul class="tabbar">
	     
		<li @click="selecedBar=bar"  :class="{selected:selecedBar==bar,trans:open}"  v-for="bar in bars">
			<router-link :to="bar.path"><img :src="bar.img" />
			<span>{{bar.name}}</span></router-link>
		</li>
	
	</ul>
	
</template>

<script>
	import {bars} from "@/config.js"
	export default {
		name: "tabbar",
		data: function() {
			return {
				selecedBar:bars[0],
				bars: bars,
				open:false,
			}
		},
		methods:{
			//换图片
			change:function(newValue){
				var ob = newValue.img;
				newValue.img =newValue.imgd;
				newValue.imgd = ob;
			},
		},
		watch:{
			selecedBar:function(newValue,oldValue){
			  this.change(oldValue);
			  this.change(newValue);
			  //向父组件传参
			  if(bars.indexOf(newValue)>bars.indexOf(oldValue))
			  this.$emit("changeDirection","slideleft")
			  else
			  this.$emit("changeDirection","slideright")
			  this.open = true;
			  window.setTimeout(()=>{
			  	this.open = false;
			  },800);
			}
		}
	}
</script>

<style scoped>
	/*ul特效*/
	@keyframes trans{
		0%{
			opacity:1;
		}
		50%{
			opacity: .5;
		}
		100%{
			opacity:1;
		}
	}
	li.trans img,li.trans span{
		animation: trans 0.8s ;
	}
	.tabbar {
		background: white;
		height: 1.6rem;
		font-size: 0.32rem;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
	}

	.tabbar li {
		height: 100%;
		width: 25%;
		float: left;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tabbar li img {
		width: 0.933333rem;
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
