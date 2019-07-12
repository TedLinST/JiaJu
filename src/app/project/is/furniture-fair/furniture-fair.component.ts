import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataFurnitureFairHandler } from 'src/data/is/furniture-fair';
import { UtilsIs } from '../utils/utils-is';

@Component({
  selector: 'app-furniture-fair',
  templateUrl: './furniture-fair.component.html',
  styleUrls: ['./furniture-fair.component.scss']
})
export class FurnitureFairComponent implements OnInit {

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
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataFurnitureFairHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 展会详细介绍与展会资讯详情页
   * @param id 
   */
  openEDEIDetails(id: any) {
    if (id == 2) {
      // 展会服务 - 预登记详细
      this.portalNav.openPreRegistration();
    } else if (id == 5) {
      // 申请参展详细
      this.portalNav.openApplyExhibitors();
    } else {
      console.log("展会详细介绍与展会资讯详情页");
    }
    // this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

}
