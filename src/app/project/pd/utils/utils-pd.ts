import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';

export class UtilsPd {

  /**
   * 点击横幅菜单
   * @param portalNav 
   * @param menu 
   */
  public static clickBannerMenu(portalNav: any, menu: KeyVerticalMenuEvent) {
    if (!!menu) {
      if (menu.id == '1') {
        // 大数据分析
        portalNav.openDataAnalysis();
      } else if (menu.id == '2') {
        // 产品设计资料库
        portalNav.openDesignDatabase();
      } else if (menu.id == '3') {
        // 设计师园地
        portalNav.openDesignersGarden();
      } else if (menu.id == '4') {
        // 设计软件集成
        portalNav.openSoftwareIntegration();
      }
    }
  }

}