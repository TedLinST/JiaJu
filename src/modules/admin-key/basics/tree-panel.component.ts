/*
 * @Author: ZengChuangRong 
 * @Date: 2018-09-11 14:37:36 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-09-27 16:08:57
 */

import { AfterContentInit, Component, EventEmitter, Input, Output, ElementRef, HostBinding, Renderer2 } from "@angular/core";
import { KeyTreeComponent } from '../tree/tree.component';
import { Utils } from 'src/modules/utils/utils';

@Component({
    selector: "ck-tree-panel",
    templateUrl: "tree-panel.component.html"
})
export class TreePanelComponent implements AfterContentInit {

    // 行选中时，触发该回调事件
    @Output() rowSelectChange: EventEmitter<any> = new EventEmitter();

    // 点击刷新按钮，触发该回调事件
    @Output() refreshChange: EventEmitter<any> = new EventEmitter();

    // 数据源
    @Input() data: any[];

    // id标识字段
    @Input() idField: string = "id";

    // 值显示字段
    @Input() displayField: string = "value";

    // 链接字段
    @Input() hrefField: string;

    // 只能选中子级的行，默认为 false
    @Input() selectLeaf: boolean = false;

    // 点击行则展开子级，默认为false
    @Input() autoExpended: boolean = false;

    // 父级树组件
    @Input() parentTree: KeyTreeComponent;

    // 标题
    @Input() heading: any;

    // 面板类型(指的是面板显示的位置)
    @Input() panelType: "left" | "right" = "left";

    // 面板大小样式
    @Input() panelClass: "panel-xs" | "panel-sm" | "panel" | "panel-md" | "panel-lg" = "panel";

    // 面板大小宽度
    @Input() panelWidth: number;

    // 分割线类型
    @Input() splitLineType: "left" | "right" | "top" | "bottom" = "right";

    // 显示刷新按钮，默认为 true
    @Input() canRefresh: boolean = true;

    // 显示展开或闭合按钮，默认为 true
    @Input() canExpandAllBtn: boolean = true;

    @Input() widthAdaption: boolean = false;

    // 记录初始化时的展开或闭合按钮状态
    _canExpandAllBtn: boolean;

    // 分割线类型拼接
    _splitLineType: any;

    // 面板大小样式类型拼接
    _panelClass: any;

    constructor(private element: ElementRef, private render2: Renderer2) {

    }

    ngAfterContentInit() {
        this._canExpandAllBtn = this.canExpandAllBtn;
        this._splitLineType = "key-" + this.splitLineType + "-split-line";
        this._panelClass = "key-" + this.panelType + "-" + this.panelClass;

        if (this.widthAdaption) {
            this.render2.addClass(this.element.nativeElement, this._panelClass)
        }
    }

    /**
     * 点击刷新按钮
     */
    onRefresh() {
        this.canExpandAllBtn = this._canExpandAllBtn;
        this.refreshChange.emit(true);
    }

    /**
     * 全部闭合
     */
    collapseAll() {
        if (this.data != null && this.data.length > 0) {
            Utils.collapseAll(this.data);
            this.canExpandAllBtn = true;
        }
    }

    /**
     * 全部展开
     */
    expandAll() {
        if (this.data != null && this.data.length > 0) {
            Utils.expandAll(this.data);
            this.canExpandAllBtn = false;
        }
    }

    /**
     * 行选中
     * @param event {event: event, component: this, value: node}
     */
    rowSelect(event: any) {
        this.rowSelectChange.emit(event);
    }
}
