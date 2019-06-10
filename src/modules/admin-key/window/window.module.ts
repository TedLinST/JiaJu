/*
 * @Author: ZengChuangRong 
 * @Date: 2018-09-28 14:10:53 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2019-01-16 10:15:45
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeyModalComponent } from "./modal.component";
import { KeyModalPromptComponent } from "./modal-prompt.component";
import { KeyModalElasticComponent } from "./modal-elastic.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        KeyModalComponent,
        KeyModalPromptComponent,
        KeyModalElasticComponent
    ],
    declarations: [
        KeyModalComponent,
        KeyModalPromptComponent,
        KeyModalElasticComponent
    ]
})
export class KeyWindowModule {

}
