/**
 * Created by Z.cr on 2018-2-6.
 * 表格列项筛选
 * 类型: combobox、date、number、text
 *
 * 基本用例
 * <ng-template ngFor let-col [ngForOf]="columns">
 *     <key-table-filter *ngIf="col.filter" [column]="col" [filter]="col.filter"></key-table-filter>
 * </ng-template>
 *
 * 说明：只有当请求后台数据，后台数据有高级查询的时候，才可以用高级查询功能
 * 
 * 状态： 1:大于(>) 、 2:大于等于(>=) 、 3:小于(<) 、 4:小于等于(<=) 、 5:等于(=) 、 6:模糊(%_%) 、 7:开始(_%) 、 8:结束(%_) 、 9:不等于(!=)
 */

import { Component, Input } from "@angular/core";
import { KeyTableColumnComponent } from "../table-column.component";
import { KeyTableFilterTextComponent } from "./table-filter-text.component";
import { KeyTableFilterDateComponent } from "./table-filter-date.component";
import { KeyTableFilterNumberComponent } from "./table-filter-number.component";
import { KeyTableFilterComboboxComponent } from "./table-filter-combobox.component";
import { KeyTableFilterEventInfo } from "./table-filter-event-info";

@Component({
    selector: "key-table-filter",
    templateUrl: "./table-filter.component.html"
})
export class KeyTableFilterComponent {

    // 列项数据源
    @Input() column: KeyTableColumnComponent;

    // 设置列项筛选、筛选类型、条件符号
    @Input()
    set filter(filter: any) {
        if (filter instanceof KeyTableFilterTextComponent) {
            //  文本类型
            this._filter = <KeyTableFilterTextComponent> filter;
            this.filterType = "text";
        } else if (filter instanceof KeyTableFilterDateComponent) {
            // 日期类型的，有多种类型（例如: date、month）
            let dateCmp = <KeyTableFilterDateComponent> filter;
            this._filter = dateCmp;
            this.filterType = dateCmp.type;
            this.firstConditionIndex = 1;
            this.secondConditionIndex = 3;
        } else if (filter instanceof KeyTableFilterNumberComponent) {
            // 数字类型
            this._filter = <KeyTableFilterNumberComponent> filter;
            this.filterType = "number";
            this.firstConditionIndex = 1;
            this.secondConditionIndex = 3;
        } else if (filter instanceof KeyTableFilterComboboxComponent) {
            // 下拉列表框类型
            this._filter = <KeyTableFilterComboboxComponent> filter;
            this.filterType = "combobox";
        } else {
            return;
        }
        this.sign = filter.sign;
    }

    // 获取列项筛选
    get filter() {
        return this._filter;
    }

    /**
     * 获取筛选内容
     * @returns {KeyTableFilterEventInfo}
     */
    get condition(): KeyTableFilterEventInfo {
        let o: KeyTableFilterEventInfo;
        let field = this.filter.queryField || this.column.key;
        if (!!this.firstConditionValue && !!!this.secondConditionValue) {
            // 第一个筛选条件不为空，第二个筛选条件为空
            o = {
                field: field,
                firstCondition: this.firstConditionValue,
                firstConditionIndex: this.firstConditionIndex,
                firstSign: this.sign[this.firstConditionIndex].value
            };
        } else if (!!this.firstConditionValue && !!this.secondConditionValue) {
            // 第一个筛选条件不为空，第二个筛选条件不为空
            o = {
                field: field,
                firstCondition: this.firstConditionValue,
                firstSign: this.sign[this.firstConditionIndex].value,
                firstConditionIndex: this.firstConditionIndex,
                secondCondition: this.secondConditionValue,
                secondSign: this.sign[this.secondConditionIndex].value,
                secondConditionIndex: this.secondConditionIndex,
                middleCondition: this.middleCondition
            };
        } else if (!!!this.firstConditionValue && !!this.secondConditionValue) {
            // 第一个筛选条件为空，第二个筛选条件不为空
            o = {
                field: field,
                firstCondition: this.secondConditionValue,
                firstSign: this.sign[this.secondConditionIndex].value,
                firstConditionIndex: this.firstConditionIndex
            };
        } else {
            o = null;
        }
        this.history = o;
        return o;
    }

    // 筛选类型
    filterType: string;

    // 筛选输入框状态，默认为 false
    open: boolean = false;

    // 条件符号
    sign: any[];

    // 第一个筛选条件下标，默认为 0
    firstConditionIndex: number = 0;

    // 第一个筛选条件
    firstConditionValue: string;

    // 中间筛选条件，默认为 1
    middleCondition: number = 1;

    // 第二个筛选条件下标，默认为 0
    secondConditionIndex: number = 0;

    // 第二个筛选条件
    secondConditionValue: string;

    // 列项筛选
    _filter: any;

    // 列项筛选（图标）
    filtering: boolean = false;

    // 历史筛选条件
    history: KeyTableFilterEventInfo;

    /**
     * 清空筛选条件
     */
    clear() {
        this.filtering = false;
        this.open = false;
        this.firstConditionValue = null;
        this.secondConditionValue = null;
        this.history = null;
    }

    /**
     * 切换第一个条件符号
     */
    onFirstConditionClick() {
        let firstCriteriaIndex = this.firstConditionIndex + 1;
        if (firstCriteriaIndex >= this.sign.length) {
            this.firstConditionIndex = 0;
        } else {
            this.firstConditionIndex = firstCriteriaIndex;
        }
    }

    /**
     * 切换第二个条件符号
     */
    onSecondConditionClick() {
        let secondCriteriaIndex = this.secondConditionIndex + 1;
        if (secondCriteriaIndex >= this.sign.length) {
            this.secondConditionIndex = 0;
        } else {
            this.secondConditionIndex = secondCriteriaIndex;
        }
    }

    /**
     * 切换中间条件符号
     * 1 与 ; 0 或
     */
    onMiddleConditionClick() {
        this.middleCondition = this.middleCondition == 0 ? 1 : 0;
    }

    /**
     * 切换筛选输入框
     */
    toogle() {
        this.open = !this.open;
    }

    /**
     * 重置筛选条件
     */
    reset() {
        if (this.history != null) {
            if (!!this.history.firstCondition) {
                this.firstConditionIndex = this.history.firstConditionIndex;
                this.firstConditionValue = this.history.firstCondition;
                this.secondConditionValue = null;
            }
            if (!!this.history.secondCondition) {
                this.secondConditionIndex = this.history.secondConditionIndex;
                this.secondConditionValue = this.history.secondCondition;
            }
            if (!!this.history.firstCondition && !!this.history.secondCondition) {
                this.middleCondition = this.history.middleCondition;
            }
        }
    }

    /**
     * 判断是否显示重置按钮
     * @returns {boolean}
     */
    canReset() {
        if (this.history != null) {
            return true;
        } else {
            return false;
        }
    }

}
