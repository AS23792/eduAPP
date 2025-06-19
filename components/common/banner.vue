<template>
  <view class="banner-box">
    <view
      class="banner-bg"
      :style="{
        'background-image': `linear-gradient(${
          bannerBackground || '#008F83'
        } 50% ,#FFF)`,
      }"
    >
    </view>
    <swiper
      class="banner-wipper"
      indicator-dots
      indicator-color="#c8c7cc"
      indicator-active-color="#808080"
      autoplay
      interval="2000"
      :current="current"
      @change="swiperChange"
    >
      <swiper-item
        class="swiper-item"
        v-for="(item, index) in bannerList"
        :key="item.id"
      >
        <image :src="item.imageUrl"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    bannerList: {
      type: Array,
      default: () => [
        {
          id: 1,
          imageUrl: '/static/images/it01.png',
          background: '#008F83',
        },
        {
          id: 2,
          imageUrl: '/static/images/it02.png',
          background: '#5B41E2',
        },
        {
          id: 3,
          imageUrl: '/static/images/it03.png',
          background: '#0080E4',
        },
        {
          id: 4,
          imageUrl: '/static/images/it04.png',
          background: '#00871E',
        },
      ],
    },
  },
  data() {
    return {
      current: 0,
      bannerBackground: '',
    }
  },
  methods: {
    swiperChange(e) {
      console.log(e.detail.current)
      this.current = e.detail.current
      this.bannerBackground = this.bannerList[this.current].background
    },
  },
}
</script>

<style lang="scss">
.banner-box {
  padding-top: 120rpx;
  /* #ifdef APP-PLUS */
  padding-top: calc(var(--status-bar-height) + 100rpx);

  /* #endif */

  .banner-bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 470rpx;
    background-image: linear-gradient(red 50%, #fff);
    transition: 0.5s;
  }

  .banner-wipper {
    width: 100%;
    height: 350rpx;
    .swiper-item {
      width: 100%;
      height: 100%;
      margin: 0 30rpx;
      image {
        width: 90%;
        height: 100%;
        border-radius: 15rpx;
      }
    }
  }
}
</style>
