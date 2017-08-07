<template>
	<div class="hello">
		<ul class="list clearfix" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
			<li>
				<p style="height:200px;margin-bottom:20px;border:1px solid red"></p>
			</li>
			<li>
				<p style="height:200px;margin-bottom:20px;border:1px solid blue"></p>
			</li>
			<li>
				<p style="height:200px;margin-bottom:20px;border:1px solid green"></p>
			</li>
			<li>
				<p style="height:200px;margin-bottom:20px;border:1px solid yellow"></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				maxx: 0,
				minx: 0,
				distance: 0,
				startx: 0,
				lastdistance: 0
			}
		},
		methods: {
			touchStart(e) {
				this.startx = e.touches[0].clientX;
			},
			touchMove(e) {
				this.distance = e.touches[0].clientX - this.startx
				let ul = document.querySelector(".list")
				this.minx=-ul.offsetWidth+ul.offsetWidth/4
				// ul.style.transition = "none";
				if(this.distance < -50) {
					ul.style.transition = "none";
					ul.style.transfrom = "translateX("+-50+this.lastdistance+"px)"
					ul.style.webkitTransform = "translateX("+-50+this.lastdistance+"px)"
				} else if(Math.abs(this.distance) < 50) {
					ul.style.transition = "none";
					ul.style.transfrom = "translateX(" + this.lastdistance+this.distance + "px)"
					ul.style.webkitTransform = "translateX(" + this.lastdistance+this.distance + "px)"
					console.log(this.lastdistance+this.distance)
				} else if(this.distance > 50) {
					ul.style.transition = "none";
					ul.style.transfrom = "translateX("+50+this.lastdistance+"px)"
					ul.style.webkitTransform = "translateX("+50+this.lastdistance+"px)"
					console.log(this.lastdistance)
				}
			},
			touchEnd(e) {
				let ul = document.querySelector(".list")
				if(this.distance < -50) {
					this.lastdistance = this.lastdistance - ul.offsetWidth / 4
					if(this.lastdistance<this.minx){
						this.lastdistance=this.minx
					}
					ul.style.transition = "all 1s";
					ul.style.transfrom = "translateX(" + this.lastdistance + "px)"
					ul.style.webkitTransform = "translateX(" + this.lastdistance + "px)"
				}
				if(Math.abs(this.distance) < 50) {
					ul.style.transition = "all 1s";
					ul.style.transfrom = "translateX(" + this.lastdistance + "px)"
					ul.style.webkitTransform = "translateX(" + this.lastdistance + "px)"
				} else if(this.distance > 50) {
					this.lastdistance = this.lastdistance + ul.offsetWidth / 4
					if(this.lastdistance>this.maxx){
						this.lastdistance=this.maxx
					}
//					console.log(this.lastdistance)
					ul.style.transition = "all 1s";
					ul.style.transfrom = "translateX(" + this.lastdistance + "px)"
					ul.style.webkitTransform = "translateX(" + this.lastdistance + "px)"
				}
			},
			autoPlay:function(){

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		overflow: hidden;
		width: 100%;
		height: 254px;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
		width: 400%;
	}
	
	.clearfix::after,
	.clearfix::before {
		content: ".";
		line-height: 0;
		height: 0;
		display: block;
		visibility: hidden;
		clear: both;
	}
	
	li {
		float: left;
		width: 25%;
	}
	
	img {
		width: 100%;
	}
	
	a {
		color: #42b983;
	}
</style>

