import { request } from "@/plugins/request";

// 用户登录
export const login = (data) => {
  return request({
    method: "POST",
    url: "/api/users/login",
    data,
  });
};


// 用户注册
export const register = (data) => {
  return request({
    method: "POST",
    url: "/api/users",
    data,
  });
};

// 获取当前用户信息
export const getUser = () => {
  return request({
    method: "get",
    url: "/api/user"
  });
};

// 更新当前用户信息
export const updateUser = (data) => {
  return request({
    method: "put",
    url: "/api/user",
    data
  });
};

// 获取当前用户profile
export const getUserProfile = (username) => {
  return request({
    method: "get",
    url: `/api/profiles/${username}`
  });
};

// Follow user
export const addFollow = (username) => {
  return request({
    method: "post",
    url: `/api/profiles/${username}/follow`
  });
};

// Unfollow user
export const deleteFollow = (username) => {
  return request({
    method: "DELETE",
    url: `/api/profiles/${username}/follow`
  });
};
