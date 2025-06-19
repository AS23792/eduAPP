"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    item: {
      type: Object,
      default: () => ({
        id: 1,
        mainImage: "/static/images/it02.png",
        totalTime: "00:59:38",
        title: "uni-app在线教育项目实战！",
        nickName: "景",
        isFree: 0,
        // 是否收费0收费，1免费
        priceOriginal: 999,
        // 原价
        priceDiscount: 599,
        // 优惠价
        studyTotal: 399
      })
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.item.mainImage,
    b: common_vendor.t($props.item.totalTime),
    c: common_vendor.t($props.item.title),
    d: common_vendor.t($props.item.nickName),
    e: $props.item.isFree === 1
  }, $props.item.isFree === 1 ? {} : {
    f: common_vendor.t($props.item.priceDiscount || $props.item.priceOriginal)
  }, {
    g: common_vendor.t($props.item.studyTotal)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/common/course-item.js.map
