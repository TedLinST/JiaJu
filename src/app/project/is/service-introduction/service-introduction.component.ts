import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataServiceIntroductionHandler } from 'src/data/is/service-introduction';
import { UtilsIs } from '../utils/utils-is';

@Component({
  selector: 'app-service-introduction',
  templateUrl: './service-introduction.component.html',
  styleUrls: ['./service-introduction.component.scss']
})
export class ServiceIntroductionComponent implements OnInit {

  // 横幅图片
  CH_IS_BANNER_SRC: any;

  // 横幅菜单
  CH_IS_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_2_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataServiceIntroductionHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
  }


  /**
   * 费用计算
   * @param type 
   */
  onCalculation(type: any) {
    this.navigateDeveloping();
  }

  /**
   * 我要下单
   */
  onOrder(type: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }
}
