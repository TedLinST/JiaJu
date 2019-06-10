/**
 * Created by Z.cr on 2018-2-1.
 *
 * 基本用例
 * <div class="modal-header-move"
 *     [keyDocumentMouseMove]="onModalMouseMove"
 *     [keyDocumentMouseUp]="onModalMouseUp"
 *     (mousedown)="onModalMouseDown($event)">
 * </div>
 *
 */

import { Directive, Input, OnDestroy, OnInit } from "@angular/core";
import { ComponentHelper } from "../common/component-helper";

/**
 * 属性名: keyDocumentMouseMove
 * 向浏览器DOM文档添加鼠标移动事件，用于监听用户的鼠标移动操作
 * 只有当控件被销毁时，浏览器DOM文档中这个事件的监听才会被销毁掉
 */
@Directive({
    selector: "[keyDocumentMouseMove]"
})
export class KeyDocumentMouseMoveEventDirective implements OnInit, OnDestroy {

    // 鼠标指针移动时，要执行的方法
    @Input() keyDocumentMouseMove: any;

    componentHelper: ComponentHelper;

    constructor(componentHelper: ComponentHelper) {
        this.componentHelper = componentHelper;
        this.mouseMoveEvent = this.mouseMoveEvent.bind(this);
    }

    ngOnInit(): any {
        setTimeout(() => {
            // 添加鼠标指针移动事件
            this.componentHelper.getDocument().addEventListener("mousemove", this.mouseMoveEvent);
        }, 0);
    }

    ngOnDestroy(): any {
        // 移除鼠标指针移动事件
        this.componentHelper.getDocument().removeEventListener("mousemove", this.mouseMoveEvent);
    }

    mouseMoveEvent(event: any) {
        this.keyDocumentMouseMove(event);
    }

}

/**
 * 属性名: keyDocumentMouseUp
 * 向浏览器DOM文档添加鼠标按键被松开事件，用于监听用户的鼠标按键操作
 * 只有当控件被销毁时，浏览器DOM文档中这个事件的监听才会被销毁掉
 */
@Directive({
    selector: "[keyDocumentMouseUp]"
})
export class KeyDocumentMouseUpEventDirective implements OnInit, OnDestroy {

    // 放松鼠标按钮时,要执行的方法
    @Input() keyDocumentMouseUp: any;

    componentHelper: ComponentHelper;

    constructor(componentHelper: ComponentHelper) {
        this.componentHelper = componentHelper;
        this.mouseUpEvent = this.mouseUpEvent.bind(this);
    }

    ngOnInit(): any {
        setTimeout(() => {
            // 添加放松鼠标按钮时事件
            this.componentHelper.getDocument().addEventListener("mouseup", this.mouseUpEvent);
        }, 0);
    }

    ngOnDestroy(): any {
        // 移除放松鼠标按钮时事件
        this.componentHelper.getDocument().removeEventListener("mouseup", this.mouseUpEvent);
    }

    mouseUpEvent(event: any) {
        this.keyDocumentMouseUp(event);
    }
}
