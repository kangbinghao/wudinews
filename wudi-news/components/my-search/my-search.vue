<template>
	<view class="my-search-container">
		<view class="my-search-box">
			<image class="icon" src="../../static/images/search.png" mode=""></image>
			<text class="placeholder">{{placeholderText}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-search",
		props:{
			placeholderText:{
				type:String,
				default:"搜索"
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
    .my-search-container{
		display: flex;
		align-items: center;
		 .my-search-box{
			 height: 36px;
			 width: 100%;
			 background-color: #FFFFFF;
			 border-radius: 15rpx;
			 border: 1px solid #b1b1b1;
			 display: flex;
			 align-items: center;
			 .icon{
				 width: 20px;
				 height: 20px;
				 margin:0 10px;
			 }
			 .placeholder{
				 font-size: 12px;
				 color: #999;
			 }
			 
		 }
		
	}
</style>
