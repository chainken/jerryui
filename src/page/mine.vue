<template>
	<div class="tab">
		<section>
			<list :data="data1"></list>
		</section>
		<section>
			<list :data="data2"></list>
		</section>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	import list from "@/components/list"
	export default {
		name: "mine",
		data: () => {
			return {
				data1: [{
					name: "我的收藏"
				}, {
					name: "我的喜欢"
				}, {
					name: "历史记录"
				}],
				data2: [{
					name: "我的账户"
				}, {
					name: "设置"
				}, {
					name: "退出",
					fun:function(that){
						that.$store.state.user.username=null;
						//that.$store.state.path=null;
						that.$router.push("/login");
					}
				}]
			}
		},
		components: {
			list
		},methods:{
			login:function(){
				this.$emit('changeDire','toTop');
				this.$router.push("/login");
			}
		},
		beforeCreate: function() {
		  this.$store.state.path="/mine";
		},created:function(){
			if(this.$store.state.user.username==null)
			this.login();
		}
	}
</script>

<style scoped>
	.tab {
		color:rgba(0,0,0,.6);
		background: #f3f4f5;
	}

	section {
		margin-bottom: 10px;
	}
</style>
