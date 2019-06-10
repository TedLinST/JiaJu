/**
 * Created by Z.cr on 2018-2-1.
 *
 * 表单内联元素框
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

@Component({
    selector: "key-form-element-inline",
    templateUrl: "./element-inline.component.html",
    // 当使用 OnPush 策略的时候，若输入属性没有发生变化，组件的变化检测将会被跳过
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyElementInlineComponent {

    // 用来动态设置 key-form-element-inline 控件的样式
    @HostBinding("class.keyElementInline") elementInline: boolean = true;

    // 标签名称
    @Input() label: string;

    // 标签名称宽度
    @Input() labelWidth: number;

    // 隐藏标签名称，默认为 false
    @Input() hideLabel: boolean = false;

    // 验证错误状态，默认为 false
    @Input() error: boolean = false;

}
