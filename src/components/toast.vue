<template>
	
	<div class="toast" v-show="obj.show">
		<p class="content">{{obj.content}}</p>
		<div class="confirm" @click="confirm">确认</div>
		<div class="cancle" @click="cancel">取消</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					data() {

					}
				}
			},
			props: {
				/*这个组件中的回调函数，显示的类容都通过这里传过来，
				 * 如果再同一个页面中需要多次调用这个组件，则在对应的组件的不同位置改变这个
				 * obj对象中的值来达到多次调用，但记住从父组件过来的的对象中必须包含show，content，confirm，cancel
				 * 这四个值。
				 * 我自己是在DeskTop.vue文件下进行测试的。打开项目就可以看到那个很丑的弹窗，自己可以改下面的less。
				
				* */
				obj: {
					required: true,
					type: Object
				}
			},
		methods: {
			confirm() {
				this.obj.show=false;
				this.obj.confirm();
				
			},
			cancel(){
				this.obj.cancel();
				this.obj.show=false;
			}
		}
	}
</script>
<style scoped lang="less">
	.toast {
		position: absolute;
		top: 50%;
		left:50%;
		z-index:100;
		background-color: #fff;
		text-align: center;
		border-radius: 10%;
		line-height: 30px;
		.content{
			padding:10px;
		}
		.confirm {
			background-color: green;
			color: #fff;
			float: left;
			width: 60px;
		}
		
		.cancle {
			background-color: red;
			color: #fff;
			float: right;
			width: 60px;
			
		}
	}
</style>