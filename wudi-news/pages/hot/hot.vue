<template>
	<view class="hot-container">
		<!--  mode="aspectFit" 图片不拉伸 -->
		<image class="logo" src="@/static/images/logoblack.png" mode="aspectFit"></image>
		<view class="searchbox">
			<my-search placeholderText="无敌编程小程序项目"></my-search>
		</view>
		<!-- tabs -->
			<view class="tab-sticky">
			  <my-tabs
				:tabData="tabData"
				:defaultIndex="currentIndex"
				@tabClick="onTabClick()"
			  ></my-tabs>
			</view>
			<!-- list -->
			<!-- 实现list步骤
			 1. 构建基本结构
			 2. 样式定义
			 3. 根据tab切换获取真实数据
			 4. 渲染真实数据
			 5. 让list具备切换能力
			 6. 完成list与tabs 联动能力
			 -->
			 
			 
			<view class="list">
				<block  v-for="(item,index) in 10" :key="index">
				<hot-list-item></hot-list-item>
				</block>
			</view>
	</view>
 
</template>

<script>
	import {getHotTabs} from '../../api/hot'
	export default {
		data() {
			return {
				// tabs 数据源
				tabData: [],
				// 当前的切换 index
				currentIndex: 0,
			};
		},
		// created生命周期函数，组件实现配置完成但dom未渲染 
		created() {
			// 调用获取数据方法
			 this.getHotTabs()
		},
		methods:{
			// 获取热搜 文章tab栏词条数据
		  async	getHotTabs(){
			  const {data:res}=  await	getHotTabs();
			  // console.log(res.list)
			   this.tabData = res.list;
			},
			// tab点击
			onTabClick(index){
				this.currentIndex=index
			}

		}
	}
</script>
<style lang="scss" scoped>
   .hot-container{
	   background-color:white;
	   .logo{
		   width: 100%;
		   height: 55px;
	   }
	   .searchbox{
		   padding:10px 16px;
	   }
   }
</style>
