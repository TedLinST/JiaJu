/*
 * @Author: ZengChuangRong 
 * @Date: 2018-10-18 14:08:17 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-10-18 14:51:09
 * 
 * 分页控件
 * 
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeyPaginatorComponent } from "./paginator.component";
import { KeyButtonModule } from "../button/button.module";
import { KeyDocumentClickEventModule } from "../directive/document-click-event.module";

@NgModule({
    imports: [
        CommonModule,
        KeyButtonModule,
        KeyDocumentClickEventModule
    ],
    exports: [
        KeyPaginatorComponent
    ],
    declarations: [
        KeyPaginatorComponent
    ]
})
export class KeyPaginatorModule {

}
