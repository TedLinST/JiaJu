/**
 * Created by Z.cr on 2018-2-11.
 * 树结构分栏表格，继承于 KeyTreeTableComponent 控件
 *
 * 基本用例
 *
 * <key-tree-table-split title="树结构分栏" [(selection)]="selectionTree" [data]="dataTree"
 *     >
 *     <div header class="btn-group">
 *         <button class="btn btn-default" (click)="add()">增加</button>
 *         <button class="btn btn-default" (click)="view()" [disabled]="!!!selectionTree">修改</button>
 *         <button class="btn btn-default" (click)="delete()" [disabled]="!!!selectionTree">删除</button>
 *     </div>
 *     <key-table-column heading="列项" key="key1" width="100" sortable></key-table-column>
 *     <key-table-column heading="列项 - 筛选功能" key="key2" width="130" sortable>
 *         <key-table-filter-text></key-table-filter-text>
 *     </key-table-column>
 *     <key-table-column heading="列项 - 编辑功能" key="key3" width="130" sortable>
 *         <key-table-editor-text></key-table-editor-text>
 *     </key-table-column>
 *     <key-table-column heading="列项 - 筛选、编辑功能" key="key4" width="170" sortable>
 *         <key-table-filter-text></key-table-filter-text>
 *         <key-table-editor-text></key-table-editor-text>
 *     </key-table-column>
 *     <key-table-column heading="列项 - 锁定功能" key="key5" width="130" [lock]="true" sortable></key-table-column>
 * </key-tree-table-split>
 *
 */

import { AfterContentInit, ChangeDetectorRef, Component, IterableDiffers, ElementRef, ViewChild } from "@angular/core";
import { KeyTreeTableComponent } from "./tree-table.component";
import { KeyTableColumnComponent } from "./table-column.component";

@Component({
    selector: "key-tree-table-split",
    templateUrl: "./tree-table-split.component.html"
})
export class KeyTreeTableSplitComponent extends KeyTreeTableComponent implements AfterContentInit {

    // 分栏表格状态
    split: boolean;

    // 鼠标指针所指定的表格
    mouseEnterTarget: any;

    // 界面是否需要添加空白列，当列宽度合计小于表格宽度的时候，需要添加空白列，作为界面填充
    rightTableHasEmptyColumn: boolean;

    // 界面需要添加空白列，当隐藏最后一列的时候，作为界面自动更新列
    rightTableUpdateEmptyColumn: boolean = false;

    // 锁定列项表格的宽度
    leftTableWidth: any;

    // 锁定列项格式化信息
    lockColumnsFormat: any = [];

    // 无下级锁定列项的列项集合信息（只有顶级列项）
    lockColumnsBottomFormat: KeyTableColumnComponent[] = [];

    constructor(differs: IterableDiffers, changeDetector: ChangeDetectorRef, protected element: ElementRef) {
        // 执行父类的构造函数
        super(differs, changeDetector, element);
    }

    ngAfterContentInit() {
        // 执行父类的 ngAfterContentInit
        super.ngAfterContentInit();
        this.calcSplit();
    }

    /**
     * 切换锁定列项
     * @param col
     */
    toggleColumnLock(col: KeyTableColumnComponent) {
        if (!col.childColumns) {
            col.toggleLock();
            this.calcParentColumnLock(col);
            this.fillColumnsFormat(this.columnsOriginal.toArray());
            this.calcSplit();
            this.calcEmptyColumn();
        }
    }

    /**
     * 模板按钮方法：列控制下的列开关按钮
     * @param col
     */
    toggleColumnHidden(col: KeyTableColumnComponent) {
        if (!col.childColumns) {
            col.toggleHidden();
            this.calcParentColumnHidden(col);
            this.fillColumnsFormat(this.columnsOriginal.toArray());
            this.calcSplit();
            this.calcEmptyColumn();
        }
    }

    /**
     * 判断是否为隐藏的列项（所有子级列项隐藏时，父级列项才可以隐藏）
     * @param column
     * @returns {boolean}
     */
    isHiddenColumn(column: KeyTableColumnComponent) {
        if (column.hasChildColumns()) {
            for (let i = 0, len = column.childColumns.length; i < len; i++) {
                if (!this.isHiddenColumn(column.childColumns[i])) {
                    return false;
                }
            }
            return true;
        } else {
            return column.hidden;
        }
    }

    /**
     * 计算父节点隐藏状态
     * @param col 
     */
    calcParentColumnHidden(col: KeyTableColumnComponent) {
        if (col.hasParentColumn()) {
            let parentColumn = col.parentColumn;
            let hidden = true;
            parentColumn.childColumns.forEach((col) => {
                if (!col.hidden) {
                    hidden = false;
                }
            });
            if (parentColumn.hidden != hidden) {
                parentColumn.hidden = hidden;
            }
            this.calcParentColumnLock(col);
            this.calcParentColumnHidden(parentColumn);
        }
    }

    /**
     * 计算父节点锁定状态
     * @param col 
     */
    calcParentColumnLock(col: KeyTableColumnComponent) {
        if (col.hasParentColumn()) {
            let parentColumn = col.parentColumn;
            let lock = false;
            let visable = false;
            parentColumn.childColumns.forEach((col) => {
                if (!col.hidden && col.lock) {
                    lock = true;
                }
                if (!col.hidden && col.visable) {
                    visable = true;
                }
            });
            if (parentColumn.lock != lock) {
                parentColumn.lock = lock;
            }
            if (parentColumn.visable != visable) {
                parentColumn.visable = visable;
            }
            this.calcParentColumnLock(parentColumn);
        }
    }

