webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const axios =  __webpack_require__(5);
module.exports = {
    getContent: function () {
      const url = '/api/content';

      return axios.get(url).then(res => res.data);
    }
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pages_Homepage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pages_Homepage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_pages_Homepage__);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Homepage',
    component: __WEBPACK_IMPORTED_MODULE_2__components_pages_Homepage___default.a
  }]
}));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(40)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(53),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const axios =  __webpack_require__(5);

module.exports = {
    getHotels: function () {
        const url = '/api/hotels';

       return axios.get(url).then(res => res.data);
    }
}

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue2_filters__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue2_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue2_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_styles_styles_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_styles_styles_scss__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue2_filters___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  GlobalStyles: __WEBPACK_IMPORTED_MODULE_4__assets_styles_styles_scss___default.a,
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'

});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Accordion',

  props: ['hotel', 'index'],

  data: function data() {
    return {
      isActive: false
    };
  },


  methods: {
    setDefaultPanel: function setDefaultPanel() {
      this.isActive = this.index === 0; // Sets first panel to be open
    }
  },

  mounted: function mounted() {
    this.setDefaultPanel();
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_content_api__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_content_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_content_api__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainHeader',

  data: function data() {
    return {
      content: ''
    };
  },


  methods: {
    getContent: function getContent() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_content_api__["getContent"])().then(function (content) {
        console.log(content);
        _this.content = content;
      });
    }
  },

  beforeMount: function beforeMount() {
    this.getContent();
  }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Accordion__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_hotels_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_hotels_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_hotels_api__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HotelAccordion',

  components: {
    Accordion: __WEBPACK_IMPORTED_MODULE_0__Accordion___default.a
  },

  data: function data() {
    return {
      hotels: ''
    };
  },


  methods: {
    getHotels: function getHotels() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_hotels_api__["getHotels"])().then(function (hotels) {
        _this.hotels = hotels;
        console.log(_this.hotels);
      });
    }
  },

  beforeMount: function beforeMount() {
    this.getHotels();
  }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_content_api__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_content_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_content_api__);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomepageContent',

  data: function data() {
    return {
      content: ''
    };
  },


  methods: {
    getContent: function getContent() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_content_api__["getContent"])().then(function (data) {
        console.log(data);
        _this.content = data;
      });
    }
  },

  beforeMount: function beforeMount() {
    this.getContent();
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainHeader__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MainHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HomepageContent__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HomepageContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__HomepageContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HotelAccordion__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HotelAccordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__HotelAccordion__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'homepage',

  components: {
    MainHeader: __WEBPACK_IMPORTED_MODULE_0__MainHeader___default.a,
    HomepageContent: __WEBPACK_IMPORTED_MODULE_1__HomepageContent___default.a,
    HotelAccordion: __WEBPACK_IMPORTED_MODULE_2__HotelAccordion___default.a
  }

});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(41)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(54),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-66e40797",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(45)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(58),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-dc446f8c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(55),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7052ad35",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(43)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(56),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-90654f32",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(44)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(57),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d5288acc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "accordion__article",
    class: {
      active: _vm.isActive
    }
  }, [_c('header', {
    staticClass: "accordion__article__header"
  }, [_c('a', {
    attrs: {
      "href": "#",
      "aria-expanded": _vm.isActive ? 'true' : 'false',
      "aria-controls": 'tab-' + _vm.index
    },
    on: {
      "click": function($event) {
        _vm.isActive = !_vm.isActive
      }
    }
  }, [_c('h3', [_vm._v(_vm._s(_vm.hotel.city) + ", " + _vm._s(_vm.hotel.country))]), _vm._v(" "), _c('span', {
    staticClass: "blurb"
  }, [_vm._v("over " + _vm._s(_vm.hotel.hotels.length) + " hotels")])])]), _vm._v(" "), _c('section', {
    staticClass: "accordion__article__content",
    attrs: {
      "aria-labelledby": 'tab-' + _vm.index,
      "aria-hidden": _vm.isActive ? 'false' : 'true',
      "role": "tabpanel"
    }
  }, [_c('ul', {
    staticClass: "list-group"
  }, [_vm._l((_vm.limitBy(_vm.hotel.hotels, 5)), function(h) {
    return _c('li', {
      staticClass: "list-group-item"
    }, [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-7"
    }, [_vm._v("\n              " + _vm._s(h.name) + "\n              "), (h.stars) ? _c('span', {
      staticClass: "star-rating visible-xs"
    }, _vm._l((h.stars), function(n) {
      return _c('span', {
        staticClass: "star"
      })
    })) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "col-xs-5 details"
    }, [(h.stars) ? _c('span', {
      staticClass: "star-rating hidden-xs"
    }, [_vm._v("\n                " + _vm._s(h.stars) + "\n              ")]) : _vm._e(), _vm._v(" "), _vm._l((h.prices), function(price) {
      return _c('span', {
        staticClass: "price"
      }, [_c('span', {
        staticClass: "from"
      }, [_vm._v("From")]), _vm._v(" "), (price.was) ? _c('span', {
        staticClass: "was hidden-xs"
      }, [_vm._v("\n                  " + _vm._s(_vm._f("currency")(price.was, '£', 0)) + "\n                ")]) : _vm._e(), _vm._v(" "), _c('span', {
        staticClass: "now"
      }, [_vm._v("\n                  " + _vm._s(_vm._f("currency")(price.now, '£', 0)) + "\n                ")]), _vm._v(" "), (price.was) ? _c('span', {
        staticClass: "was visible-xs"
      }, [_vm._v("\n                  " + _vm._s(_vm._f("currency")(price.was, '£', 0)) + "\n                ")]) : _vm._e()])
    })], 2)])])])
  }), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('a', {
    staticClass: "more-hotels",
    attrs: {
      "href": ""
    }
  }, [_vm._v("See all " + _vm._s(_vm.hotel.hotels.length) + " hotels in " + _vm._s(_vm.hotel.city))])])], 2)])])
},staticRenderFns: []}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hotels"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "accordion",
    attrs: {
      "role": "tablist"
    }
  }, _vm._l((_vm.hotels), function(hotel, index) {
    return _c('accordion', {
      key: hotel.index,
      attrs: {
        "hotel": hotel,
        "index": index
      }
    })
  }))])]), _vm._v(" "), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 text-right"
  }, [_c('a', {
    staticClass: "more-hotels",
    attrs: {
      "href": ""
    }
  }, [_vm._v("See all of our destination offers")])])])
}]}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h1', [_vm._v(_vm._s(_vm.content.company) + " "), _c('span', {
    staticClass: "blurb"
  }, [_vm._v("- " + _vm._s(_vm.content.blurb))])])])])])])
},staticRenderFns: []}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homepage"
  }, [_c('main-header'), _vm._v(" "), _c('homepage-content'), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('hotel-accordion')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h2', {
    staticClass: "top-destinations"
  }, [_c('span', [_vm._v("Top Destinations")])])])])])
}]}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.content.header_content)
    }
  })])])])
},staticRenderFns: []}

/***/ })
],[33]);
//# sourceMappingURL=app.d977a9b99605c88721a9.js.map