/**
 * Created by Z.cr on 2018-2-2.
 * 指令修饰器 - input 标签
 * 利用 DOM 自带的验证进行编码验证
 * 当添加 closeDomValidator 属性时，则不进行验证（required属性除外 => 待验证）
 */

import { Directive, ElementRef, forwardRef, HostListener, OnInit, ViewContainerRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, NgControl, NgModel, Validator, ValidatorFn } from "@angular/forms";
import { KeyValidatorsHandler } from "../../../utils/validators-handler";

@Directive({
    selector: "input([formControlName]):not([closeDomValidator]),input([formControl]):not([closeDomValidator]),input([ngModel]):not([closeDomValidator])",
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => KeyDomValidatorDirective), multi: true}
    ]
})
export class KeyDomValidatorDirective implements OnInit, Validator {

    ngModel: NgModel;

    _validator: ValidatorFn;

    // TODO: formControlName 和 formControl 未测试获取 ngModel的方式
    constructor(private el: ElementRef, private view: ViewContainerRef) {
        /**
         * ViewContainerRef: 视图的容器
         */
    }

    ngOnInit() {
        // 获取DOM自带的验证进行编码验证
        this._validator = KeyValidatorsHandler.domValidator(this.el);
        // 根据提供的令牌从注入器中检索实例
        this.ngModel = this.view.injector.get(NgControl);
    }

    // 控件失去焦点事件
    @HostListener("blur", ["$event"])
    onBlur(event: any) {
        /**
         * 失去焦点后，重新计算控件的值和验证状态
         * onlySelf: 只更新自身
         * emitEvent: 回调事件状态
         */
        this.ngModel.control.updateValueAndValidity({onlySelf: true, emitEvent: false});
    }

    // 实现 Validator 接口的验证方法
    validate(c: AbstractControl): { [key: string]: any } {
        return this._validator(c);
    }
}
