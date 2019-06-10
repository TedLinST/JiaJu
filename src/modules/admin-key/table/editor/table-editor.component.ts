/**
 * Created by Z.cr on 2018-2-7.
 * 表格列项编辑
 * 类型: date、number、text、combobox
 *
 * 基本用例
 * <key-table-editor
 *     [realTime]="editingRealTime"
 *     [column]="col"
 *     [editor]="col.editor"
 *     [row]="row"
 *     [value]="row[col.key]">
 * </key-table-editor>
 *
 */

import { AfterContentInit, Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from "@angular/core";
import { KeyTableColumnComponent } from "../table-column.component";
import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";
import { KeyTableEditorTextComponent } from "./table-editor-text.component";
import { KeyTableEditorDateComponent } from "./table-editor-date.component";
import { KeyTableEditorNumberComponent } from "./table-editor-number.component";
import { KeyValidatorsHandler } from "../../../utils/validators-handler";
import { KeyTableEditorComboboxComponent } from "./table-editor-combobox.component";

@Component({
    selector: "key-table-editor",
    templateUrl: "./table-editor.component.html"
})
export class KeyTableEditorComponent implements OnInit, AfterContentInit {

    // 列项数据源
    @Input() column: KeyTableColumnComponent;

    // 行数据
    @Input() row: any;

    // 列项值
    @Input() value: any;

    // 编辑即时更新数据，默认为 false
    @Input() realTime: boolean = false;

    // 设置列项编辑、编辑类型
    @Input()
    set editor(editor: any) {
        if (editor instanceof KeyTableEditorTextComponent) {
            //  文本类型
            this._editor = <KeyTableEditorTextComponent>editor;
            this.editorType = "text";
        } else if (editor instanceof KeyTableEditorDateComponent) {
            // 日期类型的，有多种类型（例如: date、month）
            this._editor = <KeyTableEditorDateComponent>editor;
            this.editorType = this._editor.type;
        } else if (editor instanceof KeyTableEditorNumberComponent) {
            // 数字类型
            this._editor = <KeyTableEditorNumberComponent>editor;
            this.editorType = "number";
        } else if (editor instanceof KeyTableEditorComboboxComponent) {
            // 下拉框类型
            this._editor = <KeyTableEditorComboboxComponent>editor;
            this.editorType = "combobox";
        } else {
            return;
        }
    }

    // 获取列项编辑
    get editor() {
        return this._editor;
    }

    // 获取文本提示信息
    get placeholder() {
        return this.editor.placeholder;
    }

    // 获取下拉框数据源
    get comboboxData() {
        return this.editor.data;
    }

    // 控件绑定 has-error 样式
    @HostBinding("class.has-error")
    get errorMessage() {
        let errors = this.formControl.errors;
        if (errors) {
            let msg = KeyValidatorsHandler.errorMsg(errors);
            // 判断验证控制器中是否有包含这种错误的处理方式
            if (msg == null) {
                if (errors["editError"]) {
                    return errors["editError"].errorMessage;
                }
            } else {
                return msg;
            }
        } else {
            return null;
        }
    }

    // 列项编辑
    _editor: any;

    // 编辑类型
    editorType: string;

    // 跟踪单个表单控件的值和验证状态
    formControl: FormControl = null;

    // 从视图 DOM 中获取 input 元素
    @ViewChild("inputEl")
    inputEl: ElementRef;

    // 从视图 DOM 中获取 select 元素
    @ViewChild("comboboxEl")
    comboboxEl: ElementRef;

    ngOnInit() {
        // 实例化 formControl
        this.formControl = new FormControl(this.value, this.validators());
    }

    ngAfterContentInit() {
        // 用于解决初次加载页面，未能获取到要验证的信息（提示验证错误信息）
        setTimeout(() => {
            this.formControl.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        });
    }

    /**
     * 更新列项的值
     */
    updateValue() {
        this.row[this.column.key] = this.value;
    }

    /**
     * 判断输入框输入的值是否与列项的值不相等
     * @returns {boolean}
     */
    isDirty(): boolean {
        return this.row[this.column.key] != this.value;
    }

    /**
     * 点击事件
     * @param event 
     * @param clickEventStopPropagation 
     */
    onClick(event: any, clickEventStopPropagation: boolean) {
        // 阻止事件冒泡
        if (clickEventStopPropagation) {
            event.stopPropagation();
        }

    }

    /**
     * 失去焦点后
     */
    onBlur() {
        /**
         * 重新计算控件的值和验证状态
         * onlySelf: 验证本身
         * emitEvent: 回调事件
         */
        return this.formControl.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }

    /**
     * 输入框列项值改变时，并且 realTime 为 true ，则实时更新列项的值
     * @param event
     */
    onChange(event: any) {
        if (!this.hasError()) {
            let value: any;
            // 列项数据类型设置为 number 时，强制类型转化为数字
            if (this.column.type == "number") {
                if (!isNaN(event.target.value)) {
                    value = parseFloat(event.target.value);
                }
            } else {
                value = event.target.value;
            }
            this.row[this.column.key] = value;


        }
    }

    /**
     * 输入框列项值改变时，触发自定义 change 方法
     */
    onChangeCustomFunction() {
        if (this._editor.onChangeCustom) {
            this._editor.onChangeCustom({
                row: this.row,
                column: this.column
            });
        }
    }

    /**
     * 判断是否有验证错误
     * @returns {boolean}
     */
    hasError(): boolean {
        this.onBlur();
        return !!this.formControl.errors;
    }

    /**
     * 错误验证
     * @returns {ValidatorFn[]}
     */
    validators(): ValidatorFn[] {
        // 获取 DOM 自带的验证
        let vs: ValidatorFn[];
        if (this.editorType == "combobox") {
            vs = [KeyValidatorsHandler.domValidator(this.comboboxEl)];
        } else {
            vs = [KeyValidatorsHandler.domValidator(this.inputEl)];
        }
        // 判断是否有自定义验证函数，有则执行错误验证，并将验证结果添加到 vs 中
        if (this.editor.validatorFn) {
            vs.push((control: AbstractControl): { [key: string]: any } => {
                let result: string = this.editor.validate(this.value, this.row);
                return !!result ? { "editError": { success: false, errorMessage: result } } : null;
            });
        }
        return vs;
    }
}
