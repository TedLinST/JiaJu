/*
 * @Author: ZengChuangRong 
 * @Date: 2018-10-18 15:34:07 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-10-18 15:35:18
 * 
 * 表格排序事件
 * asc: 从小到大（升序）
 * desc: 从大到小（降序）
 * 
 */

export interface KeyTableSortEventInfo {
    // 字段
    key: string;
    // 排序方式（asc、desc）
    order: "asc" | "desc";
}
