export class Utils {

    /**
     * 生成一个随机数
     * @returns {string}
     */
    public static generateRandomIndex(): string {
        return Math.random().toString(36).substring(7);
    }

    /**
     * 判断对象是否为日期对象
     * @param value 
     */
    public static isDate(value: any) {
        return Object.prototype.toString.call(value) === '[object Date]';
    }

    /**
     * 格式化日期
     * @param date 
     * @param type 
     * @param dateSignTemp 
     * @param timeSignTemp 
     */
    public static formatTime(date: any, type: 'date' | 'dateYM' | 'time' | 'timeHM' | 'datetime' = 'date', dateSignTemp?: string, timeSignTemp?: string) {
        if (!Utils.isDate(date)) {
            date = new Date(date);
        }
        const dateSign = dateSignTemp ? dateSignTemp : '-';
        const timeSign = timeSignTemp ? timeSignTemp : ':';
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        let dateFormat = '';
        if (type == 'date') {
            dateFormat = [year, month, day].map(Utils.formatNumber).join(dateSign);
        } else if (type == 'dateYM') {
            dateFormat = [year, month].map(Utils.formatNumber).join(dateSign);
        } else if (type == 'time') {
            dateFormat = [hour, minute, second].map(Utils.formatNumber).join(timeSign);
        } else if (type == 'timeHM') {
            dateFormat = [hour, minute].map(Utils.formatNumber).join(timeSign);
        } else if (type == 'datetime') {
            dateFormat = [year, month, day].map(Utils.formatNumber).join(dateSign) + ' ' + [hour, minute, second].map(Utils.formatNumber).join(timeSign);
        }
        return dateFormat;
    }

    /**
     * 获取当前系统时间
     * @param type 
     */
    public static getSystemDate(type: 'date' | 'dateYM' | 'time' | 'timeHM' | 'datetime' = 'date') {
        return Utils.formatTime(new Date(), type);
    }

    /**
     * 数组随机排序
     * @param arr 
     */
    public static arrayRandomSort(arr: any[]) {
        let i = arr.length;
        while (i) {
            const j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    /**
     * 数组根据字段进行排序
     * @param arr 
     * @param key 
     * @param order 
     * @param isNumber
     */
    public static arrayKeySort(arr: any[], key: any, order: -1 | 0 | 1 = 0, isNumber?: boolean) {
        arr.sort((data1, data2) => {
            let value1 = key ? data1[key] : "";
            let value2 = key ? data2[key] : "";
            let result: any = null;
            // 转数字类型
            if (isNumber && typeof value1 == "string" && typeof value2 == "string") {
                value1 = value1.replace(/[^0-9]/ig, "");
                value2 = value2.replace(/[^0-9]/ig, "");
            }
            if (typeof value1 == "string" && typeof value2 == "string") {
                result = value1.localeCompare(value2);
            } else if (typeof value1 == "number" && typeof value2 == "number") {
                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
            } else if (!!!value1 && value2 != null) {
                result = -1;
            } else if (value1 != null && !!!value2) {
                result = 1;
            } else if (!!!value1 && !!!value2) {
                result = 0;
            }
            return (order * result);
        });
        return arr;
    }

    /**
     * 产生随机整数，包含下限值，包括上限值
     * @param lower 下限
     * @param upper 上限
     * 返回在下限到上限之间的一个随机整数
     */
    public static randomNumber(lower: number = 1, upper: number = 100) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }

    /**
     * 对将要作为正则表达式的文本进行处理，如下拉框的过滤筛选。
     * @param queryToEscape
     * @returns {string}
     */
    public static escapeRegexp(queryToEscape: string): string {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    /**
     * 数据过滤
     * @param data 数据源
     * @param filters 过滤器 filters：{'key1':['value1','value2','value3'],'key2':['value4','value5','value6']}
     */
    public static dataFilter(data: any[], filters: any) {
        let keys = Object.keys(filters)
        let result = data.filter((item: any) => {
            let boolean = keys.every((key: any) => {
                return filters[key].indexOf(item[key]) !== -1;
            });
            return boolean;
        });
        return result;
    }

    /**
     * 数据分页
     * @param data 数据源
     * @param pageIndex 页下标
     * @param pageSize 页大小
     */
    public static dataPagination(data: any, pageIndex: number, pageSize: number) {
        let offset = (pageIndex - 1) * pageSize;
        return (offset + pageSize >= data.length) ? data.slice(offset, data.length) : data.slice(offset, offset + pageSize);
    }

    /**
     * 克隆对象
     * @param obj 克隆的对象
     * @returns {any} 返回克隆的对象
     */
    public static clone(obj: any) {
        let o: any;
        if (typeof obj == "object") {
            if (obj === null) {
                o = null;
            } else {
                if (obj instanceof Array) {
                    o = [];
                    for (let i = 0, len = obj.length; i < len; i++) {
                        o.push(Utils.clone(obj[i]));
                    }
                } else {
                    o = {};
                    for (let j in obj) {
                        o[j] = Utils.clone(obj[j]);
                    }
                }
            }
        } else {
            o = obj;
        }
        return o;
    }

    /**
     * 删除数组中，指定的对象
     * @param array 数组
     * @param removeEl 指定对象
     */
    public static arrayRemove(array: any[], removeEl: any) {
        if (array == null || removeEl == null) {
            return;
        }
        if (Array.isArray(removeEl)) {
            for (let j = 0, jlen = removeEl.length; j < jlen; j++) {
                for (let i = 0, ilen = array.length; i < ilen; i++) {
                    if (array[i] === removeEl[j]) {
                        array.splice(i, 1);
                        break;
                    }
                }
            }
        } else {
            for (let i = 0, len = array.length; i < len; i++) {
                if (array[i] === removeEl) {
                    array.splice(i, 1);
                    return;
                }
            }
        }
    }

    /**
     * 删除左右两端的空格
     * @param str
     */
    public static trim(str: any) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    /**
     * 删除左边的空格 TODO: 待验证
     * @param str
     */
    public static ltrim(str) {
        return str.replace(/(^\s*)/g, "");
    }

    /**
     * 删除右边的空格 TODO: 待验证
     * @param str
     */
    public static rtrim(str) {
        return str.replace(/(\s*$)/g, "");
    }

    /**
     * 设置 Cookie
     * @param name 名称
     * @param value 值
     * @param days 天数
     */
    public static setCookie(name: any, value: any, days?: number) {
        let date = new Date();
        if (!!days) {
            // 设置过期时间
            date.setDate(date.getDate() + days);
            document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date;
        } else {
            document.cookie = name + "=" + encodeURIComponent(value);
        }
    }

    /**
     * 获取 Cookie
     * @param name 名称
     * @returns {any}
     */
    public static getCookie(name: any) {
        let cookie: any = document.cookie;
        if (!!cookie) {
            let cookieArray: any[] = cookie.split(";");
            if (cookieArray != null && cookieArray.length > 0) {
                for (let i = 0, len = cookieArray.length; i < len; i++) {
                    let nameKeyArray: any[] = cookieArray[i].split("=");
                    let key: any = Utils.trim(nameKeyArray[0]);
                    if (key === name) {
                        let getName: any = decodeURIComponent(nameKeyArray[1]);
                        return getName;
                    }
                }
            }
        }
        return "";
    }

    /**
     * 删除 Cookie
     * @param name 名称
     */
    public static removeCookie(name: any) {
        Utils.setCookie(name, "1", -1);
    }

    /**
     * 格式化成两位数的数字
     */
    public static formatNumber = (n: number) => {
        const str = n.toString();
        return str[1] ? str : '0' + str;
    }

}
