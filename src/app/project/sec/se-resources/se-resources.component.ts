import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataSEResourcesHandler } from 'src/data/sec/se-resources';
import { UtilsSec } from '../utils/utils-sec';
import { Utils } from 'src/modules/utils/utils';
import { PROVINCE_LIST } from 'src/modules/utils/administrative-divisions';

@Component({
  selector: 'app-se-resources',
  templateUrl: './se-resources.component.html',
  styleUrls: ['./se-resources.component.scss']
})
export class SeResourcesComponent implements OnInit {

  // 横幅图片
  CH_SEC_BANNER_SRC: any;

  // 横幅菜单
  CH_SEC_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  // 列表数据
  listData: any[] = [];

  // 一页大小
  pageSize = 10;

  // 总数据
  total: number = 0;

  // 当前分页下标
  activePagaIndex: number = 1;

  // 行政划分 - 省
  provinceList: any[] = PROVINCE_LIST;

  DiQu: any;

  // 搜索文本
  searchValue: any;

  radioValue: any = '1';

  // 按钮排序激活
  btnSortActiveMap: any = {
    ReDu: 0
  };

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_SEC_BANNER_SRC = ConstantHandler.CH_SEC_BANNER_SRC;
    this.CH_SEC_BANNER_MENU = ConstantHandler.CH_SEC_BANNER_MENU;
    this.dataHandler = DataSEResourcesHandler;
    this.total = this.dataHandler.LIST_DATA.length;
    this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsSec.clickBannerMenu(this.portalNav, menu);
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
   * 点击按钮进行排序
   * @param event 
   */
  onClickButtonSortChange(event: any, id: any) {
    this.btnSortActiveMap = {
      ReDu: 0
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
        if (row.MingCheng) {
          let text = '' + row.MingCheng;
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
   * 点击分类
   * @param event 
   */
  onClickType(event: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 选择地区 - 省
   * @param value 
   */
  onSelectDiQu(value: any) {
    if (!!value) {
    }
  }

  /**
   * 查看详情
   * @param id 
   */
  onViewDetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

  radioValueChange(event) {

  }

}
