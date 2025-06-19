"use strict";
const common_vendor = require("../../common/vendor.js");
const banner = () => "../../components/common/banner.js";
const categoryBox = () => "./components/category.js";
const swiperCourse = () => "../components/swiper-couse.js";
const searchInput = () => "../../components/common/search-input.js";
const _sfc_main = {
  components: {
    banner,
    categoryBox,
    swiperCourse,
    searchInput
  },
  data() {
    return {
      title: "Hello小猪猪你好呀"
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_search_input = common_vendor.resolveComponent("search-input");
  const _component_banner = common_vendor.resolveComponent("banner");
  const _component_category_box = common_vendor.resolveComponent("category-box");
  const _component_swiper_course = common_vendor.resolveComponent("swiper-course");
  (_component_search_input + _component_banner + _component_category_box + _component_swiper_course)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
