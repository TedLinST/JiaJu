/**
 * Created by Z.cr on 2018-2-6.
 * 筛选类型为 combobox
 *
 * 基本用例
 * testData: any[] = [{id: "1", text: "是"}, {id: "2", text: "否"}];
 * <key-table-column heading="测试combobox" key="comboboxKey" width="120" sortable>
 *     <key-table-filter-combobox [data]="testData"></key-table-filter-combobox>
 * </key-table-column>
 *
 */

import { Component, Input } from "@angular/core";
import { KeyTableFilterTextComponent } from "./table-filter-text.component";

@Component({
    selector: "key-table-filter-combobox",
    template: "",
    providers: [
        { provide: KeyTableFilterTextComponent, useExisting: KeyTableFilterComboboxComponent }
    ]
})
export class KeyTableFilterComboboxComponent {

    // 下拉列表框数据源
    @Input() data: any[];

    // 下拉列表框分组标识
    @Input() groupField: string = null;

    // 下拉列表框名称标识
    @Input() textField: string = "text";

    // 下拉列表框 id 标识
    @Input() idField: string = "id";

    // 筛选标识，默认为（列项的字段 key ）
    @Input() queryField: string;

    /**
     * 获取条件符号
     * @returns {[{value: number, text: string}]}
     */
    get sign(): any[] {
        return [
            { value: 5, text: "等于" },
            { value: 9, text: "排除" }
        ];
    }
}
