/**
 * Created by Z.cr on 2018-2-6.
 * 筛选类型为 text
 *
 * 基本用例
 * <key-table-column heading="测试text" key="textKey" width="120" sortable>
 *     <key-table-filter-text></key-table-filter-text>
 * </key-table-column>
 *
 */

import { Component, Input } from "@angular/core";

@Component({
    selector: "key-table-filter-text",
    template: ""
})
export class KeyTableFilterTextComponent {

    // 筛选标识，默认为（列项的字段 key ）
    @Input() queryField: string;

    /**
     * 获取条件符号
     * @returns {[{value: number, text: string}]}
     */
    get sign(): any[] {
        return [
            { value: 6, text: "模糊" },
            { value: 5, text: "等于" },
            { value: 7, text: "开始" },
            { value: 8, text: "结尾" }
        ];
    }
}
