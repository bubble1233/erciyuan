import axios from 'axios';
const qs = require("qs");
var CancelToken = axios.CancelToken;
var source = CancelToken.source();
// 创建axios实例
const service = axios.create({
  baseURL: 'https://www.suzumiya.club',
  // withCredentials: true, // 后端 存储cookie的时候要设置为true不然后端存不了cookie
  transformRequest: [
    function(data) {
      if (data instanceof FormData) {
        return data;
      }
      data = qs.stringify(data);
      return data;
    },
  ],
  timeout: 1000 * 30, // 请求超时时间
  cancelToken: source.token
});

// request拦截器(请求之前的拦截)
service.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// respone拦截器（请求之后的拦截）
service.interceptors.response.use(
  response => {
    if (response.data.error === 401) {
      //router.replace('/login')
      // source.cancel()
    }
    return response;
  },
)

export default service