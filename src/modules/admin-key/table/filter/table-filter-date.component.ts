/**
 * Created by Z.cr on 2018-2-6.
 * 筛选类型为 data（包含其他的日期类型，例如: month）
 *
 * 基本用例
 * <key-table-column heading="测试data" key="dataKey" width="120" sortable>
 *     <key-table-filter-data type="month"></key-table-filter-data>
 * </key-table-column>
 *
 */

import { Component, Input } from "@angular/core";
import { KeyTableFilterTextComponent } from "./table-filter-text.component";

@Component({
    selector: "key-table-filter-date",
    template: "",
    providers: [
        { provide: KeyTableFilterTextComponent, useExisting: KeyTableFilterDateComponent }
    ]
})
export class KeyTableFilterDateComponent {

    // 筛选标识，默认为（列项的字段 key ）
    @Input() queryField: string;

    // 日期类型，默认为 date
    @Input() type: string = "date";

    /**
     * 获取条件符号
     * @returns {[{value: number, text: string}]}
     */
    get sign(): any[] {
        return [
            { value: 1, text: ">" },
            { value: 2, text: ">=" },
            { value: 5, text: "=" },
            { value: 4, text: "<=" },
            { value: 3, text: "<" }
        ];
    }
}
