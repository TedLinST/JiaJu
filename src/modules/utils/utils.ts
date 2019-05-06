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
     * 格式化成两位数的数字
     */
    public static formatNumber = (n: number) => {
        const str = n.toString();
        return str[1] ? str : '0' + str;
    }

}
