import axios from 'axios'
import qs from 'qs'
import store from "@/store/store"
// 统一配置
let FEBS_REQUEST = axios.create({
    baseURL: 'http://10.100.82.185:9527',
    responseType: 'json',
    // validateStatus(status) {
    //     // 200 外的状态码都认定为失败
    //     return status === 200
    // }
})

// 拦截请求
FEBS_REQUEST.interceptors.request.use((config) => {
    // let expireTime = store.state.account.expireTime
    // let now = moment().format('YYYYMMDDHHmmss')
    // // 让token早10秒种过期，提升“请重新登录”弹窗体验
    // if (now - expireTime >= -10) {
    //     Modal.error({
    //         title: '登录已过期',
    //         content: '很抱歉，登录已过期，请重新登录',
    //         okText: '重新登录',
    //         mask: false,
    //         onOk: () => {
    //             return new Promise((resolve, reject) => {
    //                 db.clear()
    //                 location.reload()
    //             })
    //         }
    //     })
    // }
    // 有 token就带上
    if (store.state.token) {
        config.headers.Authentication = store.state.token
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// // 拦截响应
// FEBS_REQUEST.interceptors.response.use((config) => {
//     return config
// }, (error) => {
//     if (error.response) {
//         let errorMessage = error.response.data === null ? '系统内部异常，请联系网站管理员' : error.response.data.message
//         switch (error.response.status) {
//             case 404:
//                 notification.error({
//                     message: '系统提示',
//                     description: '很抱歉，资源未找到',
//                     duration: 4
//                 })
//                 break
//             case 403:
//             case 401:
//                 notification.warn({
//                     message: '系统提示',
//                     description: '很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效',
//                     duration: 4
//                 })
//                 break
//             default:
//                 notification.error({
//                     message: '系统提示',
//                     description: errorMessage,
//                     duration: 4
//                 })
//                 break
//         }
//     }
//     return Promise.reject(error)
// })

export default class Axios {
    static post(url, params = {}) {
        return new Promise((resolve, reject) => {
            FEBS_REQUEST.post(url, qs.stringify(params), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res => {
                if (res.status == '200') {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            FEBS_REQUEST.get(url, { params }).then(res => {
                if (res.status == '200') {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
}

const roles = {
    "一张图": { "role": "onepic" },
    "规划辅助编制": {
        "现状分析": {
            "role": "present",
            "children": {
                "自然资源分析": {
                    "role": "zranalysis"
                },
                "国土空间保护": {
                    "role": "protect"
                },
                "国土空间开发": {
                    "role": "development"
                },
                "城市运行情况": {
                    "role": "running"
                }
            }
        },
        "双评价": {
            "role": "evaluation",
            "children": {
                "资源环境承载能力评价": {
                    "children": {
                        "数据准备": {
                            "role": "datapre"
                        },
                        "要素单项评价": {
                            "children": {
                                "土地资源评价": {
                                    "role": "landeva"
                                },
                                "水资源评价": {
                                    "role": "watereva"
                                },
                                "海洋资源评价": {
                                    "role": "seaeva"
                                },
                                "环境资源评价": {
                                    "role": "enveva"
                                },
                                "生态资源评价": {
                                    "role": "ecologyeva"
                                },
                                "灾害资源评价": {
                                    "role": "disaster"
                                }
                            }
                        },
                        "集成评价": {
                            "role": "integrated"
                        }
                    }
                },
                "国土空间开发适宜性评价": {
                    "role": "gtland"
                },
                "综合分析": {
                    "role": "zhanalysis"
                },
                "文化保护空间评价": {
                    "role": "whprotect"
                }
            }
        },
        "三区三线划定": {
            "role": "delimitation"
        },
        "发展预测": {
            "role": "forecast"
        },
        "要素配置": {
            "role": "factor"
        }
    },
    "规划辅助审查": { "role": "review" },
    "用途管制": { "role": "usage" },
    "监测评估预警": { "role": "monitoring" },
    "公众服务": { "role": "service" }
}