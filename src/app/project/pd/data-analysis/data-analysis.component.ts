import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { DataDataAnalysisHandler } from 'src/data/pd/data-analysis';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { UtilsPd } from '../utils/utils-pd';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.scss']
})
export class DataAnalysisComponent implements OnInit {

  // 横幅图片
  CH_PD_BANNER_SRC: any;

  // 横幅菜单
  CH_PD_BANNER_MENU: KeyVerticalMenuEvent[];

  // 大数据分析数据助手
  dataHandler: any;

  // 门户导航
  portalNav: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_PD_BANNER_SRC = ConstantHandler.CH_PD_BANNER_SRC;
    this.CH_PD_BANNER_MENU = ConstantHandler.CH_PD_BANNER_MENU;
    this.dataHandler = DataDataAnalysisHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsPd.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

  /**
   * 打开互联网数据平台详情页
   * @param id 
   */
  openDataPlatformDetails(id: any) {
    this.navigateDeveloping();
  }

}
