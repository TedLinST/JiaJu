/**
 * Created by Z.cr on 2018-2-1.
 *
 * 表单元素框
 *
 * 基本用例
 * <form #testForm="ngForm">
 *     <key-form-element label="测试" [error]="test_Input.errors">
 *         <input #test_Input="ngModel" class="form-control" name="test"
 *         [(ngModel)]="test">
 *     </key-form-element>
 * </form>
 */

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { KeyValidatorsHandler } from "../../../utils/validators-handler";

@Component({
    selector: "key-form-element",
    templateUrl: "./element.component.html",
    // 当使用 OnPush 策略的时候，若输入属性没有发生变化，组件的变化检测将会被跳过
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyElementComponent {

    // 标签名称
    @Input() label: string;

    // 标签名称宽度
    @Input() labelWidth: number;

    // 验证失败所产生的任何错误,类型：ValidationErrors
    @Input() error: { [key: string]: any };

    /**
     * 获取错误信息
     * @param error
     * @returns {string}
     */
    errorMsg(error: { [key: string]: any }) {
        return KeyValidatorsHandler.errorMsg(error);
    }

}
