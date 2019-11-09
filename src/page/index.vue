<template>
	<div class="tab">
		<searchbar/>
		<tabpage/>
		<imglist/>
	</div>
	
</template>

<script>
	import searchbar from "@/components/searchbar"
	import tabpage from "@/components/tabpage"
	import imglist from "@/components/imglist"
	export default{
		name:"index",
		components:{
			searchbar,tabpage,imglist
		},beforeCreate:function(){
			this.$store.state.path="/index";
		}
	}
</script>

<style>

</style>
