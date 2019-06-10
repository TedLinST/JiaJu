/**
 * Created by Z.cr on 2018-1-30.
 *
 * 基本用例
 * <key-button icon="tasks">
 *     <key-sub-button icon='close' label="关闭其他" (click)="close()"></key-sub-button>
 * </key-button>
 */

import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from "@angular/core";

@Component({
    selector: "key-sub-button",
    templateUrl: "./sub-button.component.html"
})
export class KeySubButtonComponent implements OnInit {

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

    // 按钮组样式
    @Input() classes: any;

    // 按钮可点击状态
    @Input() disabled: boolean;

    // 子级按钮显示状态
    @Input() open: boolean = false;

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
        if (this.subButtons && this.subButtons.length > 1) {
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
