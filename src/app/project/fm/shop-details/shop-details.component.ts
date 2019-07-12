import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataShopDetailsHandler } from 'src/data/fm/shop-details';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { UtilsFm } from '../utils/utils-fm';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  // 横幅图片
  CH_FM_BANNER_SRC_2: any;

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  itemInfo: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_FM_BANNER_SRC_2 = ConstantHandler.CH_FM_BANNER_SRC_2;
    this.dataHandler = DataShopDetailsHandler;

    // 获取参数
    let itemInfo = this.getUrlParams('itemInfo');
    if (!!itemInfo) {
      this.itemInfo = JSON.parse(itemInfo);
    }
    else {
      this.itemInfo = DataShopDetailsHandler.LIST_DATA[0]
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

  openCommodityDetails(item: any, event: any) {
    let itemInfo = Utils.clone(item);
    for (let key in this.itemInfo) {
      if (key != 'data') {
        itemInfo[key] = this.itemInfo[key];
      }
    }
    this.portalNav.openCommodityDetails(itemInfo, event);
  }

}
