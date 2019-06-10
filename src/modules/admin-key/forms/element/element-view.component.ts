/*
 * @Author: ZengChuangRong 
 * @Date: 2018-10-19 11:18:38 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-10-19 11:19:28
 * 
 * 表单元素展示
 * 
 */

import { ChangeDetectionStrategy, Component, Input, ViewChild, ElementRef, AfterContentInit } from "@angular/core";

@Component({
    selector: "key-form-element-view",
    templateUrl: "./element-view.component.html",
    // 当使用 OnPush 策略的时候，若输入属性没有发生变化，组件的变化检测将会被跳过
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyElementViewComponent implements AfterContentInit {

    // 标签名称
    @Input() label: string;

    // 标签名称后面冒号
    @Input() colon: boolean = true;

    // 标签名称宽度
    @Input() labelWidth: number;

    // 显示值
    @Input() value: any;

    // 下划线样式
    @Input() underlineClass: boolean = true;

    // 追加html文本
    @Input() innerHTML: boolean = false;

    @ViewChild("innerHTML")
    public innerHTMLEl: ElementRef;

    ngAfterContentInit() {
        if (this.innerHTML) {
            setTimeout(() => {
                if (!!this.innerHTMLEl) {
                    this.innerHTMLEl.nativeElement.innerHTML = this.value;
                }
            }, 300);
        }
    }

}
