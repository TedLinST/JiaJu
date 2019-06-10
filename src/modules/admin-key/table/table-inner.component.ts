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
    Component, ElementRef, EventEmitter, HostBinding,
    HostListener, Input, OnInit, Output, QueryList, Renderer2, ViewChild,
    ViewChildren,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    AfterViewInit
} from "@angular/core";
import { KeyTableColumnComponent } from "./table-column.component";
import { KeyTableEditorComponent } from "./editor/table-editor.component";
import { KeyEventInfo } from "../interface/event-info";
import { KeyTableSortEventInfo } from "./table-sort-event-info";
import { ComponentHelper } from '../common/component-helper';

@Component({
    selector: "key-table-inner",
    templateUrl: "./table-inner.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyTableInnerComponent implements OnInit, AfterViewInit {

    // 点击单元格，触发该回调事件、
    @Output() cellClick: EventEmitter<KeyEventInfo> = new EventEmitter<KeyEventInfo>();

    // 滚动条滚动时，触发该回调事件
    @Output() scroll: EventEmitter<KeyEventInfo> = new EventEmitter<KeyEventInfo>();

    // 表格列头 => 列项被点击后，触发该回调事件
    @Output() sortChange: EventEmitter<KeyTableSortEventInfo> = new EventEmitter<KeyTableSortEventInfo>();

    // 列项宽度发生改变时，触发该回调事件
    @Output() columnWidthChange: EventEmitter<any> = new EventEmitter<any>();

    // CkTableInnerComponent 绑定 class 样式，默认为 true
    @HostBinding("class.key-flex-component-v")
    @Input() flex: boolean = true;

    // 绑定 class 样式，默认为 true
    @HostBinding("class.key-table-inner") key: boolean = true;

    // 数据源
    @Input() data: any[] = [];

    // 汇总数据源
    @Input() summary: any[];

    // 用于识别行数据是否相同字段，默认为ID
    @Input() idField: string = "id";

    // 行选中 => 单选为 TableSelectEventInfo 多选为 TableSelectEventInfo[]
    @Input() selection: any | any[];

    // 是否为可编辑表格，默认为 true， 当是分栏表格的时候，左边表格设置为 false （不可编辑）
    @Input() editable: boolean = true;

    // 编辑即时更新数据，默认为 false，需要退出编辑状态，才会更新DATA数据；true,则编辑的时候，数据会直接写入DATA数据。
    @Input() editingRealTime: boolean = false;

    // 列项格式化信息
    @Input() columnsFormat: any;

    // 无下级列项的列项集合信息（只有顶级列项）
    @Input() columnsBottomFormat: any;

    // 显示行序号，默认显示
    @Input() hasSerialNumber: boolean = true;

    // 界面是否需要添加空白列，当列宽度合计小于表格宽度的时候，需要添加空白列，作为界面填充。
    @Input() hasEmptyColumn: boolean = true;

    // 界面需要添加空白列，当隐藏最后一列的时候，作为界面自动更新列
    @Input() updateEmptyColumn: boolean = false;

    // 是否为分栏表格，默认为 false
    @Input() lockTable: boolean = false;

    @Input() selectModel: string;

    // 显示分页工具栏
    @Input() paginator: boolean = true;

    // 第一条记录的分页中的序号
    @Input() pageStartRow: number = 0;

    // 树形结构时，树形展开收拢偏移数,默认偏移8px，等于0时，不发生位移
    // @Input() treeShiftingNumber: number = 8;

    // 表格加载提示文本,默认一定要为 false
    @Input() loadingSwitch: boolean = false;

    // 设置、获取列头层级数
    @Input()
    set headerLevel(headerLevel: any) {
        this._headerLevel = headerLevel;
    }

    get headerLevel() {
        return this._headerLevel;
    }

    // 界面传入的编辑配置信息
    @ViewChildren(KeyTableEditorComponent)
    editors: QueryList<KeyTableEditorComponent>;

    // 界面传入头部表格 ElementRef 信息
    @ViewChild("headerTable")
    headerTableEl: ElementRef;

    // 界面传入主体表格 ElementRef 信息
    @ViewChild("bodyTable")
    bodyTableEl: ElementRef;

    // 界面传入主体表格 - 表格 ElementRef 信息
    @ViewChild("bodyTableBody")
    bodyTableBodyEl: ElementRef;

    // 界面传入尾部表格 ElementRef 信息
    @ViewChild("footerTable")
    footerTableEl: ElementRef;

    // 加载中 - 层左边像素固定 left：px （用于水平滚动条时遮罩层固定位置）
    tableLoadMaskZindexLeft: number;

    // 加载中 - 层上边像素固定 top：px （用于垂直滚动条时遮罩层固定位置）
    tableLoadMaskZindexTop: number;

    // 列项层级数，默认为 0
    _headerLevel: number = 0;

    // 鼠标点击浏览器页面时，记录鼠标指针到浏览器页面的水平坐标（左边）
    startResizeX: number;

    // 可调整列项的状态，默认为 false，只有当点击 onStartResizeColumn 时，才会被激活为 true
    resizeCol: boolean = false;

    // 当前要进行拖动的列项
    targetColumn: KeyTableColumnComponent;

    // 当前要进行拖动的列项的宽度
    targetColumnWidth: number;

    // 表格行的高度，默认为 32 px
    headerHeight: number = 32;

    // key-table-inner 控件 ElementRef
    elementInner: ElementRef;

    changeDetectorRef: ChangeDetectorRef;

    constructor(protected element: ElementRef,
        protected componentHelper: ComponentHelper,
        protected renderer: Renderer2,
        protected changeDetector: ChangeDetectorRef) {
        this.changeDetectorRef = changeDetector;
        this.elementInner = this.element;
    }

    ngOnInit() {
        // 绑定 onStopResizeColumn、onResizeColumn 方法
        this.onStopResizeColumn = this.onStopResizeColumn.bind(this);
        this.onResizeColumn = this.onResizeColumn.bind(this);
    }

    ngAfterViewInit() {
        
    }

    /**
     * 为 key-table-inner 控件添加滚动监听事件
     * @param event
     * @param isScroll 用于同步滚动触发的事件（分栏表格）
     */
    @HostListener("scroll", ["$event"])
    public onScroll(event: any, isScroll?: boolean, tableTrigger?: "left" | "right") {
        if (!tableTrigger) {
            tableTrigger = "right";
        }
        let target = event.target;
        // 表格加载提示，设置水平滚动条时遮罩层固定位置
        if (!this.lockTable && tableTrigger == "right") {
            this.tableLoadMaskZindexLeft = target.scrollLeft;
            this.tableLoadMaskZindexTop = target.scrollTop;
        }
        // 分栏表格 => 同步两个表格滚动条，使行数据项对应
        if (isScroll) {
            this.setScrollTop(target.scrollTop);
        }
    }

    /**
     * 获取滚动条滚动位置
     */
    getScrollTop() {
        return this.element.nativeElement.scrollTop;
    }

    /**
     * 设置滚动条滚动位置
     * @param scrollTop 
     */
    setScrollTop(scrollTop: any) {
        this.renderer.setProperty(this.element.nativeElement, "scrollTop", scrollTop);
    }

    /**
     * 列项拖动 => 鼠标被按下时，触发该事件
     * @param event
     * @param column
     */
    onStartResizeColumn(event: any, column: KeyTableColumnComponent) {
        // 添加 mousemove 、mouseup 监听事件
        this.componentHelper.getDocument().addEventListener("mousemove", this.onResizeColumn);
        this.componentHelper.getDocument().addEventListener("mouseup", this.onStopResizeColumn);
        // 开始移动时，添加全局文字不能选中样式
        this.renderer.addClass(document.body, "key-body-user-select-none");
        let col = this.findResizeWidthColumn(column);
        let width = Number(col.width);
        if (isNaN(width)) {
            // 当 width 值不是一个数字时，直接获取它的上一级标签（th）的宽度作为列项的宽度（width）
            width = event.target.parentElement.offsetWidth;
        }
        this.resizeCol = true;
        this.startResizeX = event.clientX;
        this.targetColumn = col;
        this.targetColumnWidth = width;
    }

    /**
     * 列项拖动 => 鼠标被松开时，触发该事件
     * @param event
     */
    onStopResizeColumn(event: any) {
        if (this.resizeCol) {
            this.resizeCol = false;
            this.resizeColumn(this.startResizeX, event.clientX);

            // 用于解决表格列项移动时，界面没能自动更新
            this.updateEmptyColumn = true;
            setTimeout(() => {
                this.updateEmptyColumn = false;
            }, 1);

            // 移除 mousemove 、mouseup 监听事件
            this.componentHelper.getDocument().removeEventListener("mousemove", this.onResizeColumn);
            this.componentHelper.getDocument().removeEventListener("mouseup", this.onStopResizeColumn);
            // 结束移动时，移除全局文字不能选中样式
            this.renderer.removeClass(document.body, "key-body-user-select-none");
        }
    }

    /**
     * 列项拖动 => 鼠标被按下，并且移动鼠标时，触发该事件
     * @param event
     */
    onResizeColumn(event: any) {
        if (this.resizeCol) {
            this.resizeColumn(this.startResizeX, event.clientX);
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * 列项拖动 => 实时调整列项宽度
     *
     * 相关事件：
     * columnWidthChange 列项宽度变更事件
     *
     * @param startX
     * @param currentX
     */
    resizeColumn(startX: number, currentX: number) {
        let move = currentX - startX;
        let w = this.targetColumnWidth + move;
        if (w > 50) {
            let currentWidth = this.targetColumn.width;
            this.targetColumn.width = w;
            this.columnWidthChange.emit({
                column: this.targetColumn,
                value: w - currentWidth
            });

            // TODO: 界面拖动显示效果待提升，拖动时，会有一些线条未能及时更新
            // 用于解决表格列移动时，界面没能自动更新
            this.updateEmptyColumn = true;
        }
    }

    /**
     * 获取实际要改变列宽的列项
     * @param column
     * @returns {KeyTableColumnComponent}
     */
    findResizeWidthColumn(column: KeyTableColumnComponent): KeyTableColumnComponent {
        if (column.hasChildColumns()) {
            // 有子级列项时，找出最右边的子级列项，并且返回该子级列项
            let col: KeyTableColumnComponent;
            for (let i = column.childColumns.length - 1; i >= 0; i--) {
                col = column.childColumns[i];
                if (col.hasChildColumns()) {
                    return this.findResizeWidthColumn(col);
                } else {
                    if (this.isShowCol(col)) {
                        return col;
                    }
                }
            }
        } else {
            // 没有子级列项时，直接返回当前列项
            return column;
        }
    }

    /**
     * 表格列头 => 点击列项，对列项数据进行排序
     *
     * 相关事件：
     * sortOrder 列项排序变更事件
     *
     * @param column
     * @param order 由 table-heading 提供
     */
    onColumnSort(column: KeyTableColumnComponent, order: "asc" | "desc") {
        // 当表格有数据的时候，才可以进行排序
        if (!(!!this.data && this.data.length > 0)) {
            return;
        }
        // 清空所有列项的排序状态
        this.columnsFormat.forEach((columns: any) => {
            columns.forEach((col: any) => {
                col.sortOrder = null;
            });
        });
        // 设置当前列项排序状态
        column.sortOrder = order;
        this.sortChange.emit({
            key: column.key,
            order: order
        });
    }

    /**
     * 是否显示列项
     * @param col
     * @returns {boolean}
     */
    isShowCol(col: KeyTableColumnComponent) {
        return !col.isHidden(this.lockTable);
    }

    /**
     * 获取列项可横跨的列数
     * @param col
     * @returns {number}
     */
    getSpanCol(col: KeyTableColumnComponent) {
        return col.getSpanCol(this.lockTable);
    }

    /**
     * 获取列项的高度值
     * @param col
     * @returns {number}
     */
    getColumnHeight(col: KeyTableColumnComponent) {
        if (!col.height) {
            if (!col.hasChildColumns()) {
                col.height = (this._headerLevel - col.getLevel() + 1) * this.headerHeight;
            } else {
                col.height = this.headerHeight;
            }
        }
        return col.height;
    }

    /**
     * 判断指定行是不是为选中单元格
     * @param row
     * @param col
     * @returns {boolean}
     */
    isRowSelected(row: any) {
        let index = -1;
        let selection = this.selection;
        let idField = this.idField;
        if (selection) {
            if (selection instanceof Array) {
                // 多选模式
                for (let i = 0, len = selection.length; i < len; i++) {
                    if (selection[i].row[idField] == row[idField]) {
                        index = i;
                        break;
                    }
                }
            } else {
                // 单选模式
                if (selection.row[idField] == row[idField]) {
                    index = 1;
                }
            }
        }
        return index != -1;
    }

    /**
     * 判断指定单元格是不是为选中单元格
     * @param row
     * @param col
     * @returns {boolean}
     */
    isCellSelected(row: any, col: KeyTableColumnComponent) {
        return this.isActive({ row: row, key: col.key }) != -1;
    }

    /**
     * 判断是否为选中单元格
     * @param select
     * @returns {number}
     */
    isActive(select: { row: any, key?: any }) {
        let index = -1;
        let selection = this.selection;
        let idField = this.idField;
        let selCell: any = null;
        if (selection) {
            if (selection instanceof Array) {
                // 多选模式
                if (this.isRowSelectModel()) {
                    // 行选中模式
                    for (let i = 0, len = selection.length; i < len; i++) {
                        selCell = selection[i];
                        if (selCell.row[idField] == select.row[idField]) {
                            index = i;
                            break;
                        }
                    }
                } else if (this.isColSelectModel()) {
                    // 列选中模式
                    for (let i = 0, len = selection.length; i < len; i++) {
                        selCell = selection[i];
                        if (selCell.key == select.key) {
                            index = i;
                            break;
                        }
                    }
                } else if (this.isCellSelectModel()) {
                    // 单元格选中模式
                    for (let i = 0, len = selection.length; i < len; i++) {
                        selCell = selection[i];
                        if (selCell.row[idField] == select.row[idField] && selCell.key == select.key) {
                            index = i;
                            break;
                        }
                    }
                } else if (this.isCrossSelectModel()) {
                    // 十字架选中模式
                    for (let i = 0, len = selection.length; i < len; i++) {
                        selCell = selection[i];
                        if (selCell.key == select.key) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        for (let i = 0; i < selection.length; i++) {
                            selCell = selection[i];
                            if (selCell.row[idField] == select.row[idField]) {
                                index = i;
                                break;
                            }
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
                } else if (this.isCellSelectModel()) {
                    // 单元格选中模式
                    if (selCell.row[idField] == select.row[idField] && selCell.key == select.key) {
                        index = 1;
                    }
                } else if (this.isCrossSelectModel()) {
                    // 十字架选中模式
                    if (selCell.key == select.key) {
                        index = 1;
                    } else if (selCell.row[idField] == select.row[idField]) {
                        index = 1;
                    }
                }
            }
        }
        return index;
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
     * 单元格点击事件
     *
     * 相关事件
     * cellClick 单元格点击事件
     *
     * @param event
     * @param row
     * @param col
     */
    onCellClick(event: any, row: any, col: KeyTableColumnComponent) {
        this.cellClick.emit({
            component: this, event: event, value: {
                row: row,
                key: col.key,
                value: row[col.key]
            }
        });
    }

    /**
     * 通过 key 或者 index 跟踪迭代中的列项数据(提高性能)
     * @param index
     * @param column
     * @returns {string|number}
     */
    columnTrackBy(index: number, column: KeyTableColumnComponent) {
        return column.key || index;
    }

    /**
     * 通过 idField 或者 index 跟踪迭代中的表格内容数据(提高性能)
     * @param index
     * @param record
     * @returns {number}
     */
    dataTrackBy(index: number, data: any) {
        return this.idField ? data[this.idField] : index;
    }
}
