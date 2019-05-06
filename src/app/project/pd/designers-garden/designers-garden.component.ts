import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataDesignersGardenHandler } from 'src/data/designers-garden';

@Component({
  selector: 'app-designers-garden',
  templateUrl: './designers-garden.component.html',
  styleUrls: ['./designers-garden.component.scss']
})
export class DesignersGardenComponent implements OnInit {

  // 横幅图片
  CH_PD_BANNER_SRC: any;

  // 横幅菜单
  CH_PD_BANNER_MENU: KeyVerticalMenuEvent[];

  // 产品设计资料库数据助手
  dataHandler: any;

  // 门户导航
  portalNav: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_PD_BANNER_SRC = ConstantHandler.CH_PD_BANNER_SRC;
    this.CH_PD_BANNER_MENU = ConstantHandler.CH_PD_BANNER_MENU;
    this.dataHandler = DataDesignersGardenHandler;
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

}
