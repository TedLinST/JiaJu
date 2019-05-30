import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataStatementsHandler } from 'src/data/fm/statements';
import { UtilsFm } from '../utils/utils-fm';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {

  // 横幅图片
  CH_FM_BANNER_SRC: any;

  // 横幅菜单
  CH_FM_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  activeItem: any = {};

  settlementPrice: number = 0.0;

  listData: any[] = [];

  bean: any = {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private notification: NzNotificationService) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_FM_BANNER_SRC = ConstantHandler.CH_FM_BANNER_SRC;
    this.CH_FM_BANNER_MENU = ConstantHandler.CH_FM_BANNER_MENU;
    this.dataHandler = DataStatementsHandler;

    if (this.dataHandler.DZ != null && this.dataHandler.DZ.length > 0) {
      this.activeItem = this.dataHandler.DZ[0];
    }

    // 获取参数
    let itemInfo = this.getUrlParams('itemInfo');
    if (!!itemInfo) {
      this.listData = JSON.parse(itemInfo);
    }
    if (this.listData != null && this.listData.length > 0) {
      let settlementPrice = 0;
      this.listData.forEach((item: any) => {
        settlementPrice = settlementPrice + parseFloat(item.JinE);
      });
      this.settlementPrice = settlementPrice;
    } else {
      this.settlementPrice = 0;
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
   * 管理收货地址
   */
  onGuanLi() {
    this.navigateDeveloping();
  }

  /**
   * 修改该地址
   * @param item 
   */
  onViewDz(item: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

  onReturn() {
    history.go(-1);
  }

  onSubmit() {
    this.notification.create(
      'success',
      '提示',
      '提交订单成功！',
    );
  }

}
