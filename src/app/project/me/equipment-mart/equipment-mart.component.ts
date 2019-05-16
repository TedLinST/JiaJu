import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataEquipmentMartHandler } from 'src/data/me/equipment-mart';
import { Utils } from 'src/modules/utils/utils';
import { UtilsMe } from '../utils/utils-me';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';

@Component({
  selector: 'app-equipment-mart',
  templateUrl: './equipment-mart.component.html',
  styleUrls: ['./equipment-mart.component.scss']
})
export class EquipmentMartComponent implements OnInit {

  // 横幅图片
  CH_ME_EQUIPMENT_BANNER_SRC: any;

  // 横幅菜单
  CH_ME_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  listData: any[] = [];

  // 一页大小
  pageSize = 10;

  // 总数据
  total: number = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  // 搜索文本
  searchValue: any;

  // 按钮排序激活
  btnSortActiveMap: any = {
    price: 0,
    qty: 0
  };

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_ME_EQUIPMENT_BANNER_SRC = ConstantHandler.CH_ME_EQUIPMENT_BANNER_SRC;
    this.CH_ME_BANNER_MENU = ConstantHandler.CH_ME_BANNER_MENU;
    this.dataHandler = DataEquipmentMartHandler;
    this.total = this.dataHandler.LIST_DATA.length;
    this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsMe.clickBannerMenu(this.portalNav, menu);
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
      price: 0,
      qty: 0
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
        if (row.title) {
          let text = '' + row.title;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.equipmentType) {
          let text = '' + row.equipmentType;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.equipmentVolumes) {
          let text = '' + row.equipmentVolumes;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.location) {
          let text = '' + row.location;
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
   * 加购
   * @param id 
   */
  onPurchase(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 收藏
   * @param id 
   */
  onCollection(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 联系方式
   * @param id 
   */
  onTel(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

}
