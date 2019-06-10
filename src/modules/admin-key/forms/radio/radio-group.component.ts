/**
 * Created by Z.cr on 2018-2-5.
 *
 * 复选框组控件 checkbox-group
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

import { AfterContentInit, Component, ContentChildren, EventEmitter, forwardRef, Input, Output, QueryList } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { KeyRadioComponent } from "./radio.component";

@Component({
    selector: "key-radio-group",
    templateUrl: "./radio-group.component.html",
    /**
     * provider 创建出 service
     * useExisting 创建别名标记
     * NG_VALUE_ACCESSOR 用于提供一个 ControlValueAccessor 表单控件
     * forwardRef 允许引用尚未定义的引用
     */
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KeyRadioGroupComponent), multi: true}
    ]
})
export class KeyRadioGroupComponent implements AfterContentInit, ControlValueAccessor {

    // 单选框组里面的单选按钮选中发生改变时，触发该事件
    @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

    // 单选框的名称
    @Input() name: string;

    // 单选框必填属性，默认为 false
    @Input() required: boolean = false;

    // 从内容 DOM 中获取 KeyRadioComponent 控件
    @ContentChildren(KeyRadioComponent)
    contentEls: QueryList<KeyRadioComponent>;

    // 单选框选中的值
    model: any;

    // 模型change函数
    onModalChange: Function = Function.prototype;

    // 模型touched函数
    onModelTouched: Function = Function.prototype;

    ngAfterContentInit() {
        if (this.contentEls && this.contentEls.length > 0) {
            //  分别设置单选框的 name 值，并更新 model 到各个 key-radio 控件中
            this.contentEls.forEach((el) => {
                el.name = this.name;
                el.registerOnChange((model: any) => {
                    this.writeValue(model);
                });
            });
        }
    }

    /**
     * 该方法用于将模型中的新值写入视图或 DOM 属性中，由 forms API 调用
     * @param model
     */
    writeValue(model: any): void {
        this.model = model;
        this.onChange.emit(model);
        this.onModalChange(model);
        if (this.contentEls && this.contentEls.length > 0) {
            //  单选框选中的值分别更新到各个 key-checkbox 控件中
            this.contentEls.forEach((el) => {
                el.writeValue(this.model);
            });
        }
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
     * 获取 key-radio-group 下第一个 key-radio 的 id
     * @returns {any}
     */
    getId() {
        if (this.contentEls && this.contentEls.length > 0) {
            return this.contentEls.first.getId();
        } else {
            return null;
        }
    }

    /**
     * 获取必填值
     * @returns {boolean}
     */
    getRequired() {
        return this.required;
    }
}
