/**
 * Created by Z.cr on 2018-2-2.
 * 指令修饰器 - keyMinSelect 属性
 * 验证控件的选中数量是否满足设定的数量（key-checkbox-group 控件可能会用到）
 */

import { Attribute, Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from "@angular/forms";
import { KeyValidatorsHandler } from "../../../utils/validators-handler";

@Directive({
    selector: "[keyMinSelect][formControlName],[keyMinSelect][formControl],[keyMinSelect][ngModel]",
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => KeyMinSelectValidatorDirective), multi: true}
    ]
})
export class KeyMinSelectValidatorDirective implements Validator {

    _validator: ValidatorFn;

    constructor(@Attribute("keyMinSelect") value: string) {
        // @Attribute("keyMinSelect") value => 获取 keyMinSelect 属性传入的参数
        this._validator = KeyValidatorsHandler.keyMinSelect(parseInt(value, 10));
    }

    // 实现 Validator 接口的验证方法
    validate(c: AbstractControl): { [key: string]: any } {
        return this._validator(c);
    }
}
