exports.ids = [5];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=72326992&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? "Sign in" : "Sign up"))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")]):_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" required=\"required\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=72326992&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.1@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: "notAuthenticated",
  name: "loginPage",
  computed: {
    isLogin() {
      this.errors = {};
      return this.$route.name === "login";
    }

  },

  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      errors: {} //错误信息

    };
  },

  methods: {
    // 提交表单请求登录
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await Object(user["e" /* login */])({
          user: this.user
        }) : await Object(user["f" /* register */])({
          user: this.user
        });
        console.log(data); // 保存用户的登录状态

        this.$store.commit('setUser', data.user); // 为了防止刷新页面数据丢失，我们需要把数据持久化

        Cookie.set('user', data.user); // 跳转到首页

        this.$router.push("/");
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "18e0aa33"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map