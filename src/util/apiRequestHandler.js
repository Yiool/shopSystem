import apiConfig from "./apiConfig.js";
import Axios from "axios";
import { Loading, Message } from "element-ui";
import Router from "../router/index";

/**
 * 请求拦截器
 */
Axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 */
Axios.interceptors.response.use(
  response => {
    // 自定义返回码 作不同处理
    const data = response.data;
    if (data && data.status)
      switch (data.status) {
        // 登录超时
        case 400001:
          Message.error({
            message: "登录超时，请重新登录"
          });
          Router.push({ path: "/login" });
          break;
      }
    return response;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "请求错误";
          Message.error({
            message: err.message
          });
          break;

        case 401:
          err.message = "登录超时，请重新登录";
          Message.error({
            message: err.message
          });
          Router.push({ path: "/login" });
          break;

        case 403:
          err.message = "拒绝访问";
          Message.error({
            message: err.message
          });
          break;

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`;
          Message.error({
            message: err.message
          });
          break;

        case 408:
          err.message = "请求超时";
          Message.error({
            message: err.message
          });
          break;

        case 500:
          err.message = "服务器内部错误";
          Message.error({
            message: err.message
          });
          break;

        case 501:
          err.message = "服务未实现";
          Message.error({
            message: err.message
          });
          break;

        case 502:
          err.message = "网关错误";
          Message.error({
            message: err.message
          });
          break;

        case 503:
          err.message = "服务不可用";
          Message.error({
            message: err.message
          });
          break;

        case 504:
          err.message = "网关超时";
          Message.error({
            message: err.message
          });
          break;

        case 505:
          err.message = "HTTP版本不受支持";
          Message.error({
            message: err.message
          });
          break;

        default:
      }
    }
    // 对响应错误做点什么
    return Promise.reject(err);
  }
);

const BASR_URL = "http://localhost:8088/api/v1";

const apiRequestHandler = function(parent, current, dataConfig) {
  return new Promise((resolve, reject) => {
    let now = apiConfig[parent][current];
    /**
     * 默认axios配置
     * 1.根路径
     * 2.超时时间
     * 3.请求路径（这里的url等于 根路径baseURL加上传入的路径）
     */
    let DEFAULT_AXIOS_CONFIG = {
      baseURL: BASR_URL,
      timeout: 5000,
      url: now.url,
      method: now.type,
      withCredentials: true, //设置跨域请求时携带在cookie中携带session信息
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    };

    /**
     *
     * 1.t 请求时间戳、防止浏览器缓存，保证获取到最新数据
     */
    const token = window.sessionStorage.getItem('token');
    let DEFAULT_PARAMS = {
      t: +new Date(),
      token
    };

    /**
     * 区别get和post请求 做不同配置
     * 1.get  携带参数写法为：params:{}
     * 2.post 携带参数写法为：data：{}
     */
    if (now.type === "get" || now.type === "delete") {
      let params = _.assign({}, DEFAULT_PARAMS, dataConfig);
      DEFAULT_AXIOS_CONFIG = _.assign({}, DEFAULT_AXIOS_CONFIG, {
        params: params
      });
    } else if (now.type === "post") {
      let data = _.assign({}, DEFAULT_PARAMS, dataConfig);
      DEFAULT_AXIOS_CONFIG = _.assign({}, DEFAULT_AXIOS_CONFIG, {
        data: data
      });
    }

    Axios(DEFAULT_AXIOS_CONFIG)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        /* Message.error({
          message: 'something error'
        }); */
        reject(err);
      });
  });
};
export default apiRequestHandler;
