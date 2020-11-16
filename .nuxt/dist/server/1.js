exports.ids = [1];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTags; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取文章标签列表

const getTags = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: "/api/tags"
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=e37e58b8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</p> "),_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n          ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'author',
                },attrs:{"exact":"","to":{
                  name: 'profile',
                  query: {
                    tab: 'author',
                  },
                }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'favorited',
                },attrs:{"exact":"","to":{
                  name: 'profile',
                  query: {
                    tab: 'favorited',
                  },
                }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),(_vm.articles.length > 0)?_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                    name: 'profile',
                    params: {
                      username: article.author.username,
                    },
                  }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                  active: article.favorited,
                }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n              ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}):_vm._ssrNode("<div class=\"article-preview\">\n            No articles are here... yet.\n          </div>")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=e37e58b8&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: ./api/tag.js
var tag = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.1@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: "authenticated",
  name: "UserPorfile",

  async asyncData({
    query,
    params
  }) {
    const limit = 5;
    const offset = 0;
    const tab = query.tab || "author";
    const p = tab === "author" ? {
      author: params.username,
      limit,
      offset
    } : {
      favorited: params.username,
      limit,
      offset
    };
    const [articleRes, profileRes] = await Promise.all([Object(api_article["h" /* getArticles */])(p), Object(user["d" /* getUserProfile */])(params.username)]);
    const {
      articles
    } = articleRes.data;
    const {
      profile
    } = profileRes.data;
    return {
      articles,
      profile,
      tab
    };
  },

  watchQuery: ["tab"],
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;

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

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "118f169a"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map