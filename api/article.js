import { request } from "@/plugins/request";

// 获取公共文章列表
export const getArticles = params => {
  return request({
    method: "get",
    url: "/api/articles",
    params,
  });
};
// 获取关注的用户文章列表
export const getFeedArticles = params => {
  return request({
    method: "get",
    url: "/api/articles/feed",
    params,
  });
};
// 添加文章
export const addArticle = data => {
  return request({
    method: "post",
    url: "/api/articles",
    data,
  });
};
// 删除文章
export const deleteArticle = slug => {
  return request({
    method: "DELETE",
    url: `/api/articles/${slug}`
  });
};
// 获取文章
export const getArticle = slug => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}`
  });
};
// 更新文章
export const updateArticle = (slug, data) => {
  return request({
    method: "put",
    url: `/api/articles/${slug}`,
    data,
  });
};
// 添加点赞
export const addFavorite = slug => {
  return request({
    method: "post",
    url: `/api/articles/${slug}/favorite`
  });
};

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: "delete",
    url: `/api/articles/${slug}/favorite`
  });
};
// 获取文章评论
export const getComments = slug => {
  return request({
    method: "get",
    url: `/api/articles/${slug}/comments`
  });
};
// 添加文章评论
export const addComments = (slug, data) => {
  return request({
    method: "post",
    url: `/api/articles/${slug}/comments`,
    data
  });
};
// 删除文章评论
export const deleteComments = (slug, id) => {
  return request({
    method: "DELETE",
    url: `/api/articles/${slug}/comments/${id}`
  });
};
