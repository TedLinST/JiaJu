import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataIntegratedServicesHandler } from 'src/data/is/integrated-services';
import { UtilsIs } from '../utils/utils-is';

@Component({
  selector: 'app-integrated-services',
  templateUrl: './integrated-services.component.html',
  styleUrls: ['./integrated-services.component.scss']
})
export class IntegratedServicesComponent implements OnInit {

  // 横幅图片
  CH_IS_BANNER_SRC: any;

  // 横幅菜单
  CH_IS_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  currentIndexES: number = 0;
  currentIndexGS: number = 0;
  currentIndexFS: number = 0;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataIntegratedServicesHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 展会服务详情页
   * @param id 
   */
  openExhibitionDetails(item: any) {
    console.log("展会服务详情页");
    // this.navigateDeveloping();
  }

  /**
   * 金融服务详情页
   * @param id 
   */
  openFinanceDetails(id: any) {
    console.log("金融服务详情页");
    // this.navigateDeveloping();
  }

  /**
   * 物流售后服务详情页
   * @param id 
   */
  openFurnitureDeliveryDetails(id: any) {
    console.log("物流售后服务详情页");
    // this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

}
