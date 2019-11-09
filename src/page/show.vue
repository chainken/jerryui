<template>
	<div class="show">
		<minibar title="氢弹"></minibar>
       <video class="" autoplay="" playsinline="true" webkit-playsinline="true" x5-playsinline="true" tabindex="2" mediatype="video" src="blob:https://live.ixigua.com/9e7c543a-6d84-48ca-8811-a463badf8ffd"></video>
	</div>
</template>

<script>
	import minibar from "@/components/minibar"
	export default{
		name:"show",
		data:function(){
			return {}
		},
		components:{
			minibar
		},mounted:function(){
			
		}
	}
</script>

<style>
	.show{
		   background: white;
           width:100%;
		   height:100%;
		   position: relative;
		   z-index:2;
	}
	video{
		width:100%;
	}
</style>
