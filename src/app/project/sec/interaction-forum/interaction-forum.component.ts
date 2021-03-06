import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataInteractionForumHandler } from 'src/data/sec/interaction-forum';
import { UtilsSec } from '../utils/utils-sec';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-interaction-forum',
  templateUrl: './interaction-forum.component.html',
  styleUrls: ['./interaction-forum.component.scss']
})
export class InteractionForumComponent implements OnInit {

  // 横幅图片
  CH_SEC_BANNER_SRC: any;

  // 横幅菜单
  CH_SEC_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  listData: any[] = [];

  // 一页大小
  pageSize = 12;

  // 总数据
  total: number = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  // 搜索文本
  searchValue: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_SEC_BANNER_SRC = ConstantHandler.CH_SEC_BANNER_SRC;
    this.CH_SEC_BANNER_MENU = ConstantHandler.CH_SEC_BANNER_MENU;
    this.dataHandler = DataInteractionForumHandler;
    this.total = this.dataHandler.WR.LIST_DATA.length;
    this.handleListDataPagination(this.dataHandler.WR.LIST_DATA, this.activePagaIndex);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsSec.clickBannerMenu(this.portalNav, menu);
  }

  // 搜索
  onSearch() {
    this.activePagaIndex = 1;
    if (this.dataHandler.WR.LIST_DATA && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.dataHandler.WR.LIST_DATA.filter((row: any) => {
        if (row.BiaoTi) {
          let text = '' + row.BiaoTi;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListDataPagination(listData, this.activePagaIndex);
    } else {
      this.handleListDataPagination(this.dataHandler.WR.LIST_DATA, this.activePagaIndex);
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
    this.handleListDataPagination(this.dataHandler.WR.LIST_DATA, this.activePagaIndex);
  }

  /**
   * 点击分类
   * @param event 
   */
  onClickType(event: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 在线互动入口详情
   * @param id 
   */
  openOIPLADetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 往期精彩回顾详情
   */
  openWRDetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }
}
