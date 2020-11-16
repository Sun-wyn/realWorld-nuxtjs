exports.ids = [4];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: "/api/articles",
    params
  });
}; // 获取关注的用户文章列表

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: "/api/articles/feed",
    params
  });
}; // 添加文章

const addArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "post",
    url: "/api/articles",
    data
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "DELETE",
    url: `/api/articles/${slug}`
  });
}; // 获取文章

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}`
  });
}; // 更新文章

const updateArticle = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "put",
    url: `/api/articles/${slug}`,
    data
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "post",
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "delete",
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: `/api/articles/${slug}/comments`
  });
}; // 添加文章评论

const addComments = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "post",
    url: `/api/articles/${slug}/comments`,
    data
  });
}; // 删除文章评论

const deleteComments = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "DELETE",
    url: `/api/articles/${slug}/comments/${id}`
  });
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=bdc6b210&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\""+(_vm._ssrAttr("disabled",_vm.disabled))+" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",(_vm.tag)))+" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(item,index){return ("<span class=\"tag-default tag-pill ng-binding ng-scope\"><i class=\"ion-close-round\"></i>"+_vm._ssrEscape("\n                  "+_vm._s(item)+"\n                ")+"</span>")}))+"</div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=bdc6b210&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.1@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  name: "editorIndex",

  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: []
      },
      tag: "",
      disabled: false,
      errors: []
    };
  },

  async asyncData({
    params
  }) {},

  mounted() {
    this.resetForm();
    this.getArticle();
  },

  methods: {
    // 添加tag列表
    addTagList() {
      this.article.tagList.push(this.tag);
      this.tag = "";
    },

    // 移除某个tag
    delTag(idx) {
      this.article.tagList.splice(idx, 1);
    },

    // 发布文章
    async publidArticle() {
      this.disabled = true;

      try {
        const p = {
          article: this.article
        };
        let data = {};

        if (this.$route.params.slug) {
          const slug = this.$route.params.slug;
          data = await Object(article["k" /* updateArticle */])(slug, p);
        } else {
          data = await Object(article["a" /* addArticle */])(p);
        }

        const slug = data.data.article.slug;
        this.disabled = false;
        this.resetForm();
        this.$router.push({
          name: "article",
          params: {
            slug
          }
        });
      } catch (error) {
        this.disabled = false;
        this.errors = error.response.data.errors;
      }
    },

    // 获取文章
    async getArticle() {
      if (this.$route.params.slug) {
        const slug = this.$route.params.slug;
        const {
          data
        } = await Object(article["g" /* getArticle */])(slug);
        const {
          title,
          description,
          body,
          tagList
        } = data.article;
        this.article = {
          title,
          description,
          body,
          tagList
        };
      }
    },

    // 重置表单
    resetForm() {
      this.article = {
        title: "",
        description: "",
        body: "",
        tagList: []
      };
      this.tag = "";
      this.errors = [];
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/editor/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e24ff39"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map