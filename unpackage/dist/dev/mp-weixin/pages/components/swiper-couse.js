"use strict";
const common_vendor = require("../../common/vendor.js");
const courseItem = () => "../../components/common/course-item.js";
const _sfc_main = {
  components: { courseItem }
};
if (!Array) {
  const _component_course_item = common_vendor.resolveComponent("course-item");
  _component_course_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(2, (n, index, i0) => {
      return {
        a: common_vendor.f(4, (n2, index2, i1) => {
          return {
            a: index2,
            b: "def51384-0-" + i0 + "-" + i1
          };
        }),
        b: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/components/swiper-couse.js.map
