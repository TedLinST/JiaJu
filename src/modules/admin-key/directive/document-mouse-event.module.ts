/*
 * @Author: ZengChuangRong 
 * @Date: 2018-09-28 14:23:30 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-09-28 14:29:36
 */

import { NgModule } from "@angular/core";
import { ComponentHelper } from "../common/component-helper";
import { KeyDocumentMouseMoveEventDirective, KeyDocumentMouseUpEventDirective } from "./document-mouse-event.directive";

@NgModule({
    exports: [
        KeyDocumentMouseMoveEventDirective,
        KeyDocumentMouseUpEventDirective
    ],
    declarations: [
        KeyDocumentMouseMoveEventDirective,
        KeyDocumentMouseUpEventDirective
    ],
    providers: [
        ComponentHelper
    ]
})
export class KeyDocumentMouseEventModule {

}
