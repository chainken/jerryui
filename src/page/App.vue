<template>
	<div id="app">
		    <transition name="slideleft">
		    <router-view name="show"></router-view>
			</transition>
			<router-view />
	</div>
</template>

<script>
	import show from "@/page/show"
	export default {
		name: 'app',
		components: {
             show
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	html,
	body,
	#app {
		height: 100%;
	}

	html {
		font-size: 37.5px;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: black;
		-webkit-tap-highlight-color: transparent;
	}
	/*左滑*/
	.slideleft-enter-active,
	.slideleft-leave-active,
	.slideright-enter-active,
	.slideright-leave-active {
		transition: transform .2s;
	}
	
	.slideleft-enter {
		transform: translateX(100%);
	}
	
	.slideleft-leave-to {
		transform: translateX(-100%);
	}
	
	/*右滑*/
	
	.slideright-enter {
		transform: translateX(-100%);
	}
	
	.slideright-leave-to {
		transform: translateX(100%);
	}
	
	.container {
		height: calc(100vh - 1.6rem);
		background: white;
		overflow: hidden;
	}
	
	.tab {
		width: 100%;
		height: 100%;
	}
	
	.toTop-enter-active {
		transition: transform 1s;
	}
	
	.toTop-enter {
		transform: translateY(100%);
	}
</style>
