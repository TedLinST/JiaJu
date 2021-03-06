import { Router } from '@angular/router';

export class PortalNavigation {

  constructor(private router: Router) {
    // 滚动条回到顶部
    if (!!window) {
      window.scrollTo(0, 0);
    }
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
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('product-design');
  }

  /**
   * 产品设计开发服务 - 大数据分析
   */
  openDataAnalysis(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
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
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('design-database');
  }

  /**
   * 产品设计开发服务 - 设计师园地
   */
  openDesignersGarden(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('designers-garden');
  }

  /**
   * 产品设计开发服务 - 设计软件集成
   */
  openSoftwareIntegration(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('software-integration');
  }

  /**
   * 管理系统登录
   */
  openErLogin(event?: any) {
    this.router.navigateByUrl('er-login');
  }

  /**
   * 管理系统
   */
  openEr(event?: any) {
    this.router.navigateByUrl('er');
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
    this.router.navigate(['material-mart']);
  }

  /**
   * 原辅材料机械设备服务 - 原辅材料团购
   */
  openmMaterialShopping(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    // this.router.navigateByUrl('material-shopping');
    // this.navigateDeveloping();
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
    this.router.navigateByUrl('furniture-raw-shopping');
  }

  /**
   * 原辅材料机械设备服务 - 原辅材料求购
   */
  openMaterialPurchase(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('material-purchase');
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
    // this.navigateDeveloping();
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
    this.router.navigateByUrl('integrated-services');
  }

  /**
   * 综合服务 - 展会服务
   */
  openExhibition(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('exhibition');
  }

  /**
   * 综合服务 - 展会服务 - 家具展会详细
   */
  openFurnitureFair(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('furniture-fair');
  }

  /**
   * 综合服务 - 展会服务 - 预登记详细
   */
  openPreRegistration(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('pre-registration');
  }

  /**
   * 综合服务 - 展会服务 - 申请参展详细
   */
  openApplyExhibitors(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('apply-exhibitors');
  }

  /**
   * 综合服务 - 政府服务
   */
  openGovernment(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('government');
  }

  /**
   * 综合服务 - 政府服务 - 家具国家标准
   */
  openFurnitureStandard(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    //this.router.navigateByUrl('developing');
    this.router.navigateByUrl('furniture-standard');
  }

  /**
   * 综合服务 - 政府服务 - 家具国家标准
   */
  openFurnitureStandardDetails(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    //this.router.navigateByUrl('developing');
    this.router.navigateByUrl('standard-details');
  }

  /**
   * 综合服务 - 政府服务 - 专利服务
   */
  openPatentsService(event?: any){
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('patent-service');
    //this.navigateDeveloping();
  }

  /**
   * 综合服务 - 政府服务 - 税务服务
   */
  openTaxService(event?: any){
    if (!!event) {
      event.stopPropagation();
    }
    // this.router.navigateByUrl('patent-service');
    this.navigateDeveloping();
  }

  /**
   * 综合服务 - 政府服务 - 环保服务
   */
openEnvironmentalProtectionService(event?: any){
  if (!!event) {
    event.stopPropagation();
  }
  // this.router.navigateByUrl('patent-service');
  this.navigateDeveloping();
}

  /**
   * 综合服务 - 政府服务 - 工商服务
   */
  openBusinessService(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('business-service');
  }

  /**
   * 综合服务 - 金融服务
   */
  openFinance(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('finance');
  }

  /**
   * 综合服务 - 金融服务 - 找资金
   */
  openFindingFunds(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('finding-funds');
  }

  /**
   * 综合服务 - 金融服务 - 资金信息详细
   */
  openFundInformation(info: any, event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    let itemInfo: any = JSON.stringify(info);
    this.router.navigate(['fund-information'], { queryParams: { itemInfo: itemInfo } });
  }

  /**
   * 综合服务 - 金融服务 - 选项目
   */
  openSelectedItems(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('selected-items');
  }

