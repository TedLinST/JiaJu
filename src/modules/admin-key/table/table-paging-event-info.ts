
/*
 * @Author: ZengChuangRong 
 * @Date: 2018-10-18 11:47:16 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-10-18 16:33:51
 * 
 * 表格分页事件
 * 
 */

import { KeyPagingEventInfo } from "../paginator/paging-event-info";
import { KeyTableFilterEventInfo } from "./filter/table-filter-event-info";

export interface KeyTablePagingEventInfo extends KeyPagingEventInfo {
    // 高级筛选
    query?: KeyTableFilterEventInfo[];
}
