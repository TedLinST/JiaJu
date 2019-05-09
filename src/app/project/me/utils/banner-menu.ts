import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';

export class UtilsMe {

  /**
   * 点击横幅菜单
   * @param portalNav 
   * @param menu 
   */
  public static clickBannerMenu(portalNav: any, menu: KeyVerticalMenuEvent) {
    if (!!menu) {
      if (menu.id == '1') {
        // 原辅材料商城
        portalNav.openMaterialMart();
      } else if (menu.id == '2') {
        // 原辅材料团购
        portalNav.openmMaterialShopping();
      } else if (menu.id == '2-1') {
        // 原辅材料团购 - 木材团购
        portalNav.openWoodShopping();
      } else if (menu.id == '2-2') {
        // 原辅材料团购 - 家具辅料团购
        portalNav.openFurnitureRawShopping();
      } else if (menu.id == '3') {
        // 原辅材料求购
        portalNav.openMaterialPurchase();
      } else if (menu.id == '4') {
        // 原辅材料供应商
        portalNav.openMaterialSupplier();
      } else if (menu.id == '5') {
        // 木材拍卖行
        portalNav.openTimberAuction();
      } else if (menu.id == '6') {
        // 机械设备商城
        portalNav.openEquipmentMart();
      } else if (menu.id == '7') {
        // 机械设备供应商
        portalNav.openEquipmentSupplier();
      } else if (menu.id == '8') {
        // 机械设备求购
        portalNav.openEquipmentPurchase();
      }
    }
  }

}