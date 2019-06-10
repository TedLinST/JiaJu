/**
 * Created by Z.cr on 2018-4-11.
 * 编辑类型为 combobox
 *
 * 基本用例
 * let comboboxDataSource: any[] = [
 *     {id: 1, text: "成功"},
 *     {id: 2, text: "失败"},
 *     {id: 3, text: "成功"},
 *     {id: 4, text: "失败"},
 * ];
 * <key-table-column heading="下拉框" key="editCombobox">
 *     <key-table-editor-combobox [data]="comboboxDataSource">
 *     </key-table-editor-combobox>
 * </key-table-column>
 *
 */

import { Component, Input } from "@angular/core";
import { KeyTableEditorTextComponent } from "./table-editor-text.component";

@Component({
    selector: "key-table-editor-combobox",
    template: "",
    providers: [
        {provide: KeyTableEditorTextComponent, useExisting: KeyTableEditorComboboxComponent}
    ]
})
export class KeyTableEditorComboboxComponent {

    /**
     * 验证函数参数为(value:string,row:any,formatValue?:any)
     * value 值
     * row 行值
     * formatValue 格式化后的值
     * 返回值为:"错误信息"
     */
    @Input() validatorFn: Function;

    // 数据源 - id标识，默认为 id
    @Input() idField: string = "id";

    // 数据源 - 名称标识，默认为 text
    @Input() textField: string = "text";

    // required 属性
    @Input() required: boolean = false;

    // 文本对齐方式
    @Input() align: string;

    // 点击事件停止冒泡
    @Input() clickEventStopPropagation: boolean = true;

    // 值发生改变触发自定义 change 方法
    @Input() onChangeCustom: Function;

    // 设置、获取下拉列表框数据
    @Input()
    set data(data: Array<any>) {
        if (!!data) {
            this._data = [];
            data.forEach((item: any) => {
                this._data.push({
                    id: item[this.idField],
                    text: item[this.textField],
                });
            });
        }
    }

    get data() {
        return this._data;
    }

    // 下拉列表框数据源
    _data: any[];

    // 设置、获取 select 元素文本提示信息
    @Input()
    set placeholder(placeholder: string) {
        this._placeholder = placeholder;
    }

    get placeholder() {
        if (!!this._placeholder) {
            return this._placeholder;
        } else {
            return "请选择";
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
