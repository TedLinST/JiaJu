/**
 * Created by Z.cr on 2018-1-30.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeyButtonComponent } from "./button.component";
import { KeySubButtonComponent } from "./sub-button.component";
import { KeySubButtonHeaderComponent } from "./sub-button-header.component";
import { KeySubButtonLineComponent } from "./sub-button-line.component";
import { KeyDocumentClickEventModule } from "../directive/document-click-event.module";

@NgModule({
    imports: [
        CommonModule,
        KeyDocumentClickEventModule
    ],
    exports: [
        KeyButtonComponent,
        KeySubButtonComponent,
        KeySubButtonHeaderComponent,
        KeySubButtonLineComponent
    ],
    declarations: [
        KeyButtonComponent,
        KeySubButtonComponent,
        KeySubButtonHeaderComponent,
        KeySubButtonLineComponent
    ]
})
export class KeyButtonModule {

}
