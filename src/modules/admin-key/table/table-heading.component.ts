/**
 * Created by Z.cr on 2018-2-8.
 * 列项头标题控件
 * 提供给 KeyTableInnerComponent 控件使用
 *
 * 基本用例
 * <key-table-heading [column]="col" (sort)="onColumnSort(col, $event)" [editable]="editable">
 * </key-table-heading>
 */

import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from "@angular/core";
import { KeyTableColumnComponent } from "./table-column.component";

@Component({
    selector: "key-table-heading",
    templateUrl: "./table-heading.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyTableHeadingComponent {

    // 列项被点击后，触发该排序回调事件
    @Output() sort: EventEmitter<"asc" | "desc"> = new EventEmitter<"asc" | "desc">();

    // 列项信息
    @Input() column: KeyTableColumnComponent;

    // 是否为可编辑表格，默认为 true， 当是分栏表格的时候，左边表格设置为 false （不可编辑）
    @Input() editable: boolean;

    // 获取列项标题
    get heading() {
        return this.column.heading;
    }

    // 获取列项排序状态
    get sortable() {
        return this.column.sortable;
    }

    // 获取列项排序方式
    get sortOrder() {
        return this.column.sortOrder;
    }

    // 列获取列项筛选图标状态
    get filtering() {
        return this.column.filtering;
    }

    // 获取列项编辑图标状态
    get editing() {
        return this.editable && this.column.editing;
    }

    // 是否不进行排序
    get hideSort() {
        return this.column.hasChildColumns();
    }

    // 列项说明
    get explain() {
        return this.column.explain;
    }

    /**
     * 点击列项，触发排序变更事件
     */
    sortChange() {
        this.sort.emit(this.sortOrder === "desc" ? "asc" : "desc");
    }

}
