import apiConfig from './apiConfig.js'
import Axios from 'axios'
const BASE_URL = '';
const apiRequestHandler = function(parent, current, dataConfig) {
    return new Promise((resolve, reject) => {
        let now = apiConfig[parent][current];
        Axios[now.type](BASE_URL + now.url, {
            data: dataConfig
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}
export default apiRequestHandler