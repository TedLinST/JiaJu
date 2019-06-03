import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataShopMerchandiseHandler } from 'src/data/fm/shop-merchandise';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { UtilsFm } from '../utils/utils-fm';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-shop-merchandise',
  templateUrl: './shop-merchandise.component.html',
  styleUrls: ['./shop-merchandise.component.scss']
})
export class ShopMerchandiseComponent implements OnInit {

  // 横幅图片
  CH_FM_BANNER_SRC_2: any;

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  itemInfo: any;

  // 列表数据
  listData: any[] = [];

  // 一页大小
  pageSize = 16;

  // 总数据
  total: number = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  // 搜索文本
  searchValue: any;

  // 按钮排序激活
  btnSortActiveMap: any = {
    DanJia: 0,
    YueChengJiao: 0,
    PingJia: 0
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_FM_BANNER_SRC_2 = ConstantHandler.CH_FM_BANNER_SRC_2;
    this.dataHandler = DataShopMerchandiseHandler;

    // 获取参数
    let itemInfo = this.getUrlParams('itemInfo');
    if (!!itemInfo) {
      this.itemInfo = JSON.parse(itemInfo);
      if (this.itemInfo.data != null && this.itemInfo.data.length > 0) {
        this.total = this.itemInfo.data.length;
        this.handleListDataPagination(this.itemInfo.data, this.activePagaIndex);
      } else {
        this.total = 1;
        this.handleListDataPagination([this.itemInfo], this.activePagaIndex);
      }
    }
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsFm.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 处理列表数据分页
   * @param data 
   * @param pageIndex 
   */
  handleListDataPagination(data: any[], pageIndex: number) {
    this.listData = Utils.dataPagination(data, pageIndex, this.pageSize);
    this.total = data.length;
  }

  /**
   * 页码改变
   */
  onPageIndexChange(event: any) {
    this.activePagaIndex = event;
    this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);
  }

  /**
   * 点击分类
   * @param event 
   */
  onClickType(event: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
  * 点击按钮进行排序
  * @param event 
  */
  onClickButtonSortChange(event: any, id: any) {
    this.btnSortActiveMap = {
      DanJia: 0,
      YueChengJiao: 0,
      PingJia: 0
    };
    this.btnSortActiveMap[id] = event;
    this.listData = Utils.arrayKeySort(this.dataHandler.LIST_DATA, id, event, true);
    this.onSearch();
  }

  // 搜索
  onSearch() {
    this.activePagaIndex = 1
    if (this.dataHandler.LIST_DATA && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.MingCheng) {
          let text = '' + row.MingCheng;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.PinPai) {
          let text = '' + row.PinPai;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.DianPu) {
          let text = '' + row.DianPu;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListDataPagination(listData, this.activePagaIndex);
    } else {
      this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);
    }
  }

  /**
   * 获取浏览器地址栏
   * @param paramsName 参数名称
   * @returns {any}
   */
  getUrlParams(paramsName: any) {
    let value: any;
    // 获取单个参数
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      value = queryParams[paramsName];
    });
    return value;
  }

}
