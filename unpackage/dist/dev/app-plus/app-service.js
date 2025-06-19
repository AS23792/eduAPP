if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$a = {
    props: {
      bannerList: {
        type: Array,
        default: () => [
          {
            id: 1,
            imageUrl: "/static/images/it01.png",
            background: "#008F83"
          },
          {
            id: 2,
            imageUrl: "/static/images/it02.png",
            background: "#5B41E2"
          },
          {
            id: 3,
            imageUrl: "/static/images/it03.png",
            background: "#0080E4"
          },
          {
            id: 4,
            imageUrl: "/static/images/it04.png",
            background: "#00871E"
          }
        ]
      }
    },
    data() {
      return {
        current: 0,
        bannerBackground: ""
      };
    },
    methods: {
      swiperChange(e) {
        formatAppLog("log", "at components/common/banner.vue:70", e.detail.current);
        this.current = e.detail.current;
        this.bannerBackground = this.bannerList[this.current].background;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "banner-box" }, [
      vue.createElementVNode(
        "view",
        {
          class: "banner-bg",
          style: vue.normalizeStyle({
            "background-image": `linear-gradient(${$data.bannerBackground || "#008F83"} 50% ,#FFF)`
          })
        },
        null,
        4
        /* STYLE */
      ),
      vue.createElementVNode("swiper", {
        class: "banner-wipper",
        "indicator-dots": "",
        "indicator-color": "#c8c7cc",
        "indicator-active-color": "#808080",
        autoplay: "",
        interval: "2000",
        current: $data.current,
        onChange: _cache[0] || (_cache[0] = (...args) => $options.swiperChange && $options.swiperChange(...args))
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.bannerList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", {
              class: "swiper-item",
              key: item.id
            }, [
              vue.createElementVNode("image", {
                src: item.imageUrl
              }, null, 8, ["src"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 40, ["current"])
    ]);
  }
  const banner = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-0e796477"], ["__file", "/Users/cqq/code/eduAPP/components/common/banner.vue"]]);
  const _sfc_main$9 = {
    props: {
      categoryList: {
        type: Array,
        default: () => [
          {
            id: 1,
            name: "java"
          },
          {
            id: 2,
            name: "运维"
          },
          {
            id: 3,
            name: "python"
          },
          {
            id: 4,
            name: "UI设计"
          },
          {
            id: 5,
            name: "大数据"
          },
          {
            id: 6,
            name: "PHP"
          },
          {
            id: 7,
            name: "vue"
          }
        ]
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "category-top" }, [
      vue.createElementVNode("view", { class: "category-box" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.categoryList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                class: "categort-item",
                key: item.id
              },
              vue.toDisplayString(item.name),
              1
              /* TEXT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        vue.createElementVNode("view", { class: "categort-item" }, "全部分类")
      ])
    ]);
  }
  const categoryBox = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-bc1cae24"], ["__file", "/Users/cqq/code/eduAPP/pages/index/components/category.vue"]]);
  const _sfc_main$8 = {
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "course-item" }, [
      vue.createElementVNode("view", { class: "item-left" }, [
        vue.createElementVNode("image", {
          class: "course-img",
          src: $props.item.mainImage,
          "lazy-load": ""
        }, null, 8, ["src"]),
        vue.createElementVNode(
          "view",
          { class: "course-time" },
          vue.toDisplayString($props.item.totalTime),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "item-right" }, [
        vue.createElementVNode(
          "view",
          { class: "title" },
          vue.toDisplayString($props.item.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode(
            "view",
            { class: "nickname iconfont icon-laoshi2" },
            vue.toDisplayString($props.item.nickName),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "count" }, [
            $props.item.isFree === 1 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "免费")) : (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "money iconfont icon-moneybag"
              },
              vue.toDisplayString($props.item.priceDiscount || $props.item.priceOriginal),
              1
              /* TEXT */
            )),
            vue.createElementVNode(
              "view",
              { class: "iconfont icon-video" },
              vue.toDisplayString($props.item.studyTotal) + "人在学",
              1
              /* TEXT */
            )
          ])
        ])
      ])
    ]);
  }
  const courseItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-60a44725"], ["__file", "/Users/cqq/code/eduAPP/components/common/course-item.vue"]]);
  const _sfc_main$7 = {
    components: { courseItem }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_course_item = vue.resolveComponent("course-item");
    return vue.openBlock(), vue.createElementBlock("view", { class: "list-box" }, [
      vue.createElementVNode("view", { class: "title space-between center" }, [
        vue.createElementVNode("view", { class: "center" }, [
          vue.createElementVNode("text", { class: "name" }, "热门推荐"),
          vue.createElementVNode("text", { class: "word" }, "HOT")
        ]),
        vue.createElementVNode("view", { class: "all" }, [
          vue.createElementVNode("text", null, "全部"),
          vue.createElementVNode("text", { class: "iconfont icon-right-1-copy" })
        ])
      ]),
      vue.createElementVNode("swiper", {
        class: "list-swiper",
        "next-margin": "30rpx"
      }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(2, (n, index) => {
            return vue.createElementVNode("swiper-item", {
              class: "swiper-item",
              key: index
            }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(4, (n2, index2) => {
                  return vue.createVNode(_component_course_item, { key: index2 });
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]);
  }
  const swiperCourse = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-b59ff22d"], ["__file", "/Users/cqq/code/eduAPP/pages/components/swiper-couse.vue"]]);
  const _sfc_main$6 = {};
  function _sfc_render$5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "search-box" }, [
      vue.createElementVNode("input", {
        class: "search-input",
        type: "text",
        placeholder: "搜索你的内容"
      })
    ]);
  }
  const searchInput = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-7c1dea4b"], ["__file", "/Users/cqq/code/eduAPP/components/common/search-input.vue"]]);
  const _sfc_main$5 = {
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_banner = vue.resolveComponent("banner");
    const _component_category_box = vue.resolveComponent("category-box");
    const _component_swiper_course = vue.resolveComponent("swiper-course");
    return vue.openBlock(), vue.createElementBlock("view", { class: "index-box" }, [
      vue.createVNode(_component_banner),
      vue.createVNode(_component_category_box),
      vue.createVNode(_component_swiper_course)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/cqq/code/eduAPP/pages/index/index.vue"]]);
  const _sfc_main$4 = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "分类 ");
  }
  const PagesCatagoryCatagory = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/cqq/code/eduAPP/pages/catagory/catagory.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 阅读 ");
  }
  const PagesArticleArticle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/cqq/code/eduAPP/pages/article/article.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 问答 ");
  }
  const PagesQuestionQuestion = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/cqq/code/eduAPP/pages/question/question.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 我的 ");
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/cqq/code/eduAPP/pages/my/my.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/catagory/catagory", PagesCatagoryCatagory);
  __definePage("pages/article/article", PagesArticleArticle);
  __definePage("pages/question/question", PagesQuestionQuestion);
  __definePage("pages/my/my", PagesMyMy);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/cqq/code/eduAPP/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
