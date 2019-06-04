import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataCommodityDetailsHandler } from 'src/data/fm/commodity-details';
import { UtilsFm } from '../utils/utils-fm';

@Component({
  selector: 'app-commodity-details',
  templateUrl: './commodity-details.component.html',
  styleUrls: ['./commodity-details.component.scss']
})
export class CommodityDetailsComponent implements OnInit {

  // 横幅图片
  CH_FM_BANNER_SRC: any;

  // 横幅菜单
  CH_FM_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  // 款式分类
  CH_KuanShiFenLei: any;

  // 颜色分类
  CH_YanSeFenLei: any;

  // 安装方式
  CH_AnZhuangFangShi: any;

  itemInfo: any;

  itemActiveIndex: number = 1;
  activeIndex0: number = 1;
  activeIndex1: number = 1;
  activeIndex2: number = 1;

  activeIndex: number = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_FM_BANNER_SRC = ConstantHandler.CH_FM_BANNER_SRC;
    this.CH_FM_BANNER_MENU = ConstantHandler.CH_FM_BANNER_MENU;
    this.CH_KuanShiFenLei = ConstantHandler.CH_KuanShiFenLei;
    this.CH_YanSeFenLei = ConstantHandler.CH_YanSeFenLei;
    this.CH_AnZhuangFangShi = ConstantHandler.CH_AnZhuangFangShi;
    this.dataHandler = DataCommodityDetailsHandler;

    // 获取参数
    let itemInfo = this.getUrlParams('itemInfo');
    if (!!itemInfo) {
      this.itemInfo = JSON.parse(itemInfo);
    }
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsFm.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 获取浏览器地址栏
   * @param paramsName 参数名称
   * @returns {any}
   */
  getUrlParams(paramsName: any) {
    let value: any;
    // 获取单个参数
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      value = queryParams[paramsName];
    });
    return value;
  }

  /**
   * 收藏
   * @param id 
   */
  onCollection(id?: any) {
    this.navigateDeveloping();
  }

  /**
   * 购买
   * @param id 
   */
  onAddPurchase(id?: any) {
    this.portalNav.openStatements([this.itemInfo]);
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

}
