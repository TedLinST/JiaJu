import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { Router } from '@angular/router';
import { DataProductDesignHandler } from 'src/data/pd/product-design';
import { KeyCarouselLabelEvent } from 'src/modules/key/carousel/carousel-label.event';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { UtilsPd } from '../utils/utils-pd';

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.scss']
})
export class ProductDesignComponent implements OnInit {

  // 横幅图片
  CH_PD_BANNER_SRC: any;

  // 横幅菜单
  CH_PD_BANNER_MENU: KeyVerticalMenuEvent[];

  // 产品设计开发服务数据助手
  dataHandler: any;

  // 设计师园地当前下标
  currentIndexDG = 0;

  labelArrayDG: KeyCarouselLabelEvent[] = [
    {
      key: 'title',
    },
    {
      label: '年限',
      key: 'number',
    }
  ];

  // 门户导航
  portalNav: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_PD_BANNER_SRC = ConstantHandler.CH_PD_BANNER_SRC;
    this.CH_PD_BANNER_MENU = ConstantHandler.CH_PD_BANNER_MENU;
    this.dataHandler = DataProductDesignHandler;
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
   * 行业智库 - 更多
   */
  onClickMoreIL() {
    this.navigateDeveloping();
  }

  /**
   * 打开行业智库详情页
   */
  openIndustryLibraryDetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 优秀设计师 - 更多
   */
  onClickMoreDG0() {
    this.navigateDeveloping();
  }

  /**
   * 打开优秀设计师详情页
   * @param id 
   */
  openDesignersGardenDetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 新锐设计师 - 更多
   */
  onClickMoreDG1() {
    this.navigateDeveloping();
  }

  /**
   * 设计师论坛 - 更多
   */
  onClickMoreDG2() {
    this.navigateDeveloping();
  }

  /**
   * 产品设计资料库详情页
   */
  openDesignDatabaseDetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 设计软件集成详情页
   */
  openSoftwareIntegrationDetails(id: any) {
    this.navigateDeveloping();
  }

}
