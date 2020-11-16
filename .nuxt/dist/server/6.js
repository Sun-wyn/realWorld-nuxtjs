exports.ids = [6];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFollow; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: "/api/users/login",
    data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: "/api/users",
    data
  });
}; // 获取当前用户信息

const getUser = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: "/api/user"
  });
}; // 更新当前用户信息

const updateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "put",
    url: "/api/user",
    data
  });
}; // 获取当前用户profile

const getUserProfile = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: `/api/profiles/${username}`
  });
}; // Follow user

const addFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "post",
    url: `/api/profiles/${username}/follow`
  });
}; // Unfollow user

const deleteFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "DELETE",
    url: `/api/profiles/${username}/follow`
  });
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=6d2be2a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("disabled",_vm.disable))+(_vm._ssrAttr("value",(_vm.user.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("disabled",_vm.disable))+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\""+(_vm._ssrAttr("disabled",_vm.disable))+" class=\"form-control form-control-lg\">"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("disabled",_vm.disable))+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("disabled",_vm.disable))+" class=\"form-control form-control-lg\"></fieldset> <button type=\"button\" class=\"btn btn-lg btn-primary pull-xs-right\">\n              Update Settings\n            </button></fieldset></form> <hr> <button class=\"btn btn-outline-danger\">\n          Or click here to logout.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=6d2be2a4&

// EXTERNAL MODULE: ./api/user.js
var api_user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.1@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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
 // 仅在客户端加载 js-cookie 包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: "authenticated",
  name: "settingIndex",

  data() {
    return {
      disable: false
    };
  },

  async asyncData() {
    const {
      data
    } = await Object(api_user["c" /* getUser */])();
    const {
      user
    } = data;
    return {
      user
    };
  },

  methods: {
    // 更新用户信息
    async updateSetting() {
      this.disable = true;
      await Object(api_user["g" /* updateUser */])({
        user: {
          email: this.user.email,
          bio: this.user.bio,
          image: this.user.image
        }
      });
      this.disable = false; // 跳转到用户界面

      this.$router.push({
        name: "profile",
        params: {
          username: this.user.username
        }
      });
    },

    quit() {
      // 清除用户的登录状态
      this.$store.commit('setUser', null);
      Cookie.remove("user"); // 跳转到首页

      this.$router.push("/");
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/settings/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6f5f362f"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map