/*
 * @Author: ZengChuangRong 
 * @Date: 2018-09-10 17:33:25 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-10-24 15:33:32
 */

import { Injectable, Injector } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";


@Injectable()
export class ComponentHelper {

    public injector: Injector;

    public constructor(injector: Injector) {
        this.injector = injector;
    }

    /**
     * 获取 DOM 文档
     * @returns {Document}
     */
    public getDocument(): any {
        return this.injector.get(DOCUMENT);
    }

}
