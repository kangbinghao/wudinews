<template>
	<view class="ranking-wrap">
		<image class="bg" src="@/static/images/ranking-1.png" mode=""></image>
		<view class="ranking-text">1</view>
	</view>
</template>

<script>
	export default {
		name:"hot-ranking",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.ranking-wrap{
	width: 38rpx;
	height: 45rpx;
	position: relative;
}
.ranking-wrap>image,.ranking-wrap>.ranking-text{
	position: absolute;
}
.ranking-wrap image{
	width: 38rpx;
	height: 45rpx;
}
.ranking-wrap .ranking-text{
	width: 100%;
	font-size: 14rpx;
	display: block;
	text-align: center;
	color: white;
	font-weight: bold;
	line-height:45rpx ;
}
</style>
