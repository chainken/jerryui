<template>
	<div class="container">
		<minibar  title="登录"></minibar>
		<jform method="login" v-on:login="login($event)">
			
		</jform>
	</div>


</template>

<script>
	import minibar from "@/components/minibar"
	import jform from "@/components/form"
	export default {
		name:"login",
		data:()=>{
			return {user:null}
		},
		methods:{
			login:function(user){
				this.user = user;
				if(this.user.username=="admin"&&this.user.password=="666"){
					this.$store.state.user.username = "admin";
					this.$router.push(this.$store.state.path);
				}
			}
		},components:{
			minibar,jform
		}
	}
</script>

<style scoped>
	.container{
		height:100vh;
		background: #f3f4f5;
	}
	 
   
</style>
