/*
 * @Author: ZengChuangRong 
 * @Date: 2018-09-27 15:56:35 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-12-21 17:07:32
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { KeyButtonModule } from "../button/button.module";
import { KeyFormsModule } from "../forms/forms.module";
import { KeyTableComponent } from "./table.component";
import { KeyTableColumnComponent } from "./table-column.component";
import { KeyTableFilterComponent } from "./filter/table-filter.component";
import { KeyTableFilterTextComponent } from "./filter/table-filter-text.component";
import { KeyTableFilterComboboxComponent } from "./filter/table-filter-combobox.component";
import { KeyTableFilterDateComponent } from "./filter/table-filter-date.component";
import { KeyTableFilterNumberComponent } from "./filter/table-filter-number.component";
import { KeyTableEditorComponent } from "./editor/table-editor.component";
import { KeyTableEditorTextComponent } from "./editor/table-editor-text.component";
import { KeyTableEditorNumberComponent } from "./editor/table-editor-number.component";
import { KeyTableEditorDateComponent } from "./editor/table-editor-date.component";
import { KeyTableInnerComponent } from "./table-inner.component";
import { KeyTableHeadingComponent } from "./table-heading.component";
import { KeyTableCellComponent } from "./table-cell.component";
import { KeyTableSplitComponent } from "./table-split.component";
import { KeyTreeTableComponent } from "./tree-table.component";
import { KeyTreeTableSplitComponent } from "./tree-table-split.component";
import { KeyTableEditorComboboxComponent } from "./editor/table-editor-combobox.component";
import { KeyLoadingModule } from "../loading/loading.module";
import { KeyTreeModule } from "../tree/tree.module";
import { KeyPaginatorModule } from "../paginator/paginator.module";
import { KeyTreeTableInnerComponent } from "./tree-table-inner.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        KeyButtonModule,
        KeyFormsModule,
        KeyLoadingModule,
        KeyTreeModule,
        KeyPaginatorModule
    ],
    exports: [
        KeyTableComponent,
        KeyTableSplitComponent,
        KeyTreeTableComponent,
        KeyTreeTableSplitComponent,
        KeyTableColumnComponent,
        KeyTableInnerComponent,
        KeyTreeTableInnerComponent,
        KeyTableHeadingComponent,
        KeyTableCellComponent,
        KeyTableFilterComponent,
        KeyTableFilterComboboxComponent,
        KeyTableFilterDateComponent,
        KeyTableFilterNumberComponent,
        KeyTableFilterTextComponent,
        KeyTableEditorComponent,
        KeyTableEditorTextComponent,
        KeyTableEditorNumberComponent,
        KeyTableEditorDateComponent,
        KeyTableEditorComboboxComponent
    ],
    declarations: [
        KeyTableComponent,
        KeyTableSplitComponent,
        KeyTreeTableComponent,
        KeyTreeTableSplitComponent,
        KeyTableColumnComponent,
        KeyTableInnerComponent,
        KeyTreeTableInnerComponent,
        KeyTableHeadingComponent,
        KeyTableCellComponent,
        KeyTableFilterComponent,
        KeyTableFilterComboboxComponent,
        KeyTableFilterDateComponent,
        KeyTableFilterNumberComponent,
        KeyTableFilterTextComponent,
        KeyTableEditorComponent,
        KeyTableEditorTextComponent,
        KeyTableEditorNumberComponent,
        KeyTableEditorDateComponent,
        KeyTableEditorComboboxComponent
    ]
})
export class KeyTableModule {

}
