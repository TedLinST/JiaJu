/**
 * Created by Z.cr on 2018-2-11.
 * 树结构表格
 *
 * 基本用例
 * data: KeyTreeNode[];
 * this.data = Utils.listToTreeData({data: response.data});
 * <key-tree-table title="树结构" [(selection)]="selection" [data]="data" [loadHeading]="loadHeading"
 *     >
 *     <div header class="btn-group">
 *         <button class="btn btn-default" (click)="add()">增加</button>
 *         <button class="btn btn-default" (click)="view()" [disabled]="!!!selection">修改</button>
 *         <button class="btn btn-default" (click)="delete()" [disabled]="!!!selection">删除</button>
 *     </div>
 *     <key-table-column heading="列项" key="key1" width="60" sortable>
 *     </key-table-column>
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
 * </key-tree-table>
 *
 */

import {
    AfterContentInit, ChangeDetectorRef, Component, ContentChildren,
    DoCheck, EventEmitter, HostBinding, Input, IterableDiffers, Output, QueryList, ViewChild,
    ViewChildren,
    ElementRef,
    AfterViewInit,
    OnDestroy
} from "@angular/core";
import { KeyTableColumnComponent } from "./table-column.component";
import { KeyTableFilterComponent } from "./filter/table-filter.component";
import { Utils } from "../../utils/utils";
import { KeyEventInfo } from "../interface/event-info";
import { KeyTableSortEventInfo } from "./table-sort-event-info";
import { KeyTableFilterEventInfo } from "./filter/table-filter-event-info";
import { KeyTreeTableInnerComponent } from "./tree-table-inner.component";
import { Subscription } from "rxjs";
import { KeyTreeNode } from '../tree/tree-node';

@Component({
    selector: "key-tree-table",
    templateUrl: "./tree-table.component.html"
})
export class KeyTreeTableComponent implements AfterContentInit, AfterViewInit, DoCheck, OnDestroy {

    // KeyTreeTableComponent 绑定 class 样式，默认为 true
    @HostBinding("class.key-flex-component-v") flex: boolean = true;

    // ---------------输出事件参数---------------

    // 表格排序条件进行变化的时候，触发该事件
    @Output() sortChange: EventEmitter<KeyTableSortEventInfo> = new EventEmitter<KeyTableSortEventInfo>();

    // 高级查询条件发生变化的时候，触发该事件
    @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

    // 多选和单选模式变化时，将触发该事件
    @Output() multipleSelectionModeChange: EventEmitter<any> = new EventEmitter<any>();

    // =====输出事件参数 => 表格数据选中相关事件=====

    // 数据选中，发生变化或者多选和单选模式切换，改变 selection 类型时，触发该事件(支持异步)
    @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>(true);

    // 当数据选中时，将触发该事件
    @Output() dataSelect: EventEmitter<KeyEventInfo> = new EventEmitter<KeyEventInfo>();

    // 当数据从选中切换到非选中状态时，将触发该事件
    @Output() dataUnselect: EventEmitter<KeyEventInfo> = new EventEmitter<KeyEventInfo>();

    // 当点击全选按钮，全部数据选中时，将触发该事件
    @Output() dataSelectAll: EventEmitter<KeyEventInfo> = new EventEmitter<KeyEventInfo>();

    // 当点击全不选按钮 全部数据到非选中状态时，将触发该事件
    @Output() dataUnselectAll: EventEmitter<KeyEventInfo> = new EventEmitter<KeyEventInfo>();

    // 当点击表格中数据的时候，将触发该事件，原名为：dataClick
    @Output() dataClick: EventEmitter<KeyEventInfo> = new EventEmitter<KeyEventInfo>();

    // 树形结构表格行数据展开或者收拢，触发该回调事件
    @Output() treeToggleChange: EventEmitter<any> = new EventEmitter<any>();

    // =====输出事件参数 => 表格编辑相关事件=====

    // 编辑状态发生变化的时候，触发该事件
    @Output() editingChange: EventEmitter<any> = new EventEmitter<any>();

    // 当进入编辑模式，将触发该事件
    @Output() beforeEdit: EventEmitter<KeyEventInfo> = new EventEmitter<KeyEventInfo>();

