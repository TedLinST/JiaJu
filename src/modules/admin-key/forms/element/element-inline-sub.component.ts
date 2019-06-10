/**
 * Created by Z.cr on 2018-2-1.
 *
 * 基本用例
 * <form #testForm="ngForm">
 *     <key-form-element-inline label="测试用例">
 *         <key-form-element-inline-sub label="测试1" [error]="test_input_1.errors">
 *             <input #test_input_1="ngModel" type="text" name="test1" [(ngModel)]="test1" class="form-control">
 *         </key-form-element-inline-sub>
 *         <key-form-element-inline-sub label="测试2" [error]="test_input_2.errors">
 *             <input #test_input_2="ngModel" type="text" name="test2" [(ngModel)]="test2" class="form-control">
 *         </key-form-element-inline-sub>
 *     </key-form-element-inline>
 * </form>
 */

import { ChangeDetectionStrategy, Component, HostBinding, Input } from "@angular/core";
import { KeyValidatorsHandler } from "../../../utils/validators-handler";

@Component({
    selector: "key-form-element-inline-sub",
    templateUrl: "./element-inline-sub.component.html",
    // 当使用 OnPush 策略的时候，若输入属性没有发生变化，组件的变化检测将会被跳过
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyElementInlineSubComponent {

    // 用来动态设置 key-form-element-inline-sub 控件的样式
    @HostBinding("class.keyElementInlineSub") elementInlineSub: boolean = true;

    // 标签名称
    @Input() label: string;

    // 标签名称宽度
    @Input() labelWidth: string;

    // 标签名称宽度
    @Input() error: { [key: string]: any };

    /**
     * 获取错误信息
     * @param error
     * @returns {string}
     */
    private errorMsg(error: { [key: string]: any }) {
        return KeyValidatorsHandler.errorMsg(error);
    }
}
