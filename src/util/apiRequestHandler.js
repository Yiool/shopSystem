import apiConfig from './apiConfig.js'
import Axios from 'axios'
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
            baseURL: 'http://localhost:8080/api/v1',
            timeout: 5000,
            url: now.url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        /**
         * 默认请求参数（针对分页）
         * 1.t 请求时间戳、防止浏览器缓存，保证获取到最新数据
         */
        let DEFAULT_PARAMS = {
            t: new Date().getTime()
        }


        /**
         * 区别get和post请求 做不同配置
         * 1.get  携带参数写法为：params:{}
         * 2.post 携带参数写法为：data：{}
         */
        if (now.type === 'get') {
            let params = _.assign({}, DEFAULT_PARAMS, dataConfig);
            DEFAULT_AXIOS_CONFIG = _.assign({}, DEFAULT_AXIOS_CONFIG, {
                params: params
            });
        } else if (now.type === 'post') {
            let data = _.assign({}, DEFAULT_PARAMS, dataConfig);
            DEFAULT_AXIOS_CONFIG = _.assign({}, DEFAULT_AXIOS_CONFIG, {
                method: 'post',
                data: data
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