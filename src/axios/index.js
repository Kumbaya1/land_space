import axios from 'axios'
export default class Axios {
    static ajax({ url = "", method = "get", params = {} }) {
        return new Promise((resolve, reject) => {
            const baseUrl = "http://www.xxxx.com/";
            let config = {
                url,
                baseUrl,
                method
            };
            if (method === "get") {
                config.params = params;
            } else if (method === "post") {
                config.data = params;
            }
            axios(config).then(res => {
                if(res.status == '200'){
                    resolve(res.data)
                }else{
                    reject(res.data)
                }
            })
        })
    }
}