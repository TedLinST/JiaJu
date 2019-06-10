/**
 * Created by Z.cr on 2018-2-7.
 * 编辑类型为 number
 *
 * 基本用例
 * <key-table-column heading="数字" key="editNumber">
 *     <key-table-editor-number min="0" step="1" [decimals]="0" [required]="true" align="right">
 *     </key-table-editor-number>
 * </key-table-column>
 *
 */

import { Component, Input } from "@angular/core";
import { KeyTableEditorTextComponent } from "./table-editor-text.component";

@Component({
    selector: "key-table-editor-number",
    template: "",
    providers: [
        { provide: KeyTableEditorTextComponent, useExisting: KeyTableEditorNumberComponent }
    ]
})
export class KeyTableEditorNumberComponent {

    /**
     * 函数参数为(value:string,row:any,formatValue?:any)
     * value 值
     * row 行值
     * formatValue 格式化后的值
     * 返回值为:"错误信息"
     */
    @Input() validatorFn: Function;

    // required 属性
    @Input() required: boolean;

    // 允许输入的小数，默认为 2 位小数
    @Input() decimals: number = 2;

    // min 属性
    @Input() min: number;

    // max 属性
    @Input() max: number;

    // step 属性
    @Input() step: number;

    // 文本对齐方式
    @Input() align: string = "right";

    // 点击事件停止冒泡
    @Input() clickEventStopPropagation: boolean = true;

    // 值发生改变触发自定义 change 方法
    @Input() onChangeCustom: Function;

    // 设置、获取 input 元素文本提示信息
    @Input()
    set placeholder(placeholder: string) {
        this._placeholder = placeholder;
    }

    get placeholder() {
        if (!!this._placeholder) {
            return this._placeholder;
        } else {
            let msg = "输入整数";
            if (this.decimals > 0) {
                msg = "允许 " + this.decimals + " 位小数";
            }
            return msg;
        }
    }

    // 文本提示信息
    _placeholder: string;

    /**
     * 错误验证
     * @param value
     * @param row
     * @returns {any}
     */
    validate(value: string, row: any): string {
        return this.validatorFn(value, row);
    }
}
