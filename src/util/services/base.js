import axios from 'axios'

const globalOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

export class BaseService {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    get(url, options) {
        return this._request('get', url, null, options)
    }

    post (url, data, options) {
        return this._request('post', url, data, options)
    }

    put(url, options){
        return this._request('put', url, null, options)
    }

    delete(url, options) {
        return this._request('delete', url, null, options);
    }

    _request (method, url, data, options = {}) {
        const headers = Object.assign({}, globalOptions.headers, options.headers)
        const opt = {
            baseURL: this.baseURL,
            withCredentials: true,
            method,
            url,
            data,
            params: options.params || {},
            headers
        }
        return axios(opt)
            .then(res => {
                return res
            })
            .catch(error => {
                console.error(error)
            })
    }
}
