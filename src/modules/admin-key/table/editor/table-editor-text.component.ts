/**
 * Created by Z.cr on 2018-2-6.
 * 编辑类型为 text
 *
 * 基本用例
 * <key-table-column heading="文本" key="editText">
 *     <key-table-editor-text></key-table-editor-text>
 * </key-table-column>
 */

import { Component, Input } from "@angular/core";

@Component({
    selector: "key-table-editor-text",
    template: ""
})
export class KeyTableEditorTextComponent {

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

    // minLength 属性
    @Input() minLength: number;

    // maxLength 属性
    @Input() maxLength: number;

    // 文本对齐方式
    @Input() align: string = "left";

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
            if (!!this.minLength) {
                return "请输入内容大于(" + this.minLength + "个字符)";
            }
            if (!!this.maxLength) {
                return "请输入内容(" + this.maxLength + "个字符以内)";
            } else {
                return "请输入内容";
            }
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
