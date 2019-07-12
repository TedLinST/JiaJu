import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';

export class UtilsIs {

  /**
   * 点击横幅菜单
   * @param portalNav 
   * @param menu 
   */
  public static clickBannerMenu(portalNav: any, menu: KeyVerticalMenuEvent) {
    if (!!menu) {
      switch (menu.id) {
        case '1':
          // 展会服务
          portalNav.openExhibition();
          break;
        case '1-1':
          // 家具展会详细
          portalNav.openFurnitureFair();
          break;
        case '1-2':
          // 预登记详细
          portalNav.openPreRegistration();
          break;
        case '1-3':
          // 申请参展详细
          portalNav.openApplyExhibitors();
          break;
        case '2':
          // 政府服务
          portalNav.openGovernment();
          break;
        case '2-1':
          // 家具国家标准
          portalNav.openFurnitureStandard();
          break;
        case '2-2':
            //专利服务
            portalNav.openPatentsService();
            break;
        case '2-3':
            // 税务服务
            portalNav.openTaxService();
            break;
        case '2-4':
            // 环保服务
            portalNav.openEnvironmentalProtectionService();
            break;
        case '2-5':
          // 工商服务
          portalNav.openBusinessService();
          break;
        case '2-3':
          // 专利服务
          portalNav.openFurnitureStandard();
          break;
        case '2-4':
          // 税务服务
          portalNav.openFurnitureStandard();
          break;
        case '2-5':
          // 环保服务
          portalNav.openFurnitureStandard();
          break;
        case '3':
          // 金融服务
          portalNav.openFinance();
          break;
        case '3-1':
          // 找资金
          portalNav.openFindingFunds();
          break;
        case '3-2':
          // 选项目
          portalNav.openSelectedItems();
          break;
        case '3-3':
          // 线下融资活动
          portalNav.openOfflineFinancing();
          break;
        /* case '3-4':
          // 资金信息详细
          portalNav.openFundInformation();
          break;
        case '3-5':
          // 项目信息详细
          portalNav.openProjectInformation();
          break; */
        case '4':
          // 家具送装
          portalNav.openFurnitureDelivery();
          break;
        case '4-1':
          // 送装下单
          portalNav.openDeliveryOrder();
          break;
        case '4-2':
          // 服务介绍
          portalNav.openServiceIntroduction();
          break;
        case '4-3':
          // 师傅加入
          portalNav.openMasterJoined();
          break;
        case '4-4':
          // 商家开通
          portalNav.openMerchantOpening();
          break;
      }
    }
  }

}