import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataEnterpriseRecruitmentHandler } from 'src/data/sec/enterprise-recruitment';
import { UtilsSec } from '../utils/utils-sec';

@Component({
  selector: 'app-enterprise-recruitment',
  templateUrl: './enterprise-recruitment.component.html',
  styleUrls: ['./enterprise-recruitment.component.scss']
})
export class EnterpriseRecruitmentComponent implements OnInit {

  // 横幅图片
  CH_SEC_BANNER_SRC: any;

  // 横幅菜单
  CH_SEC_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  currentIndexGA: number = 0;
  currentIndexEA: number = 0;
  currentIndexUA: number = 0;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_SEC_BANNER_SRC = ConstantHandler.CH_SEC_BANNER_SRC;
    this.CH_SEC_BANNER_MENU = ConstantHandler.CH_SEC_BANNER_MENU;
    this.dataHandler = DataEnterpriseRecruitmentHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsSec.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 研究生应聘详情
   * @param id 
   */
  openGADetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 本专科生应聘详情
   * @param id 
   */
  openUADetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 专家应聘
   * @param id 
   */
  openEADetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

}
