exports.ids = [3];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=7698ae64&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-mate',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-mate',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=7698ae64&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/article-mate.vue?vue&type=template&id=35d8f1a3&
var article_matevue_type_template_id_35d8f1a3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username,
      },
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username,
        },
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" "),(_vm.isUser)?[_vm._ssrNode("<span class=\"ng-scope\">","</span>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
          name: 'editor',
          params: {
            slug: _vm.article.slug,
          },
        }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n      ")]),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.delDisabled))+" class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n      </button>")],2)]:_vm._ssrNode("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
        active: _vm.article.author.following,
      }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n        "+_vm._s(_vm.article.author.following ? "Unfollow" : "Follow")+"\n      "+_vm._s(_vm.article.author.username)+"\n      ")+"</button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
        active: _vm.article.author.favorited,
      }))+"><i class=\"ion-heart\"></i>\n        Favorite Post\n      <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var article_matevue_type_template_id_35d8f1a3_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-mate.vue?vue&type=template&id=35d8f1a3&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.1@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/article-mate.vue?vue&type=script&lang=js&
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
//


/* harmony default export */ var article_matevue_type_script_lang_js_ = ({
  name: "articleMate",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      disabled: false,
      isUser: false,
      delDisabled: false,
      followDisabled: false
    };
  },

  mounted() {
    this.isUserFn();
  },

  methods: {
    async onFavorite(article) {
      if (!this.$store.state.user) {
        this.$router.push("/register");
        return;
      }

      this.disabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["f" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await Object(api_article["c" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      this.disabled = false;
    },

    async onFollow(article) {
      if (!this.$store.state.user) {
        this.$router.push("/register");
        return;
      }

      this.followDisabled = true;

      if (article.author.following) {
        // 取消
        await Object(user["b" /* deleteFollow */])(article.author.username);
        article.author.following = false;
      } else {
        // 添加
        await Object(user["a" /* addFollow */])(article.author.username);
        article.author.following = true;
      }

      this.followDisabled = false;
    },

    // 判断是不是当前用户的文章
    isUserFn() {
      if (this.$store.state.user) {
        this.isUser = this.$store.state.user.username === this.article.author.username;
      }
    },

    // 删除文章
    async delectBtn() {
      this.delDisabled = true;
      await Object(api_article["d" /* deleteArticle */])(this.article.slug);
      this.delDisabled = false; // 跳转到首页

      this.$router.push("/");
    },

    isLogin() {}

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-mate.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_matevue_type_script_lang_js_ = (article_matevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-mate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_matevue_type_script_lang_js_,
  article_matevue_type_template_id_35d8f1a3_render,
  article_matevue_type_template_id_35d8f1a3_staticRenderFns,
  false,
  null,
  null,
  "41e6d7c3"
  
)

/* harmony default export */ var article_mate = (component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=2819cea4&
var article_commentsvue_type_template_id_2819cea4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.user)?[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.commentVal))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button type=\"button\" class=\"btn btn-sm btn-primary\">\n          Post Comment\n        </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode(" \n        "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,"MMM DD, YYYY")))+"</span> <span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>")],2)],2)})]:_vm._ssrNode("<p style=\"display: inherit\">","</p>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Sign in")]),_vm._ssrNode(" or\n    "),_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("sign up")]),_vm._ssrNode(" to add comments on this\n    article.\n  ")],2)],2)}
var article_commentsvue_type_template_id_2819cea4_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=2819cea4&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.1@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
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


/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },

  data() {
    return {
      comments: [],
      //文章列表
      commentVal: "" //评论内容

    };
  },

  async mounted() {
    this.getComment();
  },

  methods: {
    async addComment() {
      if (this.commentVal.length === 0) return;
      await Object(api_article["b" /* addComments */])(this.article.slug, {
        comment: {
          body: this.commentVal
        }
      });
      this.getComment();
      this.commentVal = "";
    },

    async getComment() {
      const {
        data
      } = await Object(api_article["i" /* getComments */])(this.article.slug);
      this.comments = data.comments;
    },

    async deleteComment(id) {
      await Object(api_article["e" /* deleteComments */])(this.article.slug, id);
      this.getComment();
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue





/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_2819cea4_render,
  article_commentsvue_type_template_id_2819cea4_staticRenderFns,
  false,
  null,
  null,
  "3467dc32"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.1@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "articleIndex",

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["g" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  components: {
    ArticleMate: article_mate,
    ArticleComments: article_comments
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d14bbc0"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map