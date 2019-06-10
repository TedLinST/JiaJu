/**
 * Created by Z.cr on 2018-2-8.
 * 列项单元格控件
 * 提供给 CkTableInnerComponent 控件使用
 *
 * 基本用例
 * <key-table-cell [column]="col" [row]="row.data" [index]="i" [value]="row.data[col.key]"></key-table-cell>
 */

import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from "@angular/core";
import { KeyTableColumnComponent } from "./table-column.component";

@Component({
    selector: "key-table-cell",
    templateUrl: "./table-cell.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyTableCellComponent implements OnChanges {

    // 标签组件（key-table-column）
    @Input() column: KeyTableColumnComponent;

    // 行数据
    @Input() row: any;

    // 行下标
    @Input() index: number;

    // 列项名称
    @Input() value: any;

    // 汇总总行数，默认为 0
    @Input() summaryRow: number = 0;

    // 标签内 Template 上下文内容，默认为标签的名称
    context: any;

    ngOnChanges(changes: SimpleChanges) {
        // 判断 key-table-column 控件下是否有 Template
        this.context = {
            "\$implicit": this.value, // 默认值
            "col": this.column,
            "row": this.row,
            "index": this.index,
            "summaryRow": this.summaryRow
        };
    }

}
