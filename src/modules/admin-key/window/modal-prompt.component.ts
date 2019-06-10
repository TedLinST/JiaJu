/**
 * Created by Z.cr on 2018-1-30.
 * 提示框（成功、提示、警告、危险）
 *
 * 基本用例
 * <key-modal-prompt *ngIf="toggleModalPromptState" header="提示" type="info" [open]="true"
 *     (close)="closeModalPrompt()"message="模态消息提示框:提示文本内容。">
 *     <div footer class="flex flex-h flex-grow-1">
 *         <button class="btn btn-info flex flex-grow-1" (click)="onModalPrompt(true)">确定</button>
 *         <button class="btn btn-default flex flex-grow-1" (click)="onModalPrompt(false)">取消</button>
 *     </div>
 * </key-modal-prompt>
 */

import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { Utils } from 'src/modules/utils/utils';
import { IdCounter } from 'src/modules/utils/id-counter';
import { ComponentHelper } from '../common/component-helper';
import { DomHandler } from 'src/modules/utils/dom-handler';

@Component({
    selector: "key-modal-prompt",
    templateUrl: "./modal-prompt.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyModalPromptComponent implements OnInit {

    // 关闭窗口，触发该事件
    @Output() close: EventEmitter<any> = new EventEmitter();

    // 窗口名称
    @Input() header: string = "";

    // 大窗口，默认为 false
    @Input() largest: boolean = false;

    // 小窗口，默认为 false
    @Input() smallest: boolean = false;

    // 隐藏窗口的尾部，默认为 false
    @Input() hiddenFooter: boolean = false;

    // 自定义主体提示内容，默认为 false
    @Input() bodyPrompt: boolean = false;

    // 提示类型，默认为 warning
    @Input() type: "info" | "warning" | "danger" | "success" = "info";

    // 提示内容标题
    @Input() messageHeader: string;

    // 提示内容
    @Input() message: string;

    // 提示内容排列，默认为 left
    @Input() textAlign: "left" | "center" | "right" = "left";

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
    modalPromptId = IdCounter.newId("key-modal-prompt");

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

    @ViewChild("modalDialog")
    modalDialogDiv: ElementRef;

    @ViewChild("modalPrompt")
    modalPromptEl: ElementRef;

    @ViewChild("modalBackdrop")
    modalBackdropDiv: ElementRef;

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
        let modalDialogDivParams: any = DomHandler.getElementBasicParams(this.modalDialogDiv.nativeElement);
        if (modalDialogDivParams != null) {
            if (!!modalDialogDivParams.offsetLeft) {
                this.modalOffsetLeft = modalDialogDivParams.offsetLeft;
            }
            if (!!modalDialogDivParams.offsetTop) {
                this.modalOffsetTop = modalDialogDivParams.offsetTop;
            }
            if (!!modalDialogDivParams.clientWidth) {
                this.modalClientWidth = modalDialogDivParams.clientWidth;
            }
            if (!!modalDialogDivParams.clientHeight) {
                this.modalClientHeight = modalDialogDivParams.clientHeight;
            }
        }

        // 遮罩层可见区域参数
        let modalBackdropDivParams: any = DomHandler.getElementBasicParams(this.modalBackdropDiv.nativeElement);
        if (modalBackdropDivParams != null) {
            if (!!modalBackdropDivParams.clientWidth) {
                this.modalBackdropClientWidth = modalBackdropDivParams.clientWidth;
            }
            if (!!modalBackdropDivParams.clientHeight) {
                this.modalBackdropClientHeight = modalBackdropDivParams.clientHeight;
            }
        }

        // modal过长，出现滚动条，相关处理
        if (this.modalPromptEl.nativeElement.clientHeight > this.modalClientHeight + 30) {
            this.modalPromptEl.nativeElement.style.overflowY = "hidden";
        } else {
            this.modalPromptEl.nativeElement.style.overflowY = "auto";
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
        let modalDialogEl = this.modalDialogDiv.nativeElement;
        let moveX = currentX - downX;
        let moveY = currentY - downY;
        // 移动距离小于5px，则不执行下面的代码
        if (Math.abs(moveX) < 5 && Math.abs(moveY) < 5) {
            return;
        }
        // 控制左右两边剩下的宽度
        let L = this.modalOffsetLeft + moveX;
        if (L <= -this.modalClientWidth + 12) {
            L = -this.modalClientWidth + 12;
        } else if (L >= this.modalBackdropClientWidth - 12) {
            L = this.modalBackdropClientWidth - 12;
        }
        // 控制上下两边剩下的高度
        let T = this.modalOffsetTop + moveY - 160;
        if (T < -160) {
            T = -160;
        } else if (T >= this.modalBackdropClientHeight - 172) {
            T = this.modalBackdropClientHeight - 172;
        }
        // 设置modal位置
        if (Math.abs(L) > 0 || Math.abs(T) > 0) {
            this.renderer.setStyle(modalDialogEl, "position", "absolute");
            this.renderer.setStyle(modalDialogEl, "left", L + "px");
            this.renderer.setStyle(modalDialogEl, "top", T + "px");
        }
    }

}
