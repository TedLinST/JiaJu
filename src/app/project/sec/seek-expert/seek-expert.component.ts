import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataSeekExpertHandler } from 'src/data/sec/seek-expert';
import { UtilsSec } from '../utils/utils-sec';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-seek-expert',
  templateUrl: './seek-expert.component.html',
  styleUrls: ['./seek-expert.component.scss']
})
export class SeekExpertComponent implements OnInit {

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
  pageSize = 24;

  // 总数据
  total: number = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_SEC_BANNER_SRC = ConstantHandler.CH_SEC_BANNER_SRC;
    this.CH_SEC_BANNER_MENU = ConstantHandler.CH_SEC_BANNER_MENU;
    this.dataHandler = DataSeekExpertHandler;
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
   * 点击分类
   * @param event 
   */
  onClickType(event: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 咨询
   * @param id 
   */
  onConsult(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

}
