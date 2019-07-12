import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataDesignDatabaseHandler } from 'src/data/pd/design-database';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { UtilsPd } from '../utils/utils-pd';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-design-database',
  templateUrl: './design-database.component.html',
  styleUrls: ['./design-database.component.scss']
})
export class DesignDatabaseComponent implements OnInit {

  // 横幅图片
  CH_PD_BANNER_SRC: any;

  // 横幅菜单
  CH_PD_BANNER_MENU: KeyVerticalMenuEvent[];

  // 产品设计资料库数据助手
  dataHandler: any;

  // 门户导航
  portalNav: any;

  // 搜索值
  searchValue: any;

  // 一页大小
  pageSize = 9;

  // 总数据
  total: number = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  // 列表数据
  listData: any[] = [];

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_PD_BANNER_SRC = ConstantHandler.CH_PD_BANNER_SRC;
    this.CH_PD_BANNER_MENU = ConstantHandler.CH_PD_BANNER_MENU;
    this.dataHandler = DataDesignDatabaseHandler;
    this.total = this.dataHandler.LIST_DATA.length;
    this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsPd.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

  /**
   * 搜索产品
   */
  onSearch() {
    this.activePagaIndex = 1;
    if (this.dataHandler.LIST_DATA && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.type) {
          let text = '' + row.type;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.style) {
          let text = '' + row.style;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.material) {
          let text = '' + row.material;
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
    /* let array = [{
      key1: 'value1',
      key2: 'value4',
    }, {
      key1: 'value2',
      key2: 'value5',
    }];

    let filters = {
      key1: ['value1', 'value2'],
      key2: ['value4']
    }
    let res = Utils.dataFilter(array, filters); */
    this.listData = Utils.arrayRandomSort(this.listData);
  }

}
