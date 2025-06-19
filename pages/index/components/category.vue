<template>
	<view class="category-top">
		<view class="category-box">
			<view class="categort-item" v-for="(item ,index) in categoryList" :key="item.id">{{item.name}}

			</view>
			<view class="categort-item">全部分类</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			categoryList: {
				type: Array,
				default: () => [{
						id: 1,
						name: 'java'
					},
					{
						id: 2,
						name: '运维'
					},
					{
						id: 3,
						name: 'python'
					},
					{
						id: 4,
						name: 'UI设计'
					},
					{
						id: 5,
						name: '大数据'
					},
					{
						id: 6,
						name: 'PHP'
					},
					{
						id: 7,
						name: 'vue'
					},
				]

			}
		}
	}
</script>

<style lang="scss">
	.category-top {
		// margin-top: 40rpx;
	}
	.category-box{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding:  30rpx 30rpx 0 30rpx;
		>view{
			width: 160rpx;
			height: 70rpx;
			background-color: #e9e9f2;
			text-align: center;
			line-height: 70rpx;
			font-size: 26rpx;
			border-radius: 20rpx;
			overflow: hidden;
			margin-top: 15rpx;
			color:gray
			
		}
	}
</style>