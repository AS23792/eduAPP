<template>
  <view class="list-box">
    <view class="title space-between center">
      <view class="center">
        <text class="name">热门推荐</text>
        <text class="word">HOT</text>
      </view>
      <view class="all">
        <text>全部</text>
        <text class="iconfont icon-right-1-copy"></text>
      </view>
    </view>
    <swiper class="list-swiper" next-margin="30rpx">
      <swiper-item class="swiper-item" v-for="(n, index) in 2" :key="index">
        <course-item v-for="(n, index) in 4" :key="index"></course-item>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import courseItem from '@/components/common/course-item.vue'
export default {
  components: { courseItem },
}
</script>

<style lang="scss">
.list-box {
  margin-top: 60rpx;
}
.title{
	margin: 0 20px;
}
.list-box .name {
  font-size: 38rpx;
  font-weight: 500;
  color: #303133;
}
.word {
  font-size: 20rpx;
  background-image: linear-gradient(to right, orange, red);
  color: #fff;
  padding: 0 10rpx;
  border-radius: 30rpx 30rpx 30rpx 0;
}
.all {
  font-weight: normal;
  color: #999;
  font-size: 28rpx;
}
.all .iconfont {
  font-size: 25rpx;
}
.list-swiper {
  height: 800rpx;
  padding-left: 30rpx;
}
.list-swiper .swiper-item {
  /* background-color: #FA140E; */
}
</style>
