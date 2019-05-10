import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataEquipmentSupplierHandler } from 'src/data/me/equipment-supplier';
import { Utils } from 'src/modules/utils/utils';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { UtilsMe } from '../utils/utils-me';

@Component({
  selector: 'app-equipment-supplier',
  templateUrl: './equipment-supplier.component.html',
  styleUrls: ['./equipment-supplier.component.scss']
})
export class EquipmentSupplierComponent implements OnInit {

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

  option1: any;
  searchValue: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_ME_EQUIPMENT_BANNER_SRC = ConstantHandler.CH_ME_EQUIPMENT_BANNER_SRC;
    this.CH_ME_BANNER_MENU = ConstantHandler.CH_ME_BANNER_MENU;
    this.dataHandler = DataEquipmentSupplierHandler;
    this.total = this.dataHandler.LIST_DATA.length;
    this.handleListDataPagination(this.dataHandler.LIST_DATA, 1);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsMe.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 处理列表数据
   */
  handleListData(listData: any[]) {
    if (listData != null && listData.length > 0) {
      let listDataTemp = Utils.arrayRandomSort(listData);
      this.listData = [];
      let len = listData.length > this.pageSize ? this.pageSize : listData.length;
      for (let i = 0; i < len; i++) {
        this.listData.push(listDataTemp[i]);
      }
    } else {
      this.listData = [];
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
    this.handleListDataPagination(this.dataHandler.LIST_DATA, event);
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
  onClickButtonSortChange(event: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 所在地下拉框
   * @param option 
   */
  onSelectOption(option: any) {
    if (this.dataHandler.LIST_DATA && option != null) {
      const regExp = new RegExp(Utils.escapeRegexp(option), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.location) {
          let text = '' + row.location;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListData(listData);
    } else {
      this.handleListData(this.dataHandler.LIST_DATA);
    }
  }

  // 搜索
  onSearch() {
    if (this.dataHandler.LIST_DATA && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.title) {
          let text = '' + row.title;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListDataPagination(listData, 1);
    } else {
      this.handleListDataPagination(this.dataHandler.LIST_DATA, 1);
    }
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
