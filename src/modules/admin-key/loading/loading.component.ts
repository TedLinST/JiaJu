/**
 * Created by Z.cr on 2018-1-30.
 *
 * 基本用例
 * <ck-loading [isLoading]="ganttLoadState" heading="系统正在计算中..."></ck-loading>
 */

import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "key-loading",
    templateUrl: "./loading.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyLoadingComponent {

    // 正在加载
    @Input() isLoading: boolean = false;

    // 标题
    @Input() heading: any = "正在加载中";

    // 层级
    @Input() zIndex: number = 1150;

}
