/**
 * Created by Z.cr on 2018-2-7.
 * 编辑类型为 date
 * type: "datetime-local" | "date" | "month" | "time" | "week"
 *
 * 基本用例
 * <key-table-column heading="日期" key="editDate" sortable>
 *     <key-table-editor-date [required]="true"></key-table-editor-date>
 * </key-table-column>
 *
 * <key-table-column heading="时间" key="editTime" sortable>
 *     <key-table-editor-date [required]="true" type="time"></key-table-editor-date>
 * </key-table-column>
 */

import { Component, Input } from "@angular/core";
import { KeyTableEditorTextComponent } from "./table-editor-text.component";

@Component({
    selector: "key-table-editor-date",
    template: "",
    providers: [
        {provide: KeyTableEditorTextComponent, useExisting: KeyTableEditorDateComponent}
    ]
})
export class KeyTableEditorDateComponent {

    /**
     * 验证函数参数为(value:string,row:any,formatValue?:any)
     * value 值
     * row 行值
     * formatValue 格式化后的值
     * 返回值为:"错误信息"
     */
    @Input() validatorFn: Function;

    // required 属性
    @Input() required: boolean;

    // min 属性
    @Input() min: string;

    // max 属性
    @Input() max: string;

    // step 属性
    @Input() step: number;

    // type 属性，默认为 date
    @Input() type: "datetime-local" | "date" | "month" | "time" | "week" = "date";

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
            return "请输入日期，格式为：2018-01-01";
        }
    }

    // 文本提示信息
    _placeholder: string;

    // 日期格式，默认为 "YYYY-MM-DD"
    format: string = "YYYY-MM-DD";

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
