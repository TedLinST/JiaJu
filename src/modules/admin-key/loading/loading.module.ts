/*
 * @Author: ZengChuangRong 
 * @Date: 2018-09-27 09:15:23 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-09-27 09:17:50
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeyLoadingTableComponent } from "./loading-table.component";
import { KeyLoadingComponent } from "./loading.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        KeyLoadingComponent,
        KeyLoadingTableComponent
    ],
    declarations: [
        KeyLoadingComponent,
        KeyLoadingTableComponent
    ]
})
export class KeyLoadingModule {

}
