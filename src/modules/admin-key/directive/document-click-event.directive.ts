/**
 * Created by Z.cr on 2018-1-12.
 *
 * 说明：
 *     向浏览器DOM文档添加点击事件，用于监听用户的点击操作
 *     只有当控件被销毁时，浏览器DOM文档中这个点击事件的监听才会被销毁掉
 *
 * 基本用例
 * clickedOutside 为一个方法
 * <ol class="breadcrumb" [keyDocumentClick]="clickedOutside">
 *     ……
 * </ol>
 *
 */

import { Directive, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { ComponentHelper } from "../common/component-helper";

@Directive({
    selector: "[keyDocumentClick]"
})
export class KeyDocumentClickEventDirective implements OnInit, OnDestroy {

    // 点击 Document 后，要处理相应操作的方法
    @Input() keyDocumentClick: any;

    public el: ElementRef;

    public componentHelper: ComponentHelper;

    constructor(el: ElementRef, componentHelper: ComponentHelper) {
        this.el = el;
        this.componentHelper = componentHelper;
    }

    public ngOnInit(): any {
        if (this.keyDocumentClick) {
            this.clickEvent = this.clickEvent.bind(this);
            setTimeout(() => {
                // 添加监听点击事件
                this.componentHelper.getDocument().addEventListener("click", this.clickEvent);
            }, 0);
        }
    }

    public ngOnDestroy(): any {
        // 移除监听点击事件
        this.componentHelper.getDocument().removeEventListener("click", this.clickEvent);
    }

    /**
     * 点击事件方法
     * @param event
     */
    public clickEvent(event: MouseEvent) {
        // 判断点击事件是否包含在 [keyDocumentClick] 宿主元素内，在则不执行 keyDocumentClick 方法
        if (!this.el.nativeElement.contains(event.target)) {
            if (this.keyDocumentClick) {
                this.keyDocumentClick();
            }
        }
    }
}
