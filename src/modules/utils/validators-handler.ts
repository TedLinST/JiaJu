/**
 * Created by Z.cr on 2018-2-1.
 * 验证控制器
 */

import { ElementRef } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import * as moment from "moment";

export class KeyValidatorsHandler {

    /**
     * 验证最小日期
     * @param format 日期格式
     * @param minDate 最小日期
     * @returns {(control:AbstractControl)=>{[p: string]: any}}
     */
    static ckMinDate(format: string, minDate: Date): ValidatorFn {
        let time = moment(moment(minDate).format(format), format).toDate().getTime();
        let text = moment(minDate).format(format);
        return (control: AbstractControl): { [key: string]: any } => {
            let m = moment(control.value, format);
            if (!m.isValid()) {
                return null;
            }
            let v = m.toDate();
            let t = v.getTime();
            return t < time ? {"ckMinDate": {"requiredValue": minDate, "actualValue": v, "requiredText": text}} : null;
        };
    }

    /**
     * 验证最大日期
     * @param format 日期格式
     * @param maxDate 最大日期
     * @returns {(control:AbstractControl)=>{[p: string]: any}}
     */
    static ckMaxDate(format: string, maxDate: Date): ValidatorFn {
        let time = moment(moment(maxDate).format(format), format).toDate().getTime();
        let text = moment(maxDate).format(format);
        return (control: AbstractControl): { [key: string]: any } => {
            let m = moment(control.value, format);
            if (!m.isValid()) {
                return null;
            }
            let v = m.toDate();
            let t = v.getTime();
            return t > time ? {"ckMaxDate": {"requiredValue": maxDate, "actualValue": v, "requiredText": text}} : null;
        };
    }

    /**
     * 验证至少选中的数量
     * @param num
     * @returns {(control:AbstractControl)=>{[p: string]: any}}
     */
    static keyMinSelect(num: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let v = control.value ? control.value.length : 0;
            return v < num ? {"keyMinSelect": {"requiredValue": num, "actualValue": v}} : null;
        };
    }

    /**
     * 利用DOM自带的验证进行编码验证（dom-validators.directive）
     * @param el
     * @returns {(control:AbstractControl)=>{[p: string]: any}}
     */
    static domValidator(el: ElementRef): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let dom = el.nativeElement;
            let state: ValidityState = dom.validity;
            return !state.valid ? {"domValidator": {state: state, message: dom.validationMessage}} : null;
        };
    }

    /**
     * 处理错误信息，返回相对应的错误提示
     * @param errors
     * @returns {any}
     */
    public static errorMsg(errors: { [key: string]: any }): string {
        if (errors) {
            if (errors["domValidator"]) {
                return errors["domValidator"].message;
            }
            if (errors["required"]) {
                return "请填写此字段。";
            }
            if (errors["customValidator"]) {
                return errors["customValidator"];
            }
            if (errors["maxlength"]) {
                return "最大长度为 " + errors["maxlength"].requiredLength + " 个字符";
            }
            if (errors["minlength"]) {
                return "最小长度为 " + errors["minlength"].requiredLength + " 个字符";
            }
            if (errors["limitlength"]) {
                return "长度为 " + errors["limitlength"].requiredMinLength + " ～ " + errors["limitlength"].requiredMaxLength + " 个字符";
            }
            if (errors["max"]) {
                return "值不能大于 " + errors["max"].requiredValue;
            }
            if (errors["min"]) {
                return "值不能小于 " + errors["min"].requiredValue;
            }
            if (errors["limit"]) {
                return "值区间为 " + errors["limit"].requiredMinValue + " ～ " + errors["limit"].requiredMaxValue;
            }
            if (errors["number"]) {
                let decimals = errors["number"].requiredDecimals;
                if (decimals == 0) {
                    return "值只能是整数";
                } else if (decimals > 0) {
                    return "值只能有" + decimals + "位小数";
                }
            }
            if (errors["email"]) {
                return "邮箱格式为：me@example.com";
            }
            if (errors["keyMinSelect"]) {
                return "请至少选中 " + errors["keyMinSelect"].requiredValue + " 项";
            }
            if (errors["date"]) {
                let format = errors["date"].format;
                return "日期格式为：" + format;
            }
            if (errors["ckMaxDate"]) {
                return "时间不能晚于：" + errors["ckMaxDate"].requiredText;
            }
            if (errors["ckMinDate"]) {
                return "时间不能早于：" + errors["ckMinDate"].requiredText;
            }
            return "";
        }
    }
}
