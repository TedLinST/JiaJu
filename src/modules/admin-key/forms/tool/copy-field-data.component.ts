/**
 * Created by Z.cr on 2018-6-8.
 *
 * 基本用例
 * <key-form-copy-field-data
 *     [bean]="bean"
 *     [beanPrimitive]="beanPrimitive"
 *     [beanCopy]="beanCopy"
 *     (onCopyChange)="onCopyChange($event)"
 *     (onValueChange)="onValueChange($event)">
 * </key-form-copy-field-data>
 *
 */

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Utils } from "../../../utils/utils";

@Component({
    selector: "key-form-copy-field-data",
    templateUrl: "./copy-field-data.component.html",
})
export class KeyCopyFieldDataComponent {

    // 点击粘贴、重置按钮时，触发该事件
    @Output() onValueChange = new EventEmitter();

    // 点击复制按钮时，触发该事件
    @Output() onCopyChange = new EventEmitter();

    // 表单数据
    @Input() bean: any = {};

    // 表单原始数据
    @Input() beanPrimitive: any = {};

    // 表单复制数据
    @Input() beanCopy: any = {};

    // 标识ID
    @Input() idField: any = "id";

    // 清空字段
    @Input() emptyField: any[] = ["id"];

    // 保留字段
    @Input() retainField: any[] = ["id"];

    // 按钮类型
    @Input() type: "default" | "primary" | "success" | "info" | "warning" | "danger" = "default";

    /**
     * 复制
     */
    dataCopy() {
        if (!!this.bean) {
            this.beanCopy = Utils.clone(this.bean);
            if (this.emptyField != null && this.emptyField.length > 0) {
                this.emptyField.forEach((field: any) => {
                    this.beanCopy[field] = null;
                });
            }
            this.onCopyChange.emit(this.beanCopy);
        }
    }

    /**
     * 粘贴
     */
    dataPaste() {
        if (!!this.bean[this.idField]) {
            if (this.retainField != null && this.retainField.length > 0) {
                let fieldMap: any = {};
                this.retainField.forEach((item: any) => {
                    if (!!this.bean[item]) {
                        fieldMap[item] = this.bean[item];
                    }
                });
                this.bean = Utils.clone(this.beanCopy);
                this.isNull(this.bean);
                this.retainField.forEach((item: any) => {
                    if (!!fieldMap[item]) {
                        this.bean[item] = fieldMap[item];
                    }
                });
            } else {
                let idField: any = this.bean[this.idField];
                this.bean = Utils.clone(this.beanCopy);
                this.isNull(this.bean);
                this.bean.id = idField;
            }
        } else {
            this.bean = Utils.clone(this.beanCopy);
            this.isNull(this.bean);
        }
        this.onValueChange.emit(this.bean);
    }

    /**
     * 重置
     */
    dataReset() {
        if (!!this.beanPrimitive[this.idField]) {
            this.bean = Utils.clone(this.beanPrimitive);
            this.isNull(this.bean);
        } else {
            this.bean = {};
        }
        this.onValueChange.emit(this.bean);
    }


    /**
     * 判断是否为空
     * @param obj
     */
    isNull(obj: any) {
        if (!!!obj) {
            this.bean = {};
        }
    }

}