    // 退出编辑事件，当成功退出编辑模式，将触发该事件
    @Output() cancelEdit: EventEmitter<KeyEventInfo> = new EventEmitter<KeyEventInfo>();

    // 刷新，触发该事件
    @Output() refresh: EventEmitter<any> = new EventEmitter<any>(false);

    // ---------------输入参数---------------

    // 表格列头信息，如果无列头信息，按钮将靠左显示，有列头信息，按钮将靠右显示
    @Input() title: string;

    // 用于识别行数据是否相同字段，默认为ID
    @Input() idField: string = "id";

    // 表格数据源
    @Input() data: KeyTreeNode[] = [];

    // 汇总行数据，格式为对象数组
    @Input() summary: any[] = [];

    // 行选中数据 => 单选为 TableSelectEventInfo 多选为 TableSelectEventInfo[]  TODO: 两者之前的切换，有时候会出现错误（待解决）
    @Input() selection: any | any[];

    // 隐藏工具栏，默认为：false
    @Input() toolsHidden: boolean = false;

    // 精减工具，默认为： false
    @Input() toolsReduce: boolean = false;

    // 隐藏列头，默认为：false
    @Input() headerHidden: boolean = false;

    // 显示全选按钮，仅用于行选中模式，必须为多选模式才有效，默认为：false
    @Input() canSelectAll: boolean = false;

    // 显示多选模式按钮，默认为：false
    @Input() canMultipleSelect: boolean = false;

    // 显示最大化界面按钮，默认为：true
    @Input() canMaxmizing: boolean = true;

    // 显示刷新按钮，默认为：true
    @Input() canRefreshBtn: boolean = true;

    // 全选按钮过滤事件，判断数据是否选中，传入每一行数据，返回选中 true，不选中 false
    @Input() selectAllFn: (row: any) => boolean;

    // 单元格点击过滤事件，判断数据选中状态是否更改，传入点击的单元格信息，返回 false 将不做变更
    @Input() beforeCellClick: (data: KeyEventInfo) => boolean;

    // 表格选择模式，rowModel 行选择模式（默认），cellModel 单元格选择模式， colModel 列选择模式， crossModel 十字架模式
    @Input() selectModel: "rowModel" | "cellModel" | "colModel" | "crossModel" = "rowModel";

    // 编辑状态，true 为编辑中
    @Input("editing") isEditing: boolean = false;

    // 编辑即时更新数据，默认为false，需要退出编辑状态，才会更新DATA数据；true,则编辑的时候，数据会直接写入DATA数据。
    @Input() editingRealTime: boolean = false;

    // 显示行序号，默认显示
    @Input() hasSerialNumber: boolean = true;

    // 仅叶子节点能选中，默认为 false
    @Input() selectLeaf: boolean = false;

    // 显示全部展开和全部闭合按钮
    @Input() canExpandAll: boolean = true;

    // 树形结构时，树形展开收拢偏移数,默认偏移8px，小于等于0时，不发生位移
    @Input() treeShiftingNumber: number = 8;

    // 表格加载提示文本,默认一定要为 false
    @Input() loadingSwitch: boolean = false;

    // 工具箱向上显示，默认不向上
    @Input() dropUp: boolean = false;

    // 启用选中
    @Input() selectEnable: boolean = true;

    // 自定义模式
    @Input() customMode: boolean = false;

    // 多选模式 => true为多选，false为单选，默认为 false
    _multipleSelectionMode: boolean = false;

    @Input()
    set multipleSelectionMode(multipleSelectionMode: boolean) {
        if (this._multipleSelectionMode != multipleSelectionMode) {
            this._multipleSelectionMode = multipleSelectionMode;
            if (multipleSelectionMode) {
                // 多选模式，将 selection 变成 selection数组
                if (this.selection) {
                    // this.dataRowSelected(this.selection);
                    this.selection = [this.selection];
                    this.selectionChange.emit(this.selection);
                }
            } else {
                if (this.selection && this.selection.length > 0) {
                    // this.dataRowUnSelected(this.selection);
                    // 多选模式，将 selection数组 变成 selection，取最后一个 selection
                    this.selection = this.selection[this.selection.length - 1];
                    // this.dataRowSelected(this.selection);
                    this.selectionChange.emit(this.selection);
                }
            }
            this.multipleSelectionModeChange.emit(this.multipleSelectionMode);
        }
    }

