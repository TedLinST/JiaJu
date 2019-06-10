/**
 * Created by Z.cr on 2018-2-5.
 *
 * 基本用例
 * radio_data: any = "0";
 * <key-form-element label="单选框" [error]="radio_group.errors">
 *     <key-radio-group #radio_group="ngModel" name="radio_data" [(ngModel)]="radio_data" [required]="true">
 *         <key-radio value="1">男士</key-radio>
 *         <key-radio value="0">女士</key-radio>
 *     </key-radio-group>
 * </key-form-element>
 *
 */

import { Component, EventEmitter, forwardRef, Input, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IdCounter } from "../../../utils/id-counter";

@Component({
    selector: "key-radio",
    templateUrl: "./radio.component.html",
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KeyRadioComponent), multi: true}
    ]
})
export class KeyRadioComponent implements ControlValueAccessor {

    // 点击单选框时，触发该事件
    @Output() clickChange: EventEmitter<any> = new EventEmitter<any>();

    // input[type="radio"] id 属性
    @Input() id: string = IdCounter.newId("key-radio");

    // 值
    @Input() value: any;

    // input[type="radio"] name 属性
    @Input() name: string;

    // 不可选状态，默认为 false
    @Input() disabled: boolean = false;

    // 单选框选中的值
    model: any;

    // input[type="radio"] checked 属性
    checked: boolean;

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
        this.checked = (this.model == this.value);
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
     * 获取 id 值
     * @returns {string}
     */
    getId() {
        return this.id;
    }

    /**
     * 获取必填值
     * @returns {boolean}
     */
    getRequired() {
        return false;
    }

    /**
     * 点击单选框
     * @param event
     */
    onClick(event: any) {
        if (!this.disabled) {
            this.clickChange.emit(event);
            this.checked = true;
            this.onModalChange(this.value);
        }
    }

}
