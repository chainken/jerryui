<template>
	<ul class="list">
		<li  v-for="d in data"><span>{{d.name}}</span><img @click="dowith(d.fun)" src="@/assets/right.svg"/></li>
	</ul>
</template>

<script>
	export default{
		name:"list",
		props:["data"],
		methods:{
			dowith:function(fun){
				fun(this);
			}
		}
	}
</script>

<style>
	.list li{
		background: white;
		font-size: .4rem;
		height:50px;
		line-height: 50px;
		padding:0px 16px;
		border-bottom: 1px solid #ddd;
	}
	.list li img{
		width:15px;
		height:15px;
		float: right;
		position: relative;
		top:50%;
		transform: translateY(-50%);
	}
</style>