    get multipleSelectionMode() {
        return this._multipleSelectionMode;
    }

    // ---------------程序变量---------------

    // 界面传入的列项配置信息
    @ContentChildren(KeyTableColumnComponent)
    columnsOriginal: QueryList<KeyTableColumnComponent>;

    // 界面传入的高级查询配置信息
    @ViewChildren(KeyTableFilterComponent)
    filters: QueryList<KeyTableFilterComponent>;

    // 编辑控制触发的表格控件（分栏表格，只有右表格可以进行编辑）
    @ViewChild("rightTable")
    editTableInner: KeyTreeTableInnerComponent;

    @ViewChild("leftTable")
    leftTableComponent: KeyTreeTableInnerComponent;

    @ViewChild("rightTable")
    rightTableComponent: KeyTreeTableInnerComponent;

    // 用于编辑模式，记录修改过的数据
    dirtyRows: any = {};

    // 排序信息
    sort: KeyTableSortEventInfo;

    // 差异判定，对原始数据进行差异判定，决定是否对界面进行更新
    differ: any;

    // 排序后的数据克隆
    dataSort: KeyTreeNode[];

    // 历史高级查询条件
    historyFilter: KeyTableFilterEventInfo[];

    // 检测变更对象
    changeDetector: ChangeDetectorRef;

    // ---------------模板参数---------------

    // 界面最大化状态，默认为 false
    maxmizingMode: boolean = false;

    // 显示高级查询按钮，默认为 false
    hasFilterBtn: boolean = false;

    // 高级查询界面打开状态，默认为 false
    isQuery: boolean = false;

    // 显示编辑按钮，默认为 false
    hasEditorBtn: boolean = false;

    // 界面是否需要添加空白列，当列宽度合计小于表格宽度的时候，需要添加空白列，作为界面填充。
    hasEmptyColumn: boolean = true;

    // 界面需要添加空白列，当隐藏最后一列的时候，作为界面自动更新列。
    updateEmptyColumn: boolean = false;

    // 显示在界面上的数据，对排序后的数据进行根据分页情况，进行显示
    dataToRender: KeyTreeNode[];

    // 列头层级数，默认为 0
    headerLevel: number = 0;

    // 列项订阅
    _columnsSubscription: Subscription;

    // 列项列格式化信息
    columnsFormat: any = [];

    // 无下级列项的列项集合信息（只有顶级列项）
    columnsBottomFormat: KeyTableColumnComponent[] = [];

    // 当前表对象，用于模板引用
    table: KeyTreeTableComponent;

    constructor(protected differs: IterableDiffers, protected changeDetectors: ChangeDetectorRef, protected element: ElementRef) {
        this.differ = differs.find([]).create(null);
        this.table = this;
        this.changeDetector = changeDetectors;
    }

    /**
     *  Angular内置方法：配置载入后，对配置信息进行格式化处理
     */
    ngAfterContentInit() {
        this._columnsSubscription = this.columnsOriginal.changes.subscribe(() => {
            let colArray = this.columnsOriginal.toArray();
            this.fillColumnsFormat(colArray);
            this.headerLevel = this.columnsFormat.length - 1;
            this.fillColumnsRowSpan(colArray);
        });
        let colArray = this.columnsOriginal.toArray();
        this.fillColumnsFormat(colArray);
        this.headerLevel = this.columnsFormat.length - 1;
        this.fillColumnsRowSpan(colArray);
        this.columnsBottomFormat.forEach((col) => {
            // 设置列项编辑图标
            if (this.isEditing) {
                if (col.editor) {
                    col.editing = true;
                }
            }
            // 列项下有编辑控件时，则显示编辑按钮
            if (!!col.editor) {
                this.hasEditorBtn = true;
            }
            // 列项下有筛选控件时，则显示高级查询按钮
            if (!!col.filter) {
                this.hasFilterBtn = true;
            }
        });
        // 将列项转换成指定的数据类型
        this.convertColDataType();
        // 判断空白列
        this.calcEmptyColumn();
    }

    /**
     *  Angular内置方法
     */
    ngAfterViewInit() {
        // 父级列项隐藏初始化
        setTimeout(() => {
            this.columnsBottomFormat.forEach((col) => {
                this.calcParentColumnHidden(col);
            });
        }, 10);
    }

