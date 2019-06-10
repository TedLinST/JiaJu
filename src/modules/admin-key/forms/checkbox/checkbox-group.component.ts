/**
 * Created by Z.cr on 2018-2-5.
 *
 * 复选框组控件 checkbox-group
 *
 * 基本用例
 * checkboxData: any = ["1","7"];
 * <key-form-element label="复选框" [error]="checkbox_group.errors">
 *     <key-checkbox-group #checkbox_group="ngModel" name="checkboxData" [(ngModel)]="checkboxData" keyMinSelect="2">
 *         <key-checkbox value="1">星期日</key-checkbox>
 *         <key-checkbox value="2">星期一</key-checkbox>
 *         <key-checkbox value="3">星期二</key-checkbox>
 *         <key-checkbox value="4">星期三</key-checkbox>
 *         <key-checkbox value="5">星期四</key-checkbox>
 *         <key-checkbox value="6">星期五</key-checkbox>
 *         <key-checkbox value="7">星期六</key-checkbox>
 *      </key-checkbox-group>
 * </key-form-element>
 */

import { Component, EventEmitter, forwardRef, Input, Output, AfterContentInit, ContentChildren, QueryList } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { KeyCheckboxComponent } from "./checkbox.component";

@Component({
    selector: "key-checkbox-group",
    templateUrl: "./checkbox-group.component.html",
    /**
     * provider 创建出 service
     * useExisting 创建别名标记
     * NG_VALUE_ACCESSOR 用于提供一个 ControlValueAccessor 表单控件
     * forwardRef 允许引用尚未定义的引用
     */
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KeyCheckboxGroupComponent), multi: true}
    ]
})
export class KeyCheckboxGroupComponent implements AfterContentInit, ControlValueAccessor {

    // 复选框组里面的复选框选中发生改变时，触发该事件
    @Output() public onChange: EventEmitter<any> = new EventEmitter();

    // 复选框的名称
    @Input() public name: string;

    // 复选框最少的选中数
    @Input() public keyMinSelect: number;

    // 从内容 DOM 中获取 KeyCheckboxComponent 控件
    @ContentChildren(KeyCheckboxComponent)
    contentEls: QueryList<KeyCheckboxComponent>;

    // 复选框选中的值，格式为  ["1","2","3"]
    model: any;

    // 模型change函数
    onModalChange: Function = Function.prototype;

    // 模型touched函数
    onModelTouched: Function = Function.prototype;

    ngAfterContentInit() {
        if (this.contentEls && this.contentEls.length > 0) {
            // 分别设置复选框的 name，hasParent 值，并更新 model 到各个 key-checkbox 控件中
            this.contentEls.forEach((el) => {
                el.name = this.name;
                el.hasParent = true;
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
            //  复选框选中的值分别更新到各个 key-checkbox 控件中
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
     * 获取 key-checkbox-group 下第一个 key-checkbox 的id
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
     * 获取最少必填数
     * @returns {boolean}
     */
    getRequired() {
        return this.keyMinSelect > 0 ? true : false;
    }

}
