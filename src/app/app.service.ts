import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { never } from 'rxjs';

export interface RequestEvent {
    controller?: string;
    fileName?: string;
    url?: string;
    method?: string;
    params?: any;
    type?: string;
}

@Injectable({
    providedIn: 'root',
})
export class AppService {

    // 服务器地址
    public static SERVER_URL_BASE = 'http://localhost:8024/FP/';

    // 跨域资源共享
    private static CORS = true;

    // 会话超时状态
    public static SESSION_TIMEOUT = false;

    // 请求历史 URL
    private historyConfig: any = {};

    constructor(private http: HttpClient) {
    }

    /**
     * 请求函数
     * @param config 
     */
    public request(config: RequestEvent) {
        let params = config.params ? config.params : {};
        let body = this.serialize(this.objectToData(params));
        let url = this.getUrl(config);
        let historyConfig = url + body;
        if (!this.historyConfig[historyConfig]) {
            this.historyConfig[historyConfig] = true;
            return this.http.post(url, body, {
                headers: this.getRequestHeaders(),
                withCredentials: AppService.CORS
            }).pipe(
                map(res => {
                    let resParams = config.params ? config.params : {};
                    let resHistoryConfig = this.getUrl(config) + this.serialize(this.objectToData(resParams));
                    delete this.historyConfig[resHistoryConfig];
                    return res;
                }),
                catchError(this.handleError())
            );
        } else {
            alert("系统正在处理中,请稍等！");
            return never();
        }
    }

    /**
     * 获取头信息
     */
    private getRequestHeaders() {
        return {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    }

    /**
     * 获取 url
     * @param config 
     */
    private getUrl(config: RequestEvent): string {
        if (config.url) {
            return config.url;
        } else {
            let method = config.method ? "_" + config.method : '';
            return AppService.SERVER_URL_BASE + config.controller + method + ".do";
        }
    }

    /**
     * 数据进行序列化
     * 以键值对形式?key1=value1&key2=value2的方式发送到服务器
     * @param o 
     */
    private serialize(o: any) {
        let str = [];
        for (let p in o) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(o[p]));
        }
        return str.join("&");
    }

    /**
     * 将对象转化成数据
     * @param o 
     * @param prefix 
     * @param form 
     */
    private objectToData(o: any, prefix?: string, form?: any) {
        if (form == null) {
            form = {};
        }
        for (let p in o) {
            let value = o[p];
            if (value == null) {
                continue;
            }
            let prefixT = (prefix ? prefix + '.' : '') + p;
            if (value instanceof Array) {
                for (let i = 0, len = value.length; i < len; i++) {
                    let prefixA = prefixT + '[' + i + ']';
                    let valueA = value[i];
                    if (valueA instanceof Object) {
                        this.objectToData(valueA, prefixA, form);
                    } else {
                        form[prefixA] = valueA;
                    }
                }
            } else if (value instanceof Object) {
                this.objectToData(value, prefixT, form);
            } else {
                form[prefixT] = value;
            }
        }
        return form;
    }

    private objectToFormData(o: any, prefix?: string, form?: FormData) {
        if (form == null) {
            form = new FormData();
        }
        for (let p in o) {
            let value = o[p];
            let prefixT = (prefix ? prefix + '.' : '') + p;
            if (value instanceof File) {
                form.append(prefixT, value);
            } else if (value instanceof Array) {
                for (let i = 0, len = value.length; i < len; i++) {
                    let prefixA = prefixT + '[' + i + ']';
                    let valueA = value[i];
                    if (valueA instanceof Object) {
                        this.objectToFormData(valueA, prefixA, form);
                    } else {
                        form.append(prefixA, valueA);
                    }
                }
            } else if (value instanceof Object) {
                this.objectToFormData(value, prefixT, form);
            } else {
                form.append(prefixT, value);
            }
        }
        return form;
    }

    /**
     * 处理错误信息
     */
    private handleError() {
        return (res: any) => {
            this.historyConfig = {};
            if (res.status == 401) {
                AppService.SESSION_TIMEOUT = true;
            } else {
                let errMsg = res.status ? res.status + "-" + res.statusText : "Server error";
                // error属性将包含一个包装的Error对象或从服务器返回的错误响应
                let error: any = res.error;
                // 浏览器控制台输出错误信息
                console.error(error.errorMsg);
            }
            return null;
        };
    }

}
