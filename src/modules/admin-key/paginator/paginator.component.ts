/*
 * @Author: ZengChuangRong 
 * @Date: 2018-10-18 15:11:28 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-11-19 18:03:32
 * 
 * 基本用例
 * 
    pageCurrent: number = 1;
    totalRecords: number = 100;
    pageSize: number = 25;
    <key-paginator
        [(ngModel)]="pageCurrent"
        [totalItems]="totalRecords"
        [pageSize]="pageSize"
        (pageChanged)="onPageChanged($event)"
        (refresh)="onRefresh($event)">
    </key-paginator>
 * 
 */

import { Component, EventEmitter, Input, OnInit, Output, Self } from "@angular/core";
import { NgModel } from "@angular/forms";
import { KeyPagingEventInfo } from "./paging-event-info";

@Component({
    selector: "key-paginator",
    templateUrl: "./paginator.component.html",
    providers: [NgModel]
})
export class KeyPaginatorComponent implements OnInit {

    // 设置数据总页数后，触发该回调事件，返回数据总页数值
    @Output() numPages: EventEmitter<number> = new EventEmitter<number>(false);

    // 设置当前页后，触发该回调事件
    @Output() pageChanged: EventEmitter<KeyPagingEventInfo> = new EventEmitter<KeyPagingEventInfo>(false);

    // 点击刷新按钮，触发该回调事件
    @Output() refresh: EventEmitter<KeyPagingEventInfo> = new EventEmitter<KeyPagingEventInfo>(false);

    // 最大分页链接数量，默认为 5 个分页按钮
    @Input() maxSize: number = 5;

    // 按钮禁用状态
    @Input() disabled: boolean;

    // 分页 class 样式
    @Input() classes: string;

    // 每页数量大小选项
    @Input() pageOptions = [10, 25, 50, 100];

    // 显示刷新按钮
    @Input() canRefresh: boolean = true;

    // 显示切换分页大小
    @Input() canPageSize: boolean = true;

    // 设置、获取每页的数量
    @Input()
    get pageSize(): number {
        return this._pageSize;
    }

    set pageSize(v: number) {
        this._pageSize = v;
        this.totalPages = this.calculateTotalPages();
    }

    // 设置、获取数据总行数
    @Input()
    get totalItems(): number {
        return this._totalItems;
    }

