/**
 * Created by Z.cr on 2018-2-5.
 * 表格 - 列项
 * 提供给 CkTableComponent、CkTableSplitComponent、CkTreeTableComponent、CkTreeTableSplitComponent 控件使用
 *
 * 基本用例
 * <key-table-column heading="部门编码" width="260" key="fullcode" sortable>
 * </key-table-column>
 */

import { AfterContentInit, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from "@angular/core";
import { KeyTableFilterTextComponent } from "./filter/table-filter-text.component";
import { KeyTableEditorTextComponent } from "./editor/table-editor-text.component";
import { Utils } from "../../utils/utils";

@Component({
    selector: "key-table-column",
    template: ""
})
export class KeyTableColumnComponent implements AfterContentInit {

    // 列项标题
    @Input() heading: string;

    // 列项字段
    @Input() key: string;

    /**
     * 列项数据类型
     * 当数据类型设置为 number 时，判断是否为数字（isNaN），是则转换成（number） 否则设置为（NULL）
     * 当数据类型设置为 boolean 时，字符串（"false"、"0"）也是为 false
     */
    @Input() type: "number" | "boolean" | "string";

    // 列项表头 class 样式 => th
    @Input() headerClass: any;

    // 列项表体 class 样式 => td
    @Input() cellClass: any;

    // 列项表体 style 样式 => td
    @Input() style: any;

    // 列项宽度
    @Input() width: number;

    // 列项排列方向，默认值为 left
    @Input() align: "left" | "right" | "center" = "left";

    // 列项排序方式
    @Input() sortOrder: "asc" | "desc";

    // 列项锁定，默认为 false
    @Input() lock: boolean = false;

    // 列项锁定，默认为 true, 与 lock 属性对立 (主要用于解决分栏表格父级列项同时显示问题)
    @Input() visable: boolean = true;

    // 列项隐藏，默认为 false
    @Input() hidden: boolean = false;

    // 列项说明（换行符号：&#10;）
    @Input() explain: string;

    // 设置、获取列项排序
    @Input()
    set sortable(sortable: string | boolean) {
        this._sortable = Utils.toBoolean(sortable);
    }

    get sortable() {
        return this._sortable;
    }

    // 设置、获取列项筛选（图标）
    @Input()
    set filtering(filtering: boolean) {
        this._filtering = filtering;
    }

    get filtering() {
        return this._filtering;
    }

    // 设置、获取列项编辑（图标）
    @Input()
    set editing(editing: boolean) {
        this._editing = editing;
    }

    get editing() {
        return this._editing;
    }

    //  设置、获取列项高度
    set height(height: number) {
        this._height = height;
    }

    get height() {
        return this._height;
    }

    // 获取列项的全部标题
    get fullHeading() {
        if (!this._fullHeading) {
            this._fullHeading = this.recursionColumnHeading(this);
        }
        return this._fullHeading;
    }

    // 从内容 DOM 中获取匹配选择器的第一个 TemplateRef 元素
    @ContentChild(TemplateRef)
    cellTpl: TemplateRef<any>;

    // 从内容 DOM 中获取匹配选择器的第一个 KeyTableFilterTextComponent 控件
    @ContentChild(KeyTableFilterTextComponent)
    filter: KeyTableFilterTextComponent;

    // 从内容 DOM 中获取匹配选择器的第一个 KeyTableEditorTextComponent 控件
    @ContentChild(KeyTableEditorTextComponent)
    editor: KeyTableEditorTextComponent;

    // 从内容 DOM 中获取 KeyTableColumnComponent 控件
    @ContentChildren(KeyTableColumnComponent)
    columns: QueryList<KeyTableColumnComponent>;

    // 父级列项 KeyTableColumnComponent
    parentColumn: KeyTableColumnComponent;

    // 子级列项 KeyTableColumnComponent[]
    childColumns: KeyTableColumnComponent[];

    // 列项可横跨的行数,默认为 1
    rowSpan: number = 1;

    // 列项排序图标，默认为 true
    _sortable = true;

    // 列项编辑图标，默认为 false
    _editing = false;

    // 列项筛选图标，默认为 false
    _filtering = false;

    // 列项全部标题
    _fullHeading: string;

    // 列项高度
    _height: number;

    // 列项层级值（没有子级列项，则层级值为 0 ）
    _level: number = -1;

    /**
     *  Angular 内置方法：配置载入后，对配置信息进行格式化处理
     */
    ngAfterContentInit() {
        if (this.columns.length > 1) {
            // 当有子级列项时，为当前列项添加子级列项（childColumns），为子级列项添加父级列项（column）
            let parent: KeyTableColumnComponent = null;
            this.childColumns = [];
            this.columns.forEach((col, index) => {
                if (index == 0) {
                    parent = col;
                    return;
                }
                col.parentColumn = parent;
                this.childColumns.push(col);
            });
        }
        // visable 初始化时为 lock 取反
        this.visable = !this.lock;
    }

    /**
     * 获取列项可横跨的列数
     * @param lockTable 是否为分栏表格
     * @returns {number}
     */
    getSpanCol(lockTable: boolean) {
        let span = 1;
        if (this.hasChildColumns()) {
            span = 0;
            this.childColumns.forEach((col) => {
                // 排除子级列项已经锁定和子级列项已经隐藏的列项
                if (!col.isHidden(lockTable)) {
                    span = span + col.getSpanCol(lockTable);
                }
            });
        }
        return span;
    }

    /**
     * 获取列项所在的层级值
     * @returns {number}
     */
    getLevel() {
        if (this._level == -1) {
            if (this.hasParentColumn()) {
                this._level = this.parentColumn.getLevel() + 1;
            } else {
                this._level = 0;
            }
        }
        return this._level;
    }

    /**
     * 判断列项是否隐藏（有子级列项时，只有当全部子级列项为隐藏，列项才会被隐藏）
     * @param lockTable 是否为分栏表格
     * @returns {boolean}
     */
    isHidden(lockTable?: boolean) {
        if (this.hasChildColumns()) {
            for (let i = 0, len = this.childColumns.length; i < len; i++) {
                if (!this.childColumns[i].isHidden(lockTable)) {
                    return false;
                }
            }
            return true;
        }
        if (this.hidden) {
            return true;
        } else {
            return lockTable != this.lock;
        }
    }

    /**
     * 判断是否有子级列项
     * @returns {boolean}
     */
    hasChildColumns() {
        return !!this.childColumns;
    }

    /**
     * 判断是否有父级列项
     * @returns {boolean}
     */
    hasParentColumn() {
        return !!this.parentColumn;
    }

    /**
     * 切换列项隐藏状态
     */
    toggleHidden() {
        this.hidden = !this.hidden;
    }

    /**
     * 切换列项锁定状态
     */
    toggleLock() {
        this.lock = !this.lock;
        this.visable = !this.visable;
    }

    /**
     * 递归获取父级列项的标题
     * @param col
     * @returns {string}
     */
    recursionColumnHeading(col: KeyTableColumnComponent): string {
        let heading = col.heading;
        if (col.hasParentColumn()) {
            return heading + " - " + this.recursionColumnHeading(col.parentColumn);
        } else {
            return heading;
        }
    }
}
