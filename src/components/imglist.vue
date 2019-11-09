<template>
	<ul class="imglist" >
		<li v-for="video in videos" @click="show()">
			<img :src="video.img" />
			<p class="des">{{video.title}}</p>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "imglist",
		data: () => {
			return {
				videos: [{
					title: "美女富婆看上穷保安，直接把保安带回来，保安一进门懵了",
					img: "http://p1-tt.byteimg.com/video1609/22f150004eb1deb47c601"
				},
				{
					title: "美女富婆看上穷保安，直接把保安带回来，保安一进门懵了",
					img: "http://p1-tt.byteimg.com/video1609/22f150004eb1deb47c601"
				},
				{
					title: "美女富婆看上穷保安，直接把保安带回来，保安一进门懵了",
					img: "http://p1-tt.byteimg.com/video1609/22f150004eb1deb47c601"
				},
				{
					title: "美女富婆看上穷保安，直接把保安带回来，保安一进门懵了",
					img: "http://p1-tt.byteimg.com/video1609/22f150004eb1deb47c601"
				},
				{
					title: "美女富婆看上穷保安，直接把保安带回来，保安一进门懵了",
					img: "http://p1-tt.byteimg.com/video1609/22f150004eb1deb47c601"
				},
				{
					title: "美女富婆看上穷保安，直接把保安带回来，保安一进门懵了",
					img: "http://p1-tt.byteimg.com/video1609/22f150004eb1deb47c601"
				},
				{
					title: "美女富婆看上穷保安，直接把保安带回来，保安一进门懵了",
					img: "http://p1-tt.byteimg.com/video1609/22f150004eb1deb47c601"
				}
				]
			}
		},methods:{
			show:function(){
				this.$router.push("/show");
			}
		}
	}
</script>

<style>
	.imglist {
		margin-top: 10px;
		height: calc(100% - 52px - .6rem);
		overflow-y: scroll;
	}
    .imglist li{
		position: relative;
	}
	.imglist li img {
		width: 100%;
	}

	.imglist li p {
		position: absolute;
		top: 0;
		left: 0;
		padding: 10px 20px;
		font-size: 0.42666rem;
		line-height: 1.5;
		color: white;
		background: linear-gradient(to bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0));
	}
</style>
