import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataOfflineFinancingHandler } from 'src/data/is/offline-financing';
import { UtilsIs } from '../utils/utils-is';

@Component({
  selector: 'app-offline-financing',
  templateUrl: './offline-financing.component.html',
  styleUrls: ['./offline-financing.component.scss']
})
export class OfflineFinancingComponent implements OnInit {

  // 横幅图片
  CH_IS_BANNER_SRC: any;

  // 横幅菜单
  CH_IS_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  currentIndexOFA: number = 0;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataOfflineFinancingHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
  }
}
