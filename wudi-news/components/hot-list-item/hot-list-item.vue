<!-- 文章列表组件 -->
<template>
	<view class="item-wrap">
		<view class="item-box">
			<view class="item-box-left">
				<hot-ranking></hot-ranking>
			</view>
			<view class="item-box-right">
				<view class="item-title">
					我是CSDN最硬核作者，谁赞成，谁反对谁反对？
				</view>
				<view class="item-desc">
					也许是现在，也许是未来，我是全网最硬核的作者，最值得爱学习爱编程的崽崽们关注的作者。
					也许是现在，也许是未来，我是全网最硬核的作者，最值得爱学习爱编程的崽崽们关注的作者。
				</view>
				<view class="item-bottom-box">
					<text class="item-author">兔老大RabbitMQ</text>
					<view class="hot-box">
						<image class="hot-icon" src="../../static/images/hot-icon.png"></image>
						<text class="hot-text">1000热度</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"hot-list-item",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
   .item-wrap{
	   margin:12px 0;
	   .item-box{
		   box-sizing: border-box;
		   display: flex;
		   margin: 0 16px;
		   padding: 10px 10px;
		   // background-color: pink;
		   border-radius: 12px;
		   box-shadow: 2px 2px 5px 1px #f1f1f1;
		   .item-box-left{
			   // margin-right: 10rpx;
		   }
		   .item-box-right{
			   box-sizing: border-box;
			   padding:0 10rpx;
			   flex: 1;
			   // background-color: #ccc;
			   .item-title{
				   font-size: 30rpx;
				   font-weight: bold;
				   margin-bottom: 10rpx;
			   }
			   .item-desc{
				  font-size:28rpx;
				  line-height: 40rpx;
				  width: 100%;
				 text-overflow: -o-ellipsis-lastline;
				 	overflow: hidden;				//溢出内容隐藏
				 	text-overflow: ellipsis;		//文本溢出部分用省略号表示
				 	display: -webkit-box;			//特别显示模式
				 	-webkit-line-clamp: 2;			//行数
				 	line-clamp: 2;					
				 	-webkit-box-orient: vertical;	//盒子中内容竖直排列
				
			   }
			   .item-bottom-box{
				   padding: 10rpx 0;
				   display: flex;
				    justify-content: space-between;
				   .item-author{
					   font-size: 22rpx;
					   color: #888;
					     line-height:40rpx ;
				   }
				   .hot-box{
					   display: flex;
			           justify-content: center;
					  .hot-icon{
						   width: 35rpx;
						   height: 40rpx;
					   }
					   .hot-text{
						   color: #f94d29;
						   font-size: 22rpx;
						   line-height:40rpx ;
						   margin-left: 10rpx;
					   }
				   }
			   }
			   
		   }
	   }
   }
</style>
