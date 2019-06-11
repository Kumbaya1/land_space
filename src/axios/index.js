import axios from 'axios'
export default class Axios {
    static ajax({ url = "", method = "get", params = {} }) {
        return new Promise((resolve, reject) => {
            const baseURL = "https://www.easy-mock.com/mock/5cfb840be5e7b850d846cd62/wd";
            let config = {
                url,
                baseURL,
                method
            };
            if (method === "get") {
                config.params = params;
            } else if (method === "post") {
                config.data = params;
            }
            axios(config).then(res => {
                if (res.status == '200') {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
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