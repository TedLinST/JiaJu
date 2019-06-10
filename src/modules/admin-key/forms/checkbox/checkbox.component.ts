/**
 * Created by Z.cr on 2018-2-5.
 *
 * 复选框控件 checkbox
 *
 * 基本用例
 * check: boolean = false;
 * <key-form-element label="复选框" [error]="checkbox.errors">
 *     <key-checkbox #checkbox="ngModel" name="check" [(ngModel)]="check" [required]="true">同意</key-checkbox>
 * </key-form-element>
 */

import { Component, EventEmitter, forwardRef, Input, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IdCounter } from "../../../utils/id-counter";

@Component({
    selector: "key-checkbox",
    templateUrl: "./checkbox.component.html",
    /**
     * provider 创建出 service
     * useExisting 创建别名标记
     * NG_VALUE_ACCESSOR 用于提供一个 ControlValueAccessor 表单控件
     * forwardRef 允许引用尚未定义的引用
     */
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KeyCheckboxComponent), multi: true }
    ]
})
export class KeyCheckboxComponent implements ControlValueAccessor {

    // 复选框选中发生变化时，触发该回调事件
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    // input[type="checkbox"] id 属性
    @Input() id: any = IdCounter.newId("key-checkbox");

    // 值
    @Input() value: any;

    // input[type="checkbox"] name 属性
    @Input() name: string;

    // 不可选状态，默认为 false
    @Input() disabled: boolean;

    // input[type="checkbox"] required 属性
    @Input() required: boolean = false;

    // input[type="checkbox"] checked 属性
    checked: boolean = false;

    // 当有 key-checkbox-group 控件包含 key-checkbox 控件时，hasParent 设置为 true ，默认为 false
    hasParent: boolean = false;

    // 复选框选中的值，格式为 ["1","2","3"]
    model: any;

    // 模型change函数
    onModalChange: Function = Function.prototype;

    // 模型touched函数
    onModelTouched: Function = Function.prototype;

    /**
     * 该方法用于将模型中的新值写入视图或 DOM 属性中，由 forms API 调用
     * @param model
     */
    writeValue(model: any): void {
        this.model = model;
        this.checked = this.isChecked();
    }

    /**
     * 注册一个回调函数，设置当控件接收到 change 事件后，调用的函数
     * @param fn
     */
    registerOnChange(fn: Function): void {
        this.onModalChange = fn;
    }

    /**
     * 注册一个回调函数，设置当控件接收到 touched 事件后，调用的函数
     * @param fn
     */
    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    /**
     * 判断是否选中
     * @returns {boolean}
     */
    isChecked(): boolean {
        if (this.hasParent) {
            return this.findValueIndex(this.value) !== -1;
        } else {
            return this.model != null;
        }
    }

    /**
     * 查找值的下标
     * @param value
     * @returns {number}
     */
    findValueIndex(value: any) {
        let index = -1;
        if (this.model) {
            for (let i = 0; i < this.model.length; i++) {
                if (this.model[i] == value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }

    /**
     * 获取id值
     * @returns {any}
     */
    getId() {
        return this.id;
    }

    /**
     * 获取是否为必填项
     * @returns {boolean}
     */
    getRequired() {
        return this.required;
    }

    /**
     * 点击 input[type="checkbox"]元素
     * @param event
     * @param checkbox
     * @param focus
     */
    onClick(event: any, checkbox: any, focus: boolean) {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        // 判断是否有复选框组
        if (this.hasParent) {
            if (this.checked) {
                this.addValue(this.value);
            } else {
                this.removeValue(this.value);
                if (this.model.length == 0) {
                    this.model = null;
                }
            }
            this.onModalChange(this.model);
        } else {
            this.onModalChange(this.checked);
        }
        this.onChange.emit(this.checked);
        if (focus) {
            checkbox.focus();
        }
    }

    /**
     * 移除值
     * @param value
     */
    removeValue(value: any) {
        let index = this.findValueIndex(value);
        if (index >= 0) {
            this.model.splice(index, 1);
        }
    }

    /**
     * 添加值
     * @param value
     */
    addValue(value: any) {
        if (this.model) {
            this.model.push(value);
        } else {
            this.model = [value];
        }
    }

}
