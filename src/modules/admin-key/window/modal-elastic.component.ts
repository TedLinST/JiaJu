/**
 * Created by Z.cr on 2018-1-30.
 *
 * 基本用例
 */

import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { Utils } from 'src/modules/utils/utils';
import { IdCounter } from 'src/modules/utils/id-counter';
import { ComponentHelper } from '../common/component-helper';
import { DomHandler } from 'src/modules/utils/dom-handler';

@Component({
    selector: "key-modal-elastic",
    templateUrl: "./modal-elastic.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyModalElasticComponent implements OnInit {

    // 关闭窗口，触发该事件
    @Output() close: EventEmitter<any> = new EventEmitter();

    // 窗口名称
    @Input() header: string = "";

    // 隐藏窗口的尾部，默认为 false
    @Input() hiddenFooter: boolean = false;

    // 大窗口，默认为 false
    @Input() largest: boolean = false;

    // 小窗口，默认为 false
    @Input() smallest: boolean = false;

    // 位置 left
    @Input() left: any;

    // 位置 right
    @Input() right: any;

    // 位置 top
    @Input() top: any;

    // 位置 bottom
    @Input() bottom: any;

    // 宽度 width
    @Input() width: any;

    // 头部按钮组，默认为 false
    @Input() convenientToolGroupHeader: boolean = false;

    // 窗口拖动功能，默认为 true
    @Input() canMouseMove: boolean = true;

    // 显示隐藏窗口(并不清理组件)
    @Input()
    set open(open: string | boolean) {
        let _open = Utils.toBoolean(open);
        if (_open === this._open) {
            return;
        }
        if (_open) {
            setTimeout(() => this.focusFirst());
        }
        this._open = _open;
    }

    get open() {
        return this._open;
    }

    // 窗口随机 Id
    modalId = IdCounter.newId("key-modal");

    // 窗口显示状态
    _open: boolean = false;

    // 鼠标按下时的X坐标
    mouseDownClientX: any;

    // 鼠标按下时的Y坐标
    mouseDownClientY: any;

    // 窗口到上级层左边的距离
    modalOffsetLeft: number;

    // 窗口到上级层顶部边的距离
    modalOffsetTop: number;

    // 窗口可见宽度
    modalClientWidth: number;

    // 窗口可见高度
    modalClientHeight: number;

    // 遮罩层可见宽度
    modalBackdropClientWidth: number;

    // 遮罩层可见高度
    modalBackdropClientHeight: number;

    // 窗口移动状态，默认为 false
    mouseMoveState: boolean = false;

    @ViewChild("modal")
    modalEl: ElementRef;

    constructor(private element: ElementRef, private renderer: Renderer2, private componentHelper: ComponentHelper) {
    }

    ngOnInit() {
        // 注册移动事件
        this.onModalMouseMove = this.onModalMouseMove.bind(this);
        this.onModalMouseUp = this.onModalMouseUp.bind(this);
    }

    /**
     * 关闭窗口
     * @param event
     */
    closeModal(event: string | boolean = false) {
        this.close.emit(event);
    }

    /**
     * 获取焦点
     */
    focusFirst() {
        this.renderer.listen(this.element.nativeElement.children[0], "focus", () => {
            // 空函数
        });
    }

    /**
     * 鼠标按下
     * @param event
     */
    onModalMouseDown(event: any) {

        // 添加监听事件
        this.componentHelper.getDocument().addEventListener("mousemove", this.onModalMouseMove);
        this.componentHelper.getDocument().addEventListener("mouseup", this.onModalMouseUp);

        this.mouseMoveState = true;
        this.mouseDownClientX = event.clientX;
        this.mouseDownClientY = event.clientY;

        // modal参数
        let modalDialogDivParams: any = DomHandler.getElementBasicParams(this.modalEl.nativeElement);
        if (modalDialogDivParams != null) {
            if (modalDialogDivParams.offsetLeft != null) {
                this.modalOffsetLeft = modalDialogDivParams.offsetLeft;
            }
            if (modalDialogDivParams.offsetTop != null) {
                this.modalOffsetTop = modalDialogDivParams.offsetTop;
            }
            if (modalDialogDivParams.clientWidth != null) {
                this.modalClientWidth = modalDialogDivParams.clientWidth;
            }
            if (modalDialogDivParams.clientHeight != null) {
                this.modalClientHeight = modalDialogDivParams.clientHeight;
            }
        }

        let contentBodyId = document.getElementById("content-body");
        if (contentBodyId) {

            // 遮罩层可见区域参数
            if (contentBodyId.clientWidth != null) {
                this.modalBackdropClientWidth = contentBodyId.clientWidth;
            }
            if (contentBodyId.clientHeight != null) {
                this.modalBackdropClientHeight = contentBodyId.clientHeight;
            }

            // modal过长，出现滚动条，相关处理
            if (contentBodyId.clientHeight > this.modalClientHeight) {
                contentBodyId.style.overflowY = "hidden";
            } else {
                contentBodyId.style.overflowY = "auto";
            }
        }
    }

    /**
     * 鼠标移动
     * @param event
     */
    onModalMouseMove(event: any) {
        if (this.mouseMoveState) {
            this.onMouseMoveDistance(this.mouseDownClientX, event.clientX, this.mouseDownClientY, event.clientY);
        }
    }

    /**
     * 鼠标松开
     * @param event
     */
    onModalMouseUp(event: any) {
        if (this.mouseMoveState) {
            this.onMouseMoveDistance(this.mouseDownClientX, event.clientX, this.mouseDownClientY, event.clientY);
            this.mouseMoveState = false;

            // 移除监听事件
            this.componentHelper.getDocument().removeEventListener("mousemove", this.onModalMouseMove);
            this.componentHelper.getDocument().removeEventListener("mouseup", this.onModalMouseUp);
        }
    }

    /**
     * 鼠标移动距离
     * @param downX
     * @param currentX
     * @param downY
     * @param currentY
     */
    onMouseMoveDistance(downX: number, currentX: number, downY: number, currentY: number) {

        let moveX = currentX - downX;
        let moveY = currentY - downY;
        // 移动距离小于5px，则不执行下面的代码
        if (Math.abs(moveX) < 5 && Math.abs(moveY) < 5) {
            return;
        }
        // 控制左右两边剩下的宽度
        let L = this.modalOffsetLeft + moveX;
        if (L <= -this.modalClientWidth + 15) {
            L = -this.modalClientWidth + 15;
        } else if (L >= this.modalBackdropClientWidth - 15) {
            L = this.modalBackdropClientWidth - 15;
        }
        // 控制上下两边剩下的高度
        let T = this.modalOffsetTop + moveY;
        if (T < -30) {
            T = -30;
        } else if (T >= this.modalBackdropClientHeight - 50) {
            T = this.modalBackdropClientHeight - 50;
        }
        // 设置modal位置
        if (Math.abs(L) > 0 || Math.abs(T) > 0) {
            let modalEl = this.modalEl.nativeElement;
            this.renderer.setStyle(modalEl, "position", "absolute");
            this.renderer.setStyle(modalEl, "left", L + "px");
            this.renderer.setStyle(modalEl, "top", T + "px");
        }
    }

}
