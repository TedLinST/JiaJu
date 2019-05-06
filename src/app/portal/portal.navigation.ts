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
   * 材料机械
   */
  openMaterialEquipment(event?: any) {
    this.navigateDeveloping();
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
