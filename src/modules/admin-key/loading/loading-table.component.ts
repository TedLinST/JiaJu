/*
 * @Author: ZengChuangRong 
 * @Date: 2018-09-27 09:17:34 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-12-25 17:19:22
 */

import { Component, Input, OnInit, AfterContentInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "key-loading-table",
    templateUrl: "./loading-table.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyLoadingTableComponent implements OnInit, AfterContentInit {

    // 正在加载
    @Input() isLoading: boolean = false;

    // 标题
    @Input() heading: any = "正在加载中";

    // 遮罩层左边像素 left：px （用于出现水平滚动条时，可调整遮罩层位置）
    @Input() maskZindexLeft: number = 0;

    // 遮罩层上边像素 top：px （用于出现垂直滚动条时，可调整遮罩层位置）
    @Input() maskZindexTop: number = 0;

    ngOnInit() {

    }

    ngAfterContentInit() {

    }
}
