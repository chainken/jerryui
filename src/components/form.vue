<template>
	<div class="container">
		<ul class="form">
			<li>
				<span>用户名</span>
				<input v-model="ob.username" placeholder="用户名" />
			</li>
			<li>
				<span>密码</span>
				<input v-model="ob.password" placeholder="密码" />
			</li>
		</ul>
		<div class="button">
		<button @click="$emit(method,ob)">确认</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"jform",
		props:['method'],
		data:()=>{
			return {ob:{username:"",password:""}}
		}
	}
</script>

<style>
	.form li{
		height:24px;
		line-height: 24px;
		padding:13px 15px;
		background: white;
	    display: flex;
		align-items: center;
		font-size: 14px;
		color: #444;
		margin-bottom: 1px;
	}
	.form li span{
		flex-grow:1;
		display: inline-block;
		width: 60px;
		height:100%;
	}
	.form  input{
		flex-grow:1.86;
		height:100%;
		outline: none;
		border: none;
		font-size: 14px;
	}
	.button{
		padding:10px;
	}
	button{
		height:34px;
		width:100%;
		background: rgb(255, 201, 0);
		border-color: transparent;
		color: white;
		border-radius: 3px;
		outline: none;
	}
</style>
