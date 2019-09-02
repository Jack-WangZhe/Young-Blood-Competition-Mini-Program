import { config } from '../config.js';

class HTTP {
    request(params) {
        // 如果没有传递method，则默认GET
        if (params.method) {
            params.method = "GET";
        }
        wx.request({
            url: `${config.url}params.url`,
            data: params.data,
            method: params.method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // 设置请求的 header
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                let code = res.statusCode;
                //判断如果是2xx则成功
                if (code.startsWith('2')) {

                } else {
                    //其他则异常
                }
            },
            fail: () => {
                // fail
            },
            complete: () => {
                // complete
            }
        })
    }
}
export { HTTP };