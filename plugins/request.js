/**
 * 基于 axios 封装的请求插件
 */

import axios from "axios";
import { state } from "../store";

// 创建请求对象
export const request = axios.create({
  baseURL: "https://conduit.productionready.io",
  //  baseURL: 'http://127.0.0.1:3001'
});
// 通过插件机制获取到上下文对象 (query,params,req,res,app,store...)
// 插件导出函数必须作为default成员
export default ({ store }) => {
  // 请求拦截器
  // 任何请求都要经过请求拦截器
  // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置token
  request.interceptors.request.use(
    function(config) {
      // 在发送请求之前做些什么
      // 请求就会经过之里
      const { user } = store.state;
      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`;
      }
      // 返回config 请求配置对象
      return config;
    },
    function(error) {
      // 如果请求失败，（此时请求还没有发出去）
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
};
