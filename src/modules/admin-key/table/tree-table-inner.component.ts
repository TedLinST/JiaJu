/**
 * Created by Z.cr on 2018-2-8.
 * 提供给 CkTableComponent、CkTableSplitComponent、CkTreeTableComponent、CkTreeTableSplitComponent 控件使用
 *
 * 基本用例
 * <key-table-inner #rightTable
 *     [selectModel]="selectModel"
 *     [idField]="idField"
 *     [columns]="columns"
 *     [columnsFormat]="columnsFormat"
 *     [columnsBottomFormat]="columnsBottomFormat"
 *     [data]="dataToRender"
 *     [selection]="selection"
 *     [summary]="summary"
 *     [editingRealTime]="editingRealTime"
 *     [headerLevel]="headerLevel"
 *     [hasEmptyColumn]="hasEmptyColumn"
 *     [updateEmptyColumn]="updateEmptyColumn"
 *     [hasSerialNumber]="hasSerialNumber"
 *     [paginator]="paginator"
 *     [pageStartRow]="pageStartRow"
 *     [loadingHeading]="loadingHeading"
 *     (sortChange)="onColumnSort($event)"
 *     (cellClick)="onCellClick($event)">
 * </key-table-inner>
 *
 */

import {
    Component, ElementRef, Input, OnInit, Renderer2,
    ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter
} from "@angular/core";
import { KeyTableInnerComponent } from "./table-inner.component";
import { ComponentHelper } from '../common/component-helper';

@Component({
    selector: "key-tree-table-inner",
    templateUrl: "./tree-table-inner.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyTreeTableInnerComponent extends KeyTableInnerComponent implements OnInit {


    // 树形结构表格行数据展开或者收拢，触发该回调事件
    @Output() treeToggleChange: EventEmitter<any> = new EventEmitter<any>();

    // 树形结构的表格，默认为 false
    @Input() treeTable: boolean = false;

    // 树形结构时，树形展开收拢偏移数,默认偏移8px，等于0时，不发生位移
    @Input() treeShiftingNumber: number = 8;

    constructor(element: ElementRef, componentHelper: ComponentHelper, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef) {
        super(element, componentHelper, renderer, changeDetectorRef);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    /**
     * 树形结构表格行数据展开或者收拢
     *
     * 相关事件
     * treeToggleChange 树形结构表格行数据展开或者收拢变更事件
     *
     * @param expanded
     */
    treeToggle(expanded: boolean) {
        this.treeToggleChange.emit({
            expanded: expanded
        });
    }

    /**
     * 通过 idField 或者 index 跟踪迭代中的表格内容数据(提高性能)
     * @param index
     * @param record
     * @returns {number}
     */
    dataTrackBy(index: number, record: any) {
        return this.idField ? record.data[this.idField] : index;
    }

}
