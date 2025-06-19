<template>
  <view class="index-box">
    <!-- #ifdef MP -->
    <search-input></search-input>
    <!-- #endif -->
    <banner></banner>
    <category-box></category-box>
    <swiper-course></swiper-course>
  </view>
</template>

<script>
import banner from '@/components/common/banner.vue'
import categoryBox from '@/pages/index/components/category.vue'
import swiperCourse from '../components/swiper-couse.vue'
import searchInput from '@/components/common/search-input.vue'
export default {
  components: {
    banner,
    categoryBox,
    swiperCourse,
    searchInput,
  },
  data() {
    return {
      title: 'Hello小猪猪你好呀',
    }
  },
  onLoad() {},
  methods: {},
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
