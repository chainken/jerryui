<template>
	<div class="searchbar">
		<div class="content">
			<img class="searchimg" :src="img"/>
			<input placeholder="搜索" />
		</div>
	</div>
</template>

<script>
	export default {
		name:"searchbar",
		data:()=>{
			return {img:require("@/assets/search.png")}
		}
	}
</script>

<style>
	.searchbar{
		height:42px;
		width:100%;
		background: white;
	}
	.searchbar .content{
		position: relative;
		top:50%;
		transform: translateY(-50%);
		width:95%;
		height:32px;
		margin:0 auto;
		background: rgb(229, 229, 229);
		border-radius: 3px;
		font-size: 0;
	}
	.searchbar .content .searchimg{
		padding:7.5px;
		width:15px;
		height:15px;
		vertical-align: middle;
	}
	.searchbar .content input{
		width:calc(100% - 30px);
		height:100%;
		outline: none;
		border:none;
		vertical-align: middle;
		background: rgb(229, 229, 229);
	}
</style>
