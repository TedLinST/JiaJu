/*
 * @Author: ZengChuangRong 
 * @Date: 2018-10-18 11:35:40 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-10-18 16:24:13
 * 
 * 表格高级筛选事件
 * 
 */

export interface KeyTableFilterEventInfo {
    // 筛选标识
    field?: string;
    // 第一个筛选条件
    firstCondition?: string;
    // 第一个筛选条件对应的符号
    firstSign?: number;
    // 第一个筛选条件下标
    firstConditionIndex?: number;
    // 第二个筛选条件
    secondCondition?: string;
    // 第二个筛选条件对应的符号
    secondSign?: number;
    // 第二个筛选条件下标
    secondConditionIndex?: number;
    // 中间筛选条件符号
    middleCondition?: number;
}