    /**
     * Angular内置方法：用于监控数据变化，对界面进行修正
     */
    ngDoCheck() {
        let changes = this.differ.diff(this.data);
        if (changes) {
            // 数组复制
            this.dataSort = [].concat(this.data);
            // 将列项转换成指定的数据类型
            this.convertColDataType();
            // 排序信息不为空时，才进行排序
            if (this.sort) {
                this.sortSingle(this.sort.key, this.sort.order);
            }
            this.updateDataToRender(this.dataSort);
            // this.updataRowSelected();
        }
    }

    /**
     * Angular内置方法：控件销毁
     */
    ngOnDestroy() {
        this._columnsSubscription.unsubscribe();
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
            this.columnsFormat = [];
            this.columnsBottomFormat = [];
        }
        columns.forEach((col: KeyTableColumnComponent) => {
            if (!col.hidden) {
                let level = col.getLevel();
                if (this.columnsFormat[level]) {
                    this.columnsFormat[level].push(col);
                } else {
                    this.columnsFormat[level] = [col];
                }
                if (col.hasChildColumns()) {
                    this.fillColumnsFormat(col.childColumns, false);
                } else {
                    this.columnsBottomFormat.push(col);
                }
            }
        });
    }

    /**
     * 计算列的合并行数
     * 1、对无下级列的列，根据其所在的级别，与最高级别的对比，计算出需要合并的行数。
     * @param columns 界面传入的列信息
     */
    fillColumnsRowSpan(columns: KeyTableColumnComponent[]) {
        columns.forEach((col) => {
            if (col.hasChildColumns()) {
                this.fillColumnsRowSpan(col.childColumns);
            } else {
                let level = col.getLevel();
                if (this.headerLevel > level) {
                    col.rowSpan = this.headerLevel - level + 1;
                }
            }
        });
    }

    /**
     * 判断是否需要空白列，如果显示的列种有无宽度的列，那么不需要添加填充列，用于填充表格空白空间
     */
    calcEmptyColumn() {
        let col: KeyTableColumnComponent;
        for (let i = 0, len = this.columnsBottomFormat.length; i < len; i++) {
            col = this.columnsBottomFormat[i];
            if (!col.width) {
                this.hasEmptyColumn = false;
                return;
            }
        }
        this.hasEmptyColumn = true;

        // 用于解决表格最后一列被隐藏时，界面没能自动更新
        this.updateEmptyColumn = true;
        setTimeout(() => {
            this.updateEmptyColumn = false;
        }, 1);
    }

    /**
     * 将列项转换成指定的数据类型
     */
    convertColDataType() {
        this.columnsBottomFormat.forEach((col) => {
            if (!!col.type) {
                this.iteratorTreeConvertColDataType(this.dataSort, col.key, col.type);
            }
        });
    }

    /**
     * 递归列项转换类型辅助方法，对各层节点进行转换
     * @param nodes 转换的节点集合
     * @param key 字段名称
     * @param type 转换类型
     */
    iteratorTreeConvertColDataType(nodes: KeyTreeNode[], key: string, type: "number" | "string" | "boolean") {
        nodes.forEach((node) => {
            if (node.children && node.children.length > 0) {
                this.iteratorTreeConvertColDataType(node.children, key, type);
            }
        });
        nodes.forEach((node) => {
            if (typeof node.data[key] !== type) {
                if (type == "number") {
                    if (!isNaN(node[key])) {
                        node.data[key] = parseFloat(node.data[key]);
                    } else {
                        node.data[key] = null;
                    }
                } else if (type == "string") {
                    node.data[key] = node.data[key] + "";
                } else if (type == "boolean") {
                    node.data[key] = Utils.toBoolean(node.data[key]);
                }
            }
        });
    }

    /**
     * 排序方法，根据字段和规则对数据进行顺序调整。
     * @param key 字段名称
     * @param order 排序规则 asc 升序 desc 降序
     */
    sortSingle(key: string, order: "asc" | "desc") {
        this.iteratorTreeSort(this.dataSort, key, order);
    }

    /**
     * 递归排序辅助方法，对各层节点进行排序
     * @param nodes 排序的节点集合
     * @param key 字段名称
     * @param order 排序规则 asc 升序 desc 降序
     */
    iteratorTreeSort(nodes: KeyTreeNode[], key: string, order: "asc" | "desc") {
        nodes.forEach((node) => {
            if (node.children && node.children.length > 0) {
                this.iteratorTreeSort(node.children, key, order);
            }
        });
        nodes.sort((node1, node2) => {
            let value1 = this.resolveFieldData(node1.data, key);
            let value2 = this.resolveFieldData(node2.data, key);
            let result: any = null;

            if (typeof value1 == "string" && typeof value2 == "string") {
                result = value1.localeCompare(value2);
            } else if (typeof value1 == "number" && typeof value2 == "number") {
                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
            } else if (!!!value1 && value2 != null) {
                result = -1;
            } else if (value1 != null && !!!value2) {
                result = 1;
            } else if (!!!value1 && !!!value2) {
                result = 0;
            }
            return ((order == "desc" ? 1 : -1) * result);
        });
    }

    /**
     * 获取行的指定值，无该值则返回 ""
     * @param row 行数据
     * @param field 指定字段
     * @returns {string}
     */
    resolveFieldData(row: any, field: string): any {
        return field ? row[field] : "";
    }

    /**
     * 对显示的数据进行更新
     *
     * @param datasource
     */
    updateDataToRender(datasource: KeyTreeNode[]) {
        let render: KeyTreeNode[] = [];
        if (datasource) {
            render = Utils.getAllTreeNode(datasource);
        }
        this.dataToRender = render;
    }

    /**
     * 用于编辑模式的方法，获取被修改过的数据
     * @returns {any[]}
     */
    getDirtyRows() {
        let rows: any[] = [];
        let dirtyRows = this.dirtyRows;
        for (let s in dirtyRows) {
            rows.push(dirtyRows[s]);
        }
        return rows;
    }

    /**
     * 用于编辑模式的方法，将 dirtyRows 清空
     */
    clearDirtyRows() {
        this.dirtyRows = {};
    }

    /**
     * 用于判断选中中是否有指定的数据
     * @param select
     * @returns {number}
     */
    findSelectionIndex(select: { row?: any, key?: any }): number {
        let index = -1;
        let selection = this.selection;
        let idField = this.idField;
        let selCell: any = null;
        if (selection) {
            if (selection instanceof Array) {
                // 多选模式
                if (this.isRowSelectModel()) {
                    // 行选中模式
                    for (let i = 0; i < selection.length; i++) {
                        selCell = selection[i];
                        if (selCell.row[idField] == select.row[idField]) {
                            index = i;
                            break;
                        }
                    }
                } else if (this.isColSelectModel()) {
                    // 列选中模式
                    for (let i = 0; i < selection.length; i++) {
                        selCell = selection[i];
                        if (selCell.key == select.key) {
                            index = i;
                            break;
                        }
                    }
                } else {
                    // 单元格选中模式
                    for (let i = 0; i < selection.length; i++) {
                        selCell = selection[i];
                        if (selCell.row[idField] == select.row[idField] && selCell.key == select.key) {
                            index = i;
                            break;
                        }
                    }
                }
            } else {
                // 单选模式
                selCell = selection;
                if (this.isRowSelectModel()) {
                    // 行选中模式
                    if (selCell.row[idField] == select.row[idField]) {
                        index = 1;
                    }
                } else if (this.isColSelectModel()) {
                    // 列选中模式
                    if (selCell.key == select.key) {
                        index = 1;
                    }
                } else {
                    // 单元格选中模式
                    if (selCell.row[idField] == select.row[idField] && selCell.key == select.key) {
                        index = 1;
                    }
                }
            }
        }
        return index;
    }

    /**
     * 模板使用方法: 用于接收 table-inner 的列头排序点击事件
     *
     * 相关事件：
     *  sortChange 排序列变更事件。
     *
     * @param event 由 table-inner 提供, 包含字段名和排序顺序。
     */
    onColumnSort(event: KeyTableSortEventInfo) {
        this.sortSingle(event.key, event.order);
        this.sort = { key: event.key, order: event.order };
        this.sortChange.emit(this.sort);
        this.updateDataToRender(this.dataSort);
    }

    /**
     * 模板使用方法: 用于接收 table-inner 的单元格点击事件
     *
     * 相关事件：
     *  dataClick 单元格点击事件，
     *  dataSelect 选中事件，
     *  dataUnselect 选中取消事件，
     *  selectionChange 选中变更事件
     *
     * @param event 由 table-inner 提供
     */
    onCellClick(event: KeyEventInfo) {
        // 事件信息
        let eventInfo: KeyEventInfo = {
            event: event.event,
            component: this,
            value: event.value
        };
        // 单元格点击事件过滤
        if (this.beforeCellClick) {
            if (this.beforeCellClick(eventInfo) == false) {
                return;
            }
        }
        this.dataClick.emit(eventInfo);

        // 仅叶子节点能选中
        let node = event.value.row;
        if (!node.leaf && this.selectLeaf) {
            node.toggle();
            return;
        }

        let selectionIndex = this.findSelectionIndex({ row: event.value.row, key: event.value.key });
        let selected = selectionIndex != -1;
        if (selected) {
            // 移除 selection 数据
            if (this.isSingleSelectionMode()) {
                // this.dataRowUnSelected(this.selection);
                this.selection = null;
            } else {
                // this.dataRowUnSelected(this.selection[selectionIndex]);
                this.selection.splice(selectionIndex, 1);
                if (this.selection.length == 0) {
                    this.selection = null;
                }
            }
            this.dataUnselect.emit(eventInfo);
        } else {
            // 添加 selection 数据
            if (this.isSingleSelectionMode()) {
                // this.dataRowUnSelected(this.selection);
                this.selection = { row: node.data, key: event.value.key };
                // this.dataRowSelected(this.selection);
            } else if (this.isMultipleSelectionMode()) {
                this.selection = this.selection || [];
                this.selection.push({ row: node.data, key: event.value.key });
                // this.dataRowSelected(this.selection[this.selection.length - 1]);
            }
            this.dataSelect.emit(eventInfo);
        }
        this.selectionChange.emit(this.selection);
    }

    /**
     * 判断是否为单选模式
     * @returns {boolean}
     */
    isSingleSelectionMode() {
        return !this.multipleSelectionMode;
    }

    /**
     * 判断是否为多选模式
     * @returns {boolean}
     */
    isMultipleSelectionMode() {
        return this.multipleSelectionMode;
    }

    /**
     * 模板使用方法: 判断是否为行选中模式
     * @returns {boolean}
     */
    isRowSelectModel(): boolean {
        return this.selectModel == "rowModel";
    }

    /**
     * 模板使用方法: 判断是否为单元格选中模式
     * @returns {boolean}
     */
    isCellSelectModel(): boolean {
        return this.selectModel == "cellModel";
    }

    /**
     * 模板使用方法: 判断是否为列选中模式
     * @returns {boolean}
     */
    isColSelectModel(): boolean {
        return this.selectModel == "colModel";
    }

    /**
     * 模板使用方法: 判断是否为十字架选中模式
     * @returns {boolean}
     */
    isCrossSelectModel(): boolean {
        return this.selectModel == "crossModel";
    }

    /**
     * 模板按钮方法: 最大化按钮
     * 设置 modal 遮罩层的区域
     */
    toggleMaxmizingMode() {
        this.maxmizingMode = !this.maxmizingMode;
    }

    /**
     * 模板按钮方法: 编辑按钮，控制进入和退出编辑模式，退出编辑模式将验证数据的有效性。
     */
    toggleEditor() {
        if (this.isEditing) {
            let editors = this.editTableInner.editors.toArray();
            // 验证数据的有效性
            for (let i = 0, len = editors.length; i < len; i++) {
                if (editors[i].hasError()) {
                    return;
                }
            }
            // 更新列项中的值，并且将修改过的数据记录在 dirtyRows 中
            this.editTableInner.editors.forEach((editor) => {
                if (editor.isDirty()) {
                    editor.updateValue();
                    this.dirtyRows[editor.row[this.idField]] = editor.row;
                }
            });
            // 退出编辑事件
            this.cancelEdit.emit({
                component: this,
                value: this.getDirtyRows()
            });
        } else {
            // 当进入编辑模式
            this.beforeEdit.emit({
                component: this
            });
        }
        this.isEditing = !this.isEditing;
        // 设置列项编辑（图标）
        this.columnsBottomFormat.forEach((col) => {
            if (col.editor) {
                col.editing = this.isEditing;
            }
        });
        this.editingChange.emit(this.isEditing);
        this.tableInnerComponentMarkForCheck();
    }

    /**
     * 模板按钮方法: 高级查询按钮
     */
    toggleQuery() {
        this.isQuery = !this.isQuery;
    }

    /**
     * 模板按钮方法：多选按钮
     */
    toggleSelectionMode() {
        this.multipleSelectionMode = !this.multipleSelectionMode;
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
            this.calcEmptyColumn();
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
            this.calcParentColumnHidden(parentColumn);
        }
    }

    /**
     * 模板按钮方法: 高级查询筛选按钮
     *
     * 相关事件：
     *  filterChange 高级查询条件变化事件
     */
    filterData() {
        let filterCondition: KeyTableFilterEventInfo[] = [];
        let condition: KeyTableFilterEventInfo;
        this.filters.forEach((filter) => {
            condition = filter.condition;
            if (condition != null) {
                filter.column.filtering = true;
                filterCondition.push(condition);
            } else {
                filter.column.filtering = false;
            }
        });
        if (JSON.stringify(this.historyFilter) != JSON.stringify(filterCondition)) {
            this.historyFilter = filterCondition;
            this.filterChange.emit(this.historyFilter);
        }
    }

    /**
     * 模板按钮方法：高级查询取消按钮
     *
     * 相关事件：
     *  filterChange 高级查询条件变化事件
     */
    filterCancel() {
        this.isQuery = false;
        if (!!!this.historyFilter) {
            return;
        }
        if (this.historyFilter != null) {
            this.historyFilter = null;
            this.filters.forEach((filter) => {
                filter.column.filtering = false;
            });
            this.filterChange.emit(this.historyFilter);
        }
    }

    /**
     * 模板按钮方法：选中全部按钮(仅在行选中模式下有用)
     *
     * 相关事件：
     *  selectionChange 选中变更事件
     *
     * @returns {boolean}
     */
    selectAll() {
        if (!this.isRowSelectModel()) {
            return false;
        }
        if (this.selectAllFn) {
            if (this.dataToRender) {
                let selection: any[] = [];
                this.dataToRender.forEach((row) => {
                    if (this.selectLeaf) {
                        if (row.leaf) {
                            if (this.selectAllFn(row)) {
                                selection.push({ row: row.data });
                            }
                        }
                    }
                });
                this.selection = selection;
                // this.dataRowSelected(this.selection);
            } else {
                // this.dataRowUnSelected(this.selection);
                this.selection = null;
            }
        } else {
            if (this.dataToRender) {
                let selection: any[] = [];
                this.dataToRender.forEach((row) => {
                    if (this.selectLeaf) {
                        if (row.leaf) {
                            selection.push({ row: row.data });
                        }
                    }
                });
                this.selection = selection;
                // this.dataRowSelected(this.selection);
            } else {
                // this.dataRowUnSelected(this.selection);
                this.selection = null;
            }
        }
        this.dataSelectAll.emit(this.selection);
        this.selectionChange.emit(this.selection);
    }

    /**
     * 模板按钮方法：取消选中按钮(仅在行选中模式下有用)
     *
     * 相关事件：
     *  selectionChange 选中变更事件
     */
    unselectAll() {
        // this.dataRowUnSelected(this.selection);
        this.selection = null;
        this.dataUnselectAll.emit(null);
        this.selectionChange.emit(this.selection);
    }

    /**
     * 模板按钮方法：全部展开按钮
     */
    expandAll(data: KeyTreeNode[]) {
        if (data && data.length > 0) {
            data.forEach((node) => {
                node.expanded = true;
                if (!node.leaf) {
                    this.expandAll(node.children);
                }
            });
            this.tableInnerComponentMarkForCheck();
        }
    }

    /**
     * 模板按钮方法：全部闭合按钮
     */
    collapseAll(data: KeyTreeNode[]) {
        if (data && data.length > 0) {
            data.forEach((node) => {
                node.expanded = false;
                if (!node.leaf) {
                    this.collapseAll(node.children);
                }
            });
            this.tableInnerComponentMarkForCheck();
        }
    }

    /**
     * 刷新界面，变更叶子节点时，调用该方法，让树展示出数据
     */
    refrehRender() {
        if (this.sort) {
            this.sortSingle(this.sort.key, this.sort.order);
        }
        this.updateDataToRender(this.dataSort);
    }

    /**
     * 模板使用方法: 用于刷新事件
     *
     * 相关事件：
     *  refresh 表格刷新数据事件(保留高级查询条件)
     *
     * @param event
     */
    onRefresh(event?: any) {
        this.refresh.emit({
            query: this.historyFilter
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
    onTreeToggleChange(expanded: boolean) {
        this.treeToggleChange.emit({
            expanded: expanded
        });
    }

    /**
     * 数据源发生改变时，更新行选中
     */
    /* updataRowSelected() {
        if (!!this.selection) {
            let selectionIdsMap: any = {};
            if (Array.isArray(this.selection)) {
                this.selection.forEach((selection: any) => {
                    selectionIdsMap[selection.row[this.idField]] = {
                        key: selection.key
                    };
                });
            } else {
                selectionIdsMap[this.selection.row[this.idField]] = {
                    key: this.selection.key
                };
            }
            if (this.data != null && this.data.length > 0) {
                if (this.isSingleSelectionMode()) {
                    let selection: any = this.iteratorSelectedData(this.data, {}, selectionIdsMap, false);
                    if (!!selection && !!selection.row) {
                        this.selection = selection;
                        this.dataRowSelected(selection);
                    }
                } else if (this.isMultipleSelectionMode()) {
                    let selection: any[] = this.iteratorSelectedData(this.data, [], selectionIdsMap, true);
                    if (selection.length > 0) {
                        this.selection = selection;
                        this.dataRowSelected(selection);
                    }
                }

            }
        } else {
            if (this.data != null && this.data.length > 0) {
                this.iteratorClearSelectedData(this.data);
            }
        }
    } */

    /**
     * 递归清理选中数据
     * @param data 
     */
    /* iteratorClearSelectedData(data: KeyTreeNode[]) {
        data.forEach((node) => {
            if (node.children && node.children.length > 0) {
                this.iteratorClearSelectedData(node.children);
            }
            node.data.selected = false;
        });
    } */

    /**
     * 递归选中节点
     * @param data 
     * @param selection 
     * @param selectionIdsMap 
     * @param type true为多选  false为单选
     * @param clear 
     */
    /* iteratorSelectedData(data: KeyTreeNode[], selection: any | any[], selectionIdsMap: any, type: boolean, clear: boolean = true) {
        if (clear) {
            if (type) {
                selection = [];
            } else {
                selection = {};
            }
        }
        data.forEach((node) => {
            if (node.children && node.children.length > 0) {
                this.iteratorSelectedData(node.children, selection, selectionIdsMap, type, false);
            }
            if (selectionIdsMap[node.data[this.idField]]) {
                if (type) {
                    selection.push({
                        key: selectionIdsMap[node.data[this.idField]].key,
                        row: node.data
                    });
                } else {
                    selection = {
                        key: selectionIdsMap[node.data[this.idField]].key,
                        row: node.data
                    };
                }
            }
        });
        return selection;
    } */

    /**
     * 数据源行选中
     * @param selection 
     */
    /* dataRowSelected(selection: any | any[]) {
        if (!!selection) {
            if (Array.isArray(selection)) {
                selection.forEach((data: any) => {
                    data.row.selected = true;
                });
            } else {
                selection.row.selected = true;
            }
        }
    } */

    /**
     * 数据源行取消选中
     * @param selection 
     */
    /* dataRowUnSelected(selection: any) {
        if (!!selection) {
            if (Array.isArray(selection)) {
                selection.forEach((data: any) => {
                    data.row.selected = false;
                });
            } else {
                selection.row.selected = false;
            }
        }
    } */

    /**
     * 检测变更更新
     */
    tableInnerComponentMarkForCheck() {
        if (this.leftTableComponent) {
            this.leftTableComponent.changeDetectorRef.markForCheck();
        }
        if (this.rightTableComponent) {
            this.rightTableComponent.changeDetectorRef.markForCheck();
        }
    }

}
