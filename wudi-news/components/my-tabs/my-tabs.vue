<!-- tabs组件 -->
<!-- 
  1.可以在父组件中定制样式
  2.可以在父组件中指定数据
  3.可以再父组件中选中项
 -->
<template>
	<view class="tab-container">
		<view class="tab-box">
			<scroll-view scroll-x="true" 
			             class="scroll-view" 
						 scroll-with-animation 
						 :scroll-left="scrollLeft">
				<view class="scroll-content">
					<view class="tab-item-box">
						<block v-for="(item,index) in tabData" :key="index">
							<view 
							      :id="'_tab_'+index"
								  class="tab-item" 
							      :class="{'tab-item-active':activeIndex===index}"
								  @click="onTabClick(index)"
								  :style="{
									  color:activeIndex===index? defaultConfig.activeTextColor:defaultConfig.textColor
								  }"
								  
								  >
								{{ item.label}}
							</view>
						</block>
					</view>
					<!-- 滑块 -->
					<view class="underLine" :style="{
						transform:'translateX('+slider.left+'px)',
						width:defaultConfig.underLineWidth+'px',
						height:defaultConfig.underLineHeight+'px',
						backgroundColor:defaultConfig.underLineColor
						}">
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-tabs",
		props: {
			// 父组件传入的 tabs 数据
			tabData: {
				type: Array,
				default: () => []
			},
			// 默认激活项
			defaultIndex: {
				type: Number,
				default: 0
			},
			// 配置对象
			config: {
				type: Object,
				default: () => {
					return {};
				}
			}
		},
		data() {
			return {
				// 当前激活项的 index
				activeIndex: 0,
				//滑块
				//滑块滚动
				slider: {
					//滑块距离左侧距离
					left:0
				},
				// tab下划线配置
				defaultConfig:{
					textColor:'#333',
					activeTextColor:'#00e0cb',
					underLineWidth:24,
					underLineHeight:2,
					underLineColor:'#00e0cb'
				},
				// 内部维护的数据对象，维护每一个tabitem 单独维护一个slider 的滑块对象
				tabList:[],
				// scrollView横向滚动条的位置
				scrollLeft:0
			};
		},
		// 监听器
		watch: {
			// 监听tabDate的变化
			tabData: {
				// tabDate 变化时候回调
				handler(val) {
					this.tabList = val
					setTimeout(()=>{
						// 计算itemde slider
						this.updataTabWidth()
					},0)
					
				},
				// 当前handler回调会在侦听开始之后立即被调用
				immediate: true
			},
			// 监听config变化
			config:{
				handler(val) {
				   this.defaultConfig={...this.defaultConfig,...val}	
				   
				},
				// 当前handler回调会在侦听开始之后立即被调用
				immediate: true
			}
		},
		methods: {
			// 点击tab执行方法
			onTabClick(index) {
				this.activeIndex = index
				// 发送通知 激活项目发生变化
				this.$emit("tabClick", index)
				this.tabToIndex()
			},
			// 计算滑块滚动位置方法
			tabToIndex(){
				const index=this.activeIndex;
				// 滚动条left
				// console.log(index,this.tabList[index])
				this.slider={
					left:this.tabList[index]._slider.left
				}
				// 控制scroll进行横向滚动实现 文字滑动动画
				this.scrollLeft=this.activeIndex*this.defaultConfig.underLineWidth
				
			},
			// 更新tab宽度
			updataTabWidth(){
				// tabItem的宽度 tabItem 的left 
				let data=this.tabList
				if(data.length===0) return
				// 实例化query实例  操作dom
				const query= uni.createSelectorQuery().in(this)
				// 循环拿到所有dom tabitem
				data.forEach((item,index)=>{
					// 通过quer对象拿到所有tabitem
					query.select("#_tab_"+index).boundingClientRect((res)=>{
                         // console.log(res)	
						 // 为数据对象的每一个item维护一个_slider对象
						 item._slider={
							 left:res.left+(res.width-this.defaultConfig.underLineWidth)/2
						 }
						 //拿到对应tab项之后 计算滑块位置
						 if(data.length-1===index){
							 this.tabToIndex()
						 }
					}).exec()
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-container {
		font-size: $uni-font-size-base;
		height: 45px;
		line-height: 45px;
		// background-color:#FFFFFF;

		.tab-box {
			width: 100%;
			height: 45px;
			display: flex;
			position: relative;

			.scroll-view {
				white-space: nowrap;
				width: 100%;
				height: 100%;
				box-sizing: border-box;

				.scroll-content {
					width: 100%;
					height: 100%;
					position: relative;

					.tab-item-box {
						height: 100%;

						.tab-item {
							height: 100%;
							display: inline-block;
							text-align: center;
							padding: 0 15px;
							position: relative;
							text-align: center;
							color: $uni-text-color;

							&-active {
								color: #00e0cb;
							}
						}
					}

					.underLine {
						height: 2px;
						width: 25px;
						background-color:  #00e0cb;
						border-radius: 3px;
						transition: 0.5s;
						position: absolute;
						bottom: 0;
					}

				}
			}
		}

		/deep/.uni-scroll-view::-webkit-scrollbar {
			display: none;
		}

		/deep/.uni-scroll-view {
			scrollbar-width: none;
		}
	}
</style>