    /**
     * 计算是否需要分栏
     */
    calcSplit() {
        let split = (this.lockColumnsBottomFormat.length > 0);
        if (this.split != split) {
            this.split = split;
            if (this.split) {
                setTimeout(() => {
                    if (!!this.leftTableComponent && this.rightTableComponent) {
                        this.leftTableComponent.setScrollTop(this.rightTableComponent.getScrollTop());
                    }
                }, 0);
            }
        }
    }

    /**
     * 计算是否需要空白列
     */
    calcEmptyColumn() {
        let col: any;
        let right = true;
        for (let i = 0, len = this.columnsBottomFormat.length; i < len; i++) {
            col = this.columnsBottomFormat[i];
            if (!col.width) {
                if (col.right && right) {
                    right = false;
                }
            }
        }
        this.rightTableHasEmptyColumn = right;
        this.calcLeftTableWidth();

        // 用于解决表格最后一列被隐藏时，界面没能自动更新
        if (this.rightTableHasEmptyColumn) {
            this.rightTableUpdateEmptyColumn = true;
            setTimeout(() => {
                this.rightTableUpdateEmptyColumn = false;
            }, 1);
        }
    }

    /**
     * 计算锁定列项表格的宽度
     */
    calcLeftTableWidth() {
        // 设置左边表格默认为 47，主要是因为序号列项的宽度为 44 px（水平滚动条显示，但不需要滚动）
        let leftWidth = 47;
        for (let i = 0, len = this.lockColumnsBottomFormat.length; i < len; i++) {
            if (this.lockColumnsBottomFormat[i].width) {
                leftWidth = leftWidth + Number(this.lockColumnsBottomFormat[i].width);
            }
        }
        this.leftTableWidth = leftWidth;
    }

    /**
     * 滚动条滚动事件
     * @param event
     * @param tableTrigger 目标表格（左表格left，右表格right）
     */
    onScroll(event: any, tableTrigger: "left" | "right") {
        let target = event.target;
        let table = null;
        if (tableTrigger == 'left') {
            table = this.rightTableComponent;
        } else {
            table = this.leftTableComponent;
        }
        if (this.mouseEnterTarget == target && table) {
            // 通知另外一个表格滚动，同步两个表格的滚动位置
            table.onScroll(event, true, tableTrigger);
        }
    }

    /**
     * 获取鼠标指针所指定的表格
     * @param event
     */
    onMouseEnter(event: any) {
        this.mouseEnterTarget = event.target;
    }

    /**
     * 列项宽度发生改变时，修正锁定列项表格的宽度
     * @param event
     */
    onColumnWidthChange(event: any) {
        if (event.column.lock) {
            this.leftTableWidth = this.leftTableWidth + event.value;
        }
    }

    /**
     * 按要求格式化列信息
     * 1、对界面传入的列信息进行处理，输出结果为 [1,2,3],[1.1,1.2,2.1,2.2,3.1,3.2]的 格式，即按层级对数据分层级保存，
     * 2、对无下级列的列，进行单独存储，用于控制列宽，和底部汇总数据列控制。
     * 3、仅保存显示的列项
     * @param columns 界面传入的列信息
     */
    fillColumnsFormat(columns: KeyTableColumnComponent[], clear: boolean = true) {
        if (clear) {
            this.lockColumnsFormat = [];
            this.lockColumnsBottomFormat = [];
            this.columnsFormat = [];
            this.columnsBottomFormat = [];
        }
        columns.forEach((col: KeyTableColumnComponent) => {
            let level = col.getLevel();
            if (!col.hidden) {
                if (col.lock) {
                    if (this.lockColumnsFormat[level]) {
                        this.lockColumnsFormat[level].push(col);
                    } else {
                        this.lockColumnsFormat[level] = [col];
                    }
                }
                if (col.visable) {
                    if (this.columnsFormat[level]) {
                        this.columnsFormat[level].push(col);
                    } else {
                        this.columnsFormat[level] = [col];
                    }
                }
                if (col.hasChildColumns()) {
                    this.fillColumnsFormat(col.childColumns, false);
                } else {
                    if (col.lock) {
                        this.lockColumnsBottomFormat.push(col);
                    }
                    if (col.visable) {
                        this.columnsBottomFormat.push(col);
                    }
                }
            }
        });
    }

    /**
     * 树形结构表格行数据展开或者收拢
     *
     * 相关事件
     * treeToggleChange 树形结构表格行数据展开或者收拢变更事件
     *
     * @param expanded
     */
    onTreeToggleChange(expanded: boolean, tableTrigger?: "left" | "right") {
        // 实时更新两边表格
        if (tableTrigger == "left" && this.rightTableComponent != null) {
            this.rightTableComponent.changeDetectorRef.markForCheck();
        } else if (tableTrigger == "right" && this.leftTableComponent != null) {
            this.leftTableComponent.changeDetectorRef.markForCheck();
        }
        this.treeToggleChange.emit({
            expanded: expanded
        });
    }
}
