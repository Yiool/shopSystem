import apiConfig from './apiConfig.js'
import Axios from 'axios'
const apiRequestHandler = function (parent, current, dataConfig) {
  return new Promise((resolve, reject) => {
    let now = apiConfig[parent][current];
    let DEFAULT_AXIOS_CONFIG = {
      baseURL: 'http://localhost:8080/api/v1',
      timeout: 5000,
      url: now.url,
      headers:{'Content-Type':'application/x-www-form-urlencoded'}
    };
    console.log(now.type);
    /**
     * get请求
     */
    if (now.type === 'get') {
      DEFAULT_AXIOS_CONFIG = _.assign({}, DEFAULT_AXIOS_CONFIG, {
        params: dataConfig || {}
      });
    } else
    if (now.type === 'post') {
      DEFAULT_AXIOS_CONFIG = _.assign({}, DEFAULT_AXIOS_CONFIG, {
        method:'post',
        data: dataConfig || {}
      }) 
    }
    Axios(DEFAULT_AXIOS_CONFIG).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    })
  })
}
export default apiRequestHandler
