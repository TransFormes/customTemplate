import axios, { Method, AxiosRequestConfig } from 'axios';
import { PenddingUrl, ResponseCode } from './response'

const intance = axios.create({
    baseURL: import.meta.env.MODE === 'development' ? "https://www.xuanfuai.com/" : "https://www.xuanfuai.com/",
    headers: {
        "content-type": "application/x-www-form-urlencoded"
    }
});

const penddingUrl: Array<PenddingUrl> = [];

function removePending(url: string | undefined) {
    for (let i = 0; i < penddingUrl.length; i++) {
        if (penddingUrl[i].url === url) {
            penddingUrl[i].f();
            penddingUrl.slice(i, 1);
        }
    }
}

const CancelToken = axios.CancelToken;

intance.interceptors.request.use((conf) => {
    conf.headers["token"] = "pc|std|c63aee9559de4fd0926c";
    removePending(conf.url);
    conf.cancelToken = new CancelToken((c) => {
        penddingUrl.push({
            url: conf.url,
            f: c
        });
    })
    return conf;
}, err => {
    return err;
})


export default function request<T>(url: string, method: Method, data: object, responseType: AxiosRequestConfig['responseType'] = 'json'): Promise<T> {
    return new Promise((resolve, reject) => {
        const options: AxiosRequestConfig = {
            url,
            method,
            responseType
        };
        if (method === 'GET') {
            options.params = data;
        } else {
            options.data = data;
        }
        intance(options).then(res => {
            const resData: ResponseCode<T> = res.data;
            if (resData.code === 200) {
                resolve(resData.multidata);
            }
        }).catch(err => {
            reject(err)
        })
    })
}