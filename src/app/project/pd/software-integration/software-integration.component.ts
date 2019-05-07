import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataSoftwareIntegrationHandler } from 'src/data/pd/software-integration';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-software-integration',
  templateUrl: './software-integration.component.html',
  styleUrls: ['./software-integration.component.scss']
})
export class SoftwareIntegrationComponent implements OnInit {

  // 横幅图片
  CH_PD_BANNER_SRC: any;

  // 横幅菜单
  CH_PD_BANNER_MENU: KeyVerticalMenuEvent[];

  // 产品设计开发服务数据助手
  dataHandler: any;

  // 门户导航
  portalNav: any;
  // 一页大小
  pageSize = 8;

  // 总数据
  total: 0;

  // 列表数据
  listData: any[] = [];

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_PD_BANNER_SRC = ConstantHandler.CH_PD_BANNER_SRC;
    this.CH_PD_BANNER_MENU = ConstantHandler.CH_PD_BANNER_MENU;
    this.dataHandler = DataSoftwareIntegrationHandler;
    this.total = this.dataHandler.LIST_DATA.length;
    this.handleListData(this.dataHandler.LIST_DATA);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    if (!!menu) {
      if (menu.id == '1') {
        // 大数据分析
        this.portalNav.openDataAnalysis();
      } else if (menu.id == '2') {
        // 产品设计资料库
        this.portalNav.openDesignDatabase();
      } else if (menu.id == '3') {
        // 设计师园地
        this.portalNav.openDesignersGarden();
      } else if (menu.id == '4') {
        // 设计软件集成
        this.portalNav.openSoftwareIntegration();
      }
    }
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
   * 分页
   */
  onPageIndexChange() {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 点击分类
   * @param event 
   */
  onClickType(event: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

}
