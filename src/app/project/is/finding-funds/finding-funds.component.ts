import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataFindingFundsHandler } from 'src/data/is/finding-funds';
import { UtilsIs } from '../utils/utils-is';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-finding-funds',
  templateUrl: './finding-funds.component.html',
  styleUrls: ['./finding-funds.component.scss']
})
export class FindingFundsComponent implements OnInit {

  // 横幅图片
  CH_IS_BANNER_SRC: any;

  // 横幅菜单
  CH_IS_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  // 列表数据
  listData: any[] = [];

  // 一页大小
  pageSize = 8;

  // 总数据
  total: number = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  // 搜索文本
  searchValue: any;

  // 按钮排序激活
  btnSortActiveMap: any = {
    TouZiZiJin: 0,
    GengXinRiQi: 0
  };

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataFindingFundsHandler;
    this.total = this.dataHandler.LIST_DATA.length;
    this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
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
      TouZiZiJin: 0,
      GengXinRiQi: 0
    };
    this.btnSortActiveMap[id] = event;
    this.listData = Utils.arrayKeySort(this.dataHandler.LIST_DATA, id, event);
    this.onSearch();
  }

  // 搜索
  onSearch() {
    this.activePagaIndex = 1;
    if (this.dataHandler.LIST_DATA && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.XiangMuBiaoTi) {
          let text = '' + row.XiangMuBiaoTi;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.TouZiHangYe) {
          let text = '' + row.TouZiHangYe;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.TouZiLeiXing) {
          let text = '' + row.TouZiLeiXing;
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
   * 资金项目
   * @param item 
   */
  onClickItem(item: any) {
    this.portalNav.openFundInformation(item);
  }

  /**
   * 投资项目
   */
  onInvestment(item: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }


}
