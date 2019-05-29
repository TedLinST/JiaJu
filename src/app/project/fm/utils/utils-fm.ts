import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';

export class UtilsFm {

  /**
   * 点击横幅菜单
   * @param portalNav 
   * @param menu 
   */
  public static clickBannerMenu(portalNav: any, menu: KeyVerticalMenuEvent) {
    if (!!menu) {
      switch (menu.id) {
        case '1':
          // 商品
          portalNav.openCommodity();
          break;
        case '2':
          // 团购
          portalNav.openGroupBuying();
          break;
        case '3':
          // 品牌
          portalNav.openBrand();
          break;
        case '4':
          // 众筹频道
          portalNav.openChannelChannel();
          break;
        case '5':
          // 商家店铺
          portalNav.openShop();
          break;
        case '6':
          // 购物车
          portalNav.openShoppingCart();
          break;
        case '7':
          // 结算
          portalNav.openStatements();
          break;
      }
    }
  }

}