/*
 * @Author: ZengChuangRong 
 * @Date: 2018-08-16 16:34:14 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2019-01-28 16:31:48
 * 
 * 基本用例
 * <key-button icon="tasks">
 *     <key-sub-button icon='close' label="关闭其他" (click)="close()"></key-sub-button>
 *     <key-sub-button-line></key-sub-button-line>
 *     <key-sub-button label="首页" (click)="home(null)"></key-sub-button>
 * </key-button>
 * 
 */
import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from "@angular/core";
import { KeySubButtonComponent } from "./sub-button.component";

@Component({
    selector: "key-button",
    templateUrl: "./button.component.html"
})
export class KeyButtonComponent implements OnInit {

    // 子级按钮显示状态发生变化的时候，触发该事件
    @Output() change: EventEmitter<any> = new EventEmitter();

    // 点击按钮的时候，触发该事件
    @Output() clickEvent: EventEmitter<any> = new EventEmitter();

    // 按钮名称
    @Input() label: string;

    // 按钮图标
    @Input() icon: string;

    // 按钮图标颜色
    @Input() iconColor: string;

    // 按钮图标颜色类样式
    @Input() iconColorClass: string;

    // 按钮可点击状态
    @Input() disabled: boolean;

    // 子级按钮上下显示位置，默认向下
    @Input() dropUp: boolean = false;

    // 子级按钮左右显示位置，默认向右
    @Input() dropRight: boolean = false;

    // 子级按钮显示状态
    @Input() open: boolean = false;

    // 按钮组样式
    @Input() classes: any;

    // 按钮颜色样式
    @Input() type: "default" | "primary" | "success" | "info" | "warning" | "danger" = "default";

    @ContentChildren(KeySubButtonComponent)
    subButtons: QueryList<KeySubButtonComponent>;

    ngOnInit() {
        // 对该方法进行绑定this
        this.clickedOutside = this.clickedOutside.bind(this);
    }

    // 关闭子级按钮
    closeSubMenu() {
        this.open = false;
    }

    // 切换子级按钮显示状态
    toggle() {
        if (this.disabled) {
            return;
        }
        this.open = !this.open;
        this.change.emit(this.open);
    }

    // 判断是否有子级按钮
    hasSubButtons() {
        if (this.subButtons && this.subButtons.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    // 按钮默认点击事件，当有子级按钮时，展开子级按钮
    defaultClick(event: any) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        if (this.hasSubButtons()) {
            this.toggle();
        } else {
            this.clickEvent.emit(event);
        }
    }

    // 判断子级按钮是否打开，当有打开则关闭
    clickedOutside(event: any): void {
        if (this.open) {
            this.closeSubMenu();
            this.change.emit(this.open);
        }
    }

}
