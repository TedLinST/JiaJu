import { Router } from '@angular/router';

export class PortalNavigation {

  constructor(private router: Router) {
  }

  /**
   * 首页
   */
  onHome(event?: any) {
    this.router.navigateByUrl('home');
  }

  // 登录
  onLogin(event?: any) {
    this.router.navigateByUrl('login');
  }

  // 注册
  onRegister(event?: any) {
    this.router.navigateByUrl('register');
  }

  /**
   * 产品设计开发服务
   */
  openProductDesign(event?: any) {
    this.router.navigateByUrl('product-design');
  }

  /**
   * 产品设计开发服务 - 大数据分析
   */
  openDataAnalysis(event?: any) {
    this.router.navigateByUrl('data-analysis');
  }

  /**
   * 产品设计开发服务 - 大数据分析详情
   */
  openDataAnalysisDetails(id: any, event?: any) {
    this.router.navigateByUrl('data-analysis-details/' + id);
  }

  /**
   * 产品设计开发服务 - 产品设计资料库
   */
  openDesignDatabase(event?: any) {
    this.router.navigateByUrl('design-database');
  }

  /**
   * 产品设计开发服务 - 设计师园地
   */
  openDesignersGarden(event?: any) {
    this.router.navigateByUrl('designers-garden');
  }

  /**
   * 产品设计开发服务 - 设计软件集成
   */
  openSoftwareIntegration(event?: any) {
    this.router.navigateByUrl('software-integration');
  }

  /**
   * 管理系统
   */
  openEnterpriseResource(event?: any) {
    this.navigateDeveloping();
  }

  /**
   * 原辅材料机械设备服务
   */
  openMaterialEquipment(event?: any) {
    this.router.navigateByUrl('material-equipment');
  }

  /**
   * 原辅材料机械设备服务 - 原辅材料商城
   */
  openMaterialMart(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('material-mart');
  }

  /**
   * 原辅材料机械设备服务 - 原辅材料团购
   */
  openmMaterialShopping(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    // this.router.navigateByUrl('material-shopping');
    this.navigateDeveloping();
  }

  /**
   * 原辅材料机械设备服务 - 原辅材料团购 - 木材团购
   */
  openWoodShopping(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('wood-shopping');
  }

  /**
   * 原辅材料机械设备服务 - 原辅材料团购 - 家具辅料团购
   */
  openFurnitureRawShopping(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    // this.router.navigateByUrl('furniture-raw-shopping');
    this.navigateDeveloping();
  }

  /**
   * 原辅材料机械设备服务 - 原辅材料求购
   */
  openMaterialPurchase(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    // this.router.navigateByUrl('material-purchase');
    this.navigateDeveloping();
  }

  /**
   * 原辅材料机械设备服务 - 原辅材料供应商
   */
  openMaterialSupplier(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('material-supplier');
  }

  /**
   * 原辅材料机械设备服务 - 木材拍卖行
   */
  openTimberAuction(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    // this.router.navigateByUrl('timber-auction');
    this.navigateDeveloping();
  }

  /**
   * 原辅材料机械设备服务 - 机械设备商城
   */
  openEquipmentMart(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('equipment-mart');
  }

  /**
   * 原辅材料机械设备服务 - 机械设备供应商
   */
  openEquipmentSupplier(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('equipment-supplier');
  }

  /**
   * 原辅材料机械设备服务 - 机械设备求购
   */
  openEquipmentPurchase(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('equipment-purchase');
  }

  /**
   * 综合服务
   */
  openIntegratedServices(event?: any) {
    this.navigateDeveloping();
  }

  /**
   * 校企合作
   */
  openSECooperation(event?: any) {
    this.navigateDeveloping();
  }

  /**
   * 家具商城
   */
  openFurnitureMall(event?: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping(event?: any) {
    this.router.navigateByUrl('developing');
  }
}