    set totalItems(v: number) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }

    // 设置、获取数据总页数
    get totalPages(): number {
        return this._totalPages;
    }

    set totalPages(v: number) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            // TODO: 解决 ANGULAR 检测变更时，抛出的错误 ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(() => {
                this.selectPage(this.page);
            }, 10);
        }
    }

    // 设置、获取当前页
    set page(value: number) {
        const _previous = this._page;

        this._page = (value > this.totalPages) ? this.totalPages : (value || 1);

        if (_previous === this._page || typeof _previous === "undefined") {
            return;
        }
        this.pageChanged.emit(this.getPageEventInfo());
    }

    get page(): number {
        return this._page;
    }

    // 每页的数量,默认为 25 条数据
    _pageSize: number = 25;

    // 数据总行数
    _totalItems: number;

    // 数据总页数
    _totalPages: number;

    // 当前页
    _page: number;

    // ngOnInit 初始化之后，才执行 selectPage 方法
    inited: boolean = false;

    // 当前分页链接数组
    pages: Array<any>;

    // 分页每页数量大小菜单状态，默认为 false
    pageSizeMenuState: boolean = false;

    // 模型change函数
    onModalChange: any = Function.prototype;

    // 模型touched函数
    onModelTouched: any = Function.prototype;

    constructor(@Self() private cd: NgModel) {
        cd.valueAccessor = this;
    }

    ngOnInit() {
        this.clickedOutside = this.clickedOutside.bind(this);
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.page = this.cd.value;
        this.inited = true;
    }

    /**
     * 该方法用于将模型中的新值写入视图或 DOM 属性中，由 forms API 调用
     * @param value
     */
    writeValue(value: number): void {
        // 设置当前页
        this.page = value;
        // 设置当前分页链接数组
        this.pages = this.getPages(this.page, this.totalPages);
    }

    /**
     * 注册一个回调函数，设置当控件接收到 change 事件后，调用的函数
     * @param fn
     */
    registerOnChange(fn: Function): void {
        this.onModalChange = fn;
    }

    /**
     * 注册一个回调函数，设置当控件接收到 touched 事件后，调用的函数
     * @param fn
     */
    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    /**
     * 设置为当前页，并更新视图模型
     * @param page
     * @param event
     */
    selectPage(page: number, event?: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                let target: any = event.target;
                target.blur();
            }
            this.writeValue(page);
            // 更新视图模型
            this.cd.viewToModelUpdate(this.page);
        }
    }

    /**
     * 获取当前的分页链接数组
     * @param currentPage
     * @param totalPages
     * @returns {any[]}
     */
    getPages(currentPage: number, totalPages: number): Array<any> {
        let pages: any[] = [];

        // 限制基本的分页数
        let startPage = 1;
        let endPage = totalPages;
        let isMaxSized = typeof this.maxSize !== "undefined" && this.maxSize < totalPages;

        // 判断是否需要重新计算最大分页链接数量（maxSize）
        if (isMaxSized) {
            // 使当前页在可见分页栏的中间
            startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
            endPage = startPage + this.maxSize - 1;
            // 结束页如果超出总页数的大小，则需要重新调整要显示的页数
            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - this.maxSize + 1;
            }
        }

        // 添加分页数（pageNum）的链接数量
        for (let num = startPage; num <= endPage; num++) {
            let page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }

        return pages;
    }

    // 制作成页数（pageNum）对象中使用的模板
    makePage(num: number, text: string, isActive: boolean): { number: number, text: string, active: boolean } {
        return {
            number: num,
            text: text,
            active: isActive
        };
    }

    /**
     * 计算总页数
     * @returns {number}
     */
    calculateTotalPages(): number {
        let totalPages = this.pageSize < 1 ? 1 : Math.ceil(this.totalItems / this.pageSize);
        return Math.max(totalPages || 0, 1);
    }

    /**
     * 获取分页事件
     * @returns {{pageNum: number, pageSize: number, pageStartRow: number}}
     */
    getPageEventInfo(): KeyPagingEventInfo {
        return {
            pageNum: this._page,
            pageSize: this.pageSize,
            pageStartRow: (this._page - 1) * this.pageSize
        };
    }

    /**
     * 判断 第一页、上一页 是否为禁用状态
     * @returns {boolean}
     */
    noPrevious(): boolean {
        return this.page === 1;
    }

    /**
     * 判断 下一页、最后一页 是否为禁用状态
     * @returns {boolean}
     */
    noNext(): boolean {
        return this.page === this.totalPages;
    }

    /**
     * 点击刷新按钮
     * @param event
     */
    refreshEvent(event: MouseEvent) {
        if (event) {
            event.preventDefault();
        }
        this.refresh.emit(this.getPageEventInfo());
    }

    /**
     * 更新每页数量
     * @param pageSize
     * @param evetn
     */
    updatePageSize(pageSize: number, evetn: MouseEvent) {
        if (event) {
            event.preventDefault();
        }
        if (this.pageSize == pageSize) {
            return;
        }

        // 每页数量改变，可能会改变页码
        let oldPageNum = this._page;
        this.pageSize = pageSize;
        let newPageNum = this._page;

        // 判断页码是否变化，如果变化了，就不再触发页面变化事件，交由页码变化时触发
        if (oldPageNum == newPageNum) {
            this.pageChanged.emit(this.getPageEventInfo());
        }
        this.pageSizeMenuState = false;
    }

    /**
     * 切换分页每页数量大小选项菜单显示状态
     * @param event
     */
    changePageSizeMenuState(event: MouseEvent) {
        if (event) {
            event.preventDefault();
        }
        this.pageSizeMenuState = !this.pageSizeMenuState;
    }

    /**
     * 点击分页每页数量大小选项之外要执行的方法
     * @param event
     */
    clickedOutside(event: any): void {
        if (this.pageSizeMenuState) {
            this.pageSizeMenuState = false;
        }
    }
}