  /**
   * 综合服务 - 金融服务 - 项目信息详细
   */
  openProjectInformation(info: any, event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    let itemInfo: any = JSON.stringify(info);
    this.router.navigate(['project-information'], { queryParams: { itemInfo: itemInfo } });
  }

  /**
   * 综合服务 - 金融服务 - 线下融资活动
   */
  openOfflineFinancing(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('offline-financing');
  }

  /**
   * 综合服务 - 家具送装
   */
  openFurnitureDelivery(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('furniture-delivery');
  }

  /**
   * 综合服务 - 家具送装 - 送装下单
   */
  openDeliveryOrder(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('delivery-order');
  }

  /**
   * 综合服务 - 家具送装 - 服务介绍
   */
  openServiceIntroduction(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('service-introduction');
  }

  /**
   * 综合服务 - 家具送装 - 师傅加入
   */
  openMasterJoined(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('master-joined');
  }

  /**
   * 综合服务 - 家具送装 - 商家开通
   */
  openMerchantOpening(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('merchant-opening');
  }

  /**
   * 校企合作服务
   */
  openSECooperation(event?: any) {
    this.router.navigateByUrl('s-e-cooperation');
  }

  /**
   * 校企合作服务 - 学校项目
   */
  openSchoolProject(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('school-project');
  }

  /**
   * 校企合作服务 - 企业需求
   */
  openEnterpriseNeeds(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('enterprise-needs');
  }

  /**
   * 校企合作服务 - 校企资源
   */
  openSeResources(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('se-resources');
  }

  /**
   * 校企合作服务 - 企业招聘
   */
  openEnterpriseRecruitment(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('enterprise-recruitment');
  }

  /**
   * 校企合作服务 - 互动讲堂
   */
  openInteractionForum(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('interaction-forum');
  }

  /**
   * 校企合作服务 - 校企新闻
   */
  openSeNews(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('se-news');
  }

  /**
   * 校企合作服务 - 有困难找专家
   */
  openSeekExpert(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('seek-expert');
  }

  /**
   * 校企合作服务 - 文件下载
   */
  openFileDownload(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('file-download');
  }

  /**
   * 家具商城
   */
  openFurnitureMall(event?: any) {
    this.router.navigateByUrl('furniture-mall');
  }

  /**
   * 家具商城 - 众筹频道
   */
  openChannelChannel(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('channel-channel');
  }

  /**
   * 家具商城 - 品牌
   */
  openBrand(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('brand');
  }

  /**
   * 家具商城 - 团购
   */
  openGroupBuying(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('group-buying');
  }

  /**
   * 家具商城 - 商品
   */
  openCommodity(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('commodity');
  }

  /**
   * 家具商城 - 商品 - 详情
   */
  openCommodityDetails(info: any, event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    let itemInfo: any = JSON.stringify(info);
    this.router.navigate(['commodity-details'], { queryParams: { itemInfo: itemInfo } });
  }

  /**
   * 家具商城 - 商家店铺
   */
  openShop(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('shop');
  }

  /**
   * 家具商城 - 商家店铺 - 详细
   */
  openShopDetails(info: any, event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    let itemInfo: any = JSON.stringify(info);
    this.router.navigate(['shop-details'], { queryParams: { itemInfo: itemInfo } });
  }

  /**
   * 家具商城 - 商家店铺 - 商品
   */
  openShopMerchandise(info: any, event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    let itemInfo: any = JSON.stringify(info);
    this.router.navigate(['shop-merchandise'], { queryParams: { itemInfo: itemInfo } });
  }

  /**
   * 家具商城 - 购物车
   */
  openShoppingCart(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl('shopping-cart');
  }

  /**
   * 家具商城 - 结算
   */
  openStatements(info: any, event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    let itemInfo: any = JSON.stringify(info);
    this.router.navigate(['statements'], { queryParams: { itemInfo: itemInfo } });
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping(event?: any) {
    this.router.navigateByUrl('developing');
  }
}
