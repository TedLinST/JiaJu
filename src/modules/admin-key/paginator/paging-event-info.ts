/*
 * @Author: ZengChuangRong 
 * @Date: 2018-10-18 14:47:26 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-10-18 14:49:36
 * 
 * 分页事件信息
 * 
 */

export interface KeyPagingEventInfo {
    // 每页显示的数量
    pageSize: number;
    // 页数
    pageNum: number;
    // 分页起始行序号
    pageStartRow: number;
}
