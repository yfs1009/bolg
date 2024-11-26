---
icon: pen-to-square
date: 2024-11-26
category:
  - vue2
# tag:
#   - 红
#   - 小
#   - 圆

---

# axios

## axios的封装

<div>在Vue应用程序中，Axios是一个流行的库，用于执行HTTP请求。它基于Promise，可以在浏览器和Node.js中使用。Vue开发者通常会选择Axios来处理API请求，因为它易于使用且功能强大。<br/><br/>代码示例：</div>

<pre>
import axios from 'axios'
import { Message } from 'element-ui'
import {Loading  } from 'element-ui'
 
axios.defaults.withCredentials = true;
let loading;
let loadingNum=0;

function startLoading() {    
    if(loadingNum==0){
        loading = Loading.service({
          lock: true,
          text: '加载中...',
          background:'rgba(255,255,255,0.5)',
        })
    }
    //请求数量加1
    loadingNum++;
}
function endLoading() {
    //请求数量减1
    loadingNum--
    if(loadingNum<=0){
        loading.close()
    }
}

// 域名地址
axios.defaults.baseURL = 'http://192.168.9.26:8080';
 
 
//  REQUEST 请求异常拦截
axios.interceptors.request.use(config => {
    startLoading();
    const token = localStorage.getItem('token');
    // 将Token添加到请求头里面
    token && (config.headers['X-Access-Token'] = token);
    return config;
}, err => {
    // 错误处理
    Message.error({ message: '请求超时!' });
    return Promise.resolve(err);
});
 
//  RESPONSE 响应异常拦截
axios.interceptors.response.use(result => {
/*     if(result.data.message=="Token失效,请重新登录"||res.data.message === 'token非法无效'){

    } */
        endLoading();
        return result


/*     if (result.data.code && result.data.code != 200) {
        Message.error({ message: result.data.msg });
        // 非法进入时直接跳到登录页
        window.location.href = '/';
        return;
    };
    return result; */
}, err => {
 
    if (err && err.response) {
        switch (err.response.status) {
            case 401:
                err.message = '请求方式错误!';
                break;
            case 402:
                err.message = '请求参数错误!';
                break;
            default:
                err.message = `登录凭证过期,请重新登录!`;
        }
    } else {
        err.message = '连接服务器失败!'
    }
 
    Message.error({ message: err.message })
    return Promise.resolve(err);
})
 
// 接口域名
export const url = axios.defaults.baseURL;
 
// POST 方法封装 (处理参数与文件上传)
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: url,
        data: params
    });
}
 
 
//  GET 方法封装
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: url,
        params: params
    });
}
 
//  PUT 方法封装
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: url,
        data: params
    });
}
 
//  DELETE 方法封装
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: url,
        data: params
    });
}
</pre>


 
