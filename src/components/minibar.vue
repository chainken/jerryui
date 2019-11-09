<template>
	<div class="minibar">
		<img @click="go()" src="@/assets/right.svg"/>
		<span>{{title}}</span>
	</div>
</template>

<script>
	export default {
		name: "minibar",
		props:["title"],
		methods:{
			go:function(){
				//this.$store.state.show=false;
				this.$router.go(-1);
			
			}
		}
	}
</script>

<style>
	.minibar {
		height: 49.68px;
		background-color: rgb(255, 201, 0);
		text-align: center;
		font-size: 16.56px;
		color: white;
		line-height: 49.68px;
		position: relative;
	}
	.minibar img{
		width:15px;
		height:15px;
		transform: rotateY(180deg) translateY(-50%);
		position: absolute;
		left:20px;
		top:50%;
		
	}
</style>
