/**
 * Created by Z.cr on 2018-1-30.
 *
 * TODO: 待引入更多的表单控件（增强用户体验）
 *
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeyElementComponent } from "./element/element.component";
import { KeyElementInlineComponent } from "./element/element-inline.component";
import { KeyElementInlineSubComponent } from "./element/element-inline-sub.component";
import { KeyMonthInputMaxValueDirective } from "./input/month-input.directive";
import { KeyDateInputMaxValueDirective } from "./input/date-input.directive";
import { KeySearchInputDirective } from "./input/search-input.directive";
import { KeyComboboxComponent } from "./combobox/combobox.component";
import { KeyCheckboxComponent } from "./checkbox/checkbox.component";
import { KeyCheckboxGroupComponent } from "./checkbox/checkbox-group.component";
import { KeyRadioComponent } from "./radio/radio.component";
import { KeyRadioGroupComponent } from "./radio/radio-group.component";
import { KeyCopyFieldDataComponent } from "./tool/copy-field-data.component";
import { KeyDocumentClickEventModule } from "../directive/document-click-event.module";
import { KeyElementViewComponent } from "./element/element-view.component";

@NgModule({
    imports: [
        CommonModule,
        KeyDocumentClickEventModule
    ],
    exports: [
        KeyElementComponent,
        KeyElementViewComponent,
        KeyElementInlineComponent,
        KeyElementInlineSubComponent,
        KeyComboboxComponent,
        KeyCheckboxComponent,
        KeyCheckboxGroupComponent,
        KeyRadioComponent,
        KeyRadioGroupComponent,
        KeyDateInputMaxValueDirective,
        KeyMonthInputMaxValueDirective,
        KeySearchInputDirective,

        KeyCopyFieldDataComponent
    ],
    declarations: [
        KeyElementComponent,
        KeyElementViewComponent,
        KeyElementInlineComponent,
        KeyElementInlineSubComponent,
        KeyComboboxComponent,
        KeyCheckboxComponent,
        KeyCheckboxGroupComponent,
        KeyRadioComponent,
        KeyRadioGroupComponent,
        KeyDateInputMaxValueDirective,
        KeyMonthInputMaxValueDirective,
        KeySearchInputDirective,
        KeyCopyFieldDataComponent
    ]
})
export class KeyFormsModule {

}
