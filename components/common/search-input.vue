<template>
  <view class="search-box">
    <input class="search-input" type="text" placeholder="搜索你的内容" />
  </view>
</template>

<script></script>

<style lang="scss">
.search-box {
  position: absolute;
  left: 0;
  top: 30rpx;
  z-index: 9999;
  width: 100%;
  .search-input {
    background-color: #f8f8f8;
    height: 70rpx;
    line-height: 40rpx;
    text-align: center;
    border-radius: 30rpx;
    margin: 0 20rpx;
  }
}
</style>
