<template>
	<div class="container">
       
		<transition :name="direction" v-on:after-enter="afterEnter">

			<router-view v-on:changeDire="direction=$event"></router-view>

		</transition>

		<tabbar v-on:changeDirection="direction=$event"></tabbar>
	</div>
</template>

<script>
	import tabbar from "@/components/tabbar"
	
	import {
		bars
	} from "@/config.js"
	var ele = null; //保存上一个
	export default {
		name: "tabbarview",
		components: {
			tabbar
		},
		data: () => {
			return {
				direction: "slideleft",
				bar: null
			}
		},
		methods: {
			afterEnter: function(el) {
				ele = el;
			}
		},
		watch: {
			direction: (newValue, oldValue) => {
				//设置上一个渐变方向
				if (newValue == "slideleft")
					ele.style.transform = "translateX(-100%)";
				else
					ele.style.transform = "translateX(100%)";
			}
		},
		beforeCreate: function() {
			console.log(this.$store.state.path, "beforeCreate");
			if (this.$store.state.path != null) {
				this.$router.push(this.$store.state.path);
			}

		},
		mounted: function() {
			console.log("mounted");
		}
	}
</script>

<style>
	
</style>
