/**
 * Created by Z.cr on 2018-2-6.
 * 筛选类型为 number
 *
 * 基本用例
 * <key-table-column heading="测试number" key="numberKey" width="120" sortable>
 *     <key-table-filter-number></key-table-filter-number>
 * </key-table-column>
 *
 */

import { Component, Input } from "@angular/core";
import { KeyTableFilterTextComponent } from "./table-filter-text.component";

@Component({
    selector: "key-table-filter-number",
    template: "",
    providers: [
        { provide: KeyTableFilterTextComponent, useExisting: KeyTableFilterNumberComponent }
    ]
})
export class KeyTableFilterNumberComponent {

    // 筛选标识，默认为（列项的字段 key ）
    @Input() queryField: string;

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
