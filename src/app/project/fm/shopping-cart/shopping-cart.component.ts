import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { UtilsFm } from '../utils/utils-fm';
import { DataShoppingCartHandler } from 'src/data/fm/shopping-cart';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

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

  activeItemNumber: number = 1;

  settlementPrice: number = 0.0;

  // 列表数据
  listData: any[] = [];

  allChecked = false;
  indeterminate = true;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_FM_BANNER_SRC = ConstantHandler.CH_FM_BANNER_SRC;
    this.CH_FM_BANNER_MENU = ConstantHandler.CH_FM_BANNER_MENU;
    this.CH_KuanShiFenLei = ConstantHandler.CH_KuanShiFenLei;
    this.CH_YanSeFenLei = ConstantHandler.CH_YanSeFenLei;
    this.CH_AnZhuangFangShi = ConstantHandler.CH_AnZhuangFangShi;
    this.dataHandler = DataShoppingCartHandler;
    this.toggleItem(1);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsFm.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 切换
   */
  toggleItem(activeItemNumber: number) {
    this.activeItemNumber = activeItemNumber;
    this.listData = this.dataHandler['data' + activeItemNumber]
    this.listData.forEach((item) => {
      item.checked = false;
    });
    this.allChecked = false;
    this.indeterminate = true;
    this.settlementPrice = 0;
  }

  /**
   * 计算金额
   * @param item 
   * @param ShuLiang 
   */
  onChangShuLiang(item: any, ShuLiang: number) {
    let settlementPrice = 0;
    this.listData.forEach((item) => {
      if (item.checked && ((item.ShuLiang * item.DanJia) > 0)) {
        settlementPrice = settlementPrice + (item.ShuLiang * item.DanJia);
      }
    });
    this.settlementPrice = settlementPrice;
  }

  /**
   * 删除
   * @param item
   */
  onDelete(item: any) {
    Utils.arrayRemove(this.listData, item);
  }

  /**
   * 移入收藏夹
   * @param item 
   */
  onFavorites(item: any) {
    Utils.arrayRemove(this.listData, item);
  }

  /**
   * 跳转
   */
  openStatements() {
    let listData = [];
    this.listData.forEach((item: any) => {
      if (item.checked) {
        listData.push(item);
      }
    });
    this.portalNav.openStatements(listData);
  }

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.listData = this.listData.map(item => {
        return {
          ...item,
          checked: true
        };
      });
      let settlementPrice = 0;
      this.listData.forEach((item) => {
        if ((item.ShuLiang * item.DanJia) > 0) {
          settlementPrice = settlementPrice + (item.ShuLiang * item.DanJia);
        }
      });
      this.settlementPrice = settlementPrice;
    } else {
      this.listData = this.listData.map(item => {
        return {
          ...item,
          checked: false
        };
      });
      this.settlementPrice = 0;
    }
  }

  updateSingleChecked(): void {
    if (this.listData.every(item => item.checked === false)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.listData.every(item => item.checked === true)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }

    let settlementPrice = 0;
    this.listData.forEach((item) => {
      if (item.checked && (item.ShuLiang * item.DanJia) > 0) {
        settlementPrice = settlementPrice + (item.ShuLiang * item.DanJia);
      }
    });
    this.settlementPrice = settlementPrice;
  }

}
