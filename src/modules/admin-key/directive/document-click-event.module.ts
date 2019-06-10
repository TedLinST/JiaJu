/*
 * @Author: ZengChuangRong 
 * @Date: 2018-09-28 14:24:52 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-09-28 14:29:33
 */

import { NgModule } from "@angular/core";
import { KeyDocumentClickEventDirective } from "./document-click-event.directive";
import { ComponentHelper } from "../common/component-helper";

@NgModule({
    exports: [
        KeyDocumentClickEventDirective
    ],
    declarations: [
        KeyDocumentClickEventDirective
    ],
    providers: [ComponentHelper]
})
export class KeyDocumentClickEventModule {

}
