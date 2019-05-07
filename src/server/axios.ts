import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import localStorage from "@utils/localStorage"
// 接口前缀
const BASE_URL = "http://localhost:3000/api"
const setToken:()=>object = () => {
    const token = localStorage.get('token') || ''
    return token ? { Authorization: `Bearer ${token}` } : {}
}
// axios 配置实例
const getAxiosInstance = (): AxiosInstance => {
    const instance: AxiosInstance = Axios.create({
        baseURL: `${BASE_URL}`
    });
    instance.defaults.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        ...setToken(),
    }
    instance.defaults.timeout = 3500
    instance.interceptors.request.use((config) => {
        // const token = setToken()
        // const {headers} = config
        // if ("Authorization" in token) {
        //     delete headers.Authorization
        // }
        return {
            ...config,
            // headers,
            params: {
                // 此处注意，你的`params`应该是个对象，不能是其他数据类型
                ...(config.params || {}),
                // _: +new Date()
            }
        }
    });

    instance.interceptors.response.use(
        (response) => {
            if (response && response.data) {
                return Promise.resolve(response);
            } else {
                return Promise.reject('response 不存在');
            }
        },
        (error) => {
            console.log('-- error --');
            console.log(error);
            console.log('-- error --');
            return Promise.reject({
                success: false,
                msg: error
            });
        }
    );
    return instance;
};

// 基本返回数据格式
interface BaseResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

// 基本 Ajax 格式 使用泛型
interface BaseAjax {
    get: <T>(url: string, config?: object) => Promise<BaseResponse<T>>;
    delete: <T>(url: string, config?: object) => Promise<BaseResponse<T>>;
    head: <T>(url: string, config?: object) => Promise<BaseResponse<T>>;
    options: <T>(url: string, config?: object) => Promise<BaseResponse<T>>;
    post: <T>(url: string, data?: object, config?: object) => Promise<BaseResponse<T>>;
    put: <T>(url: string, data?: object, config?: object) => Promise<BaseResponse<T>>;
    patch: <T>(url: string, data?: object, config?: object) => Promise<BaseResponse<T>>;
}

// 获取一个 Ajax 实例
const GetAxios = () => {
    const instance: AxiosInstance = getAxiosInstance();
    const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
        return new Promise((resolve, reject) => {
            instance.request<BaseResponse<T>>(config).then((data) => {
                const __data = data.data;
                if (__data.success) {
                    resolve(__data);
                } else {
                    console.log(__data.message);
                    reject(__data);
                }
            });
        });
    };

    // Ajax 实体
    const Ajax: BaseAjax = {
        get: function <T>(url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
            return request<T>(
                Object.assign({}, config, {
                    method: 'GET',
                    url: url,
                    params: data
                })
            );
        },
        delete: function <T>(url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
            return request<T>(
                Object.assign({}, config, {
                    method: 'DELETE',
                    url: url,
                    params: data
                })
            );
        },
        head: function <T>(url: string, config: object = {}): Promise<BaseResponse<T>> {
            return request<T>(
                Object.assign({}, config, {
                    method: 'HEAD',
                    url: url
                })
            );
        },
        options: function <T>(url: string, config: object = {}): Promise<BaseResponse<T>> {
            return request<T>(
                Object.assign({}, config, {
                    method: 'OPTIONS',
                    url: url
                })
            );
        },
        post: function <T>(url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
            return request<T>(
                Object.assign({}, config, {
                    method: 'POST',
                    url: url,
                    data: data
                })
            );
        },
        put: function <T>(url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
            return request<T>(
                Object.assign({}, config, {
                    method: 'PUT',
                    url: url,
                    data: data
                })
            );
        },
        patch: function <T>(url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
            return request<T>(
                Object.assign({}, config, {
                    method: 'PATCH',
                    url: url,
                    data: data
                })
            );
        }
    };

    return Ajax;
};

export const Ajax: BaseAjax = GetAxios();
export type PageResponse = any[];
export default GetAxios;