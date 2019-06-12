import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataCommodityHandler } from 'src/data/fm/commodity';
import { UtilsFm } from '../utils/utils-fm';
import { Utils } from 'src/modules/utils/utils';
import { DataShopHandler } from 'src/data/fm/shop';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.scss']
})
export class CommodityComponent implements OnInit {

  // 横幅图片
  CH_FM_BANNER_SRC: any;

  // 横幅菜单
  CH_FM_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  // 店铺数据助手
  dataShopHandler: any;

  // 全部列表数据
  allListData: any[] = [];

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
    ChengJiaoShuLiang: 0,
    PingJiaShuLiang: 0
  };


  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_FM_BANNER_SRC = ConstantHandler.CH_FM_BANNER_SRC;
    this.CH_FM_BANNER_MENU = ConstantHandler.CH_FM_BANNER_MENU;
    this.dataHandler = DataCommodityHandler;
    this.dataShopHandler = DataShopHandler;
    if (this.dataShopHandler.LIST_DATA != null && this.dataShopHandler.LIST_DATA.length > 0) {
      let data: any[] = [];
      for (let i = 0; i < this.dataShopHandler.LIST_DATA.length; i++) {
        for (let j = 0; j < this.dataShopHandler.LIST_DATA[i].data.length; j++) {
          let item = Utils.clone(this.dataShopHandler.LIST_DATA[i].data[j]);
          for (let key in this.dataShopHandler.LIST_DATA[i]) {
            if (key != 'data') {
              item[key] = this.dataShopHandler.LIST_DATA[i][key];
            }
          }
          data.push(item);
        }
      }
      this.allListData = data;
      this.total = data.length;
      this.handleListDataPagination(data, this.activePagaIndex);
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
    this.handleListDataPagination(this.allListData, this.activePagaIndex);
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
      ChengJiaoShuLiang: 0,
      PingJiaShuLiang: 0
    };
    this.btnSortActiveMap[id] = event;
    this.listData = Utils.arrayKeySort(this.allListData, id, event, true);
    this.onSearch();
  }

  // 搜索
  onSearch() {
    this.activePagaIndex = 1
    if (this.allListData && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.allListData.filter((row: any) => {
        if (row.ShangPinMingCheng) {
          let text = '' + row.ShangPinMingCheng;
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
        if (row.DianPuMingCheng) {
          let text = '' + row.DianPuMingCheng;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListDataPagination(listData, this.activePagaIndex);
    } else {
      this.handleListDataPagination(this.allListData, this.activePagaIndex);
    }
  }

}
