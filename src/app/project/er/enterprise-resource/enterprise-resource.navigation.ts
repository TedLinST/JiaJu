import { Router } from '@angular/router';

export class EnterpriseResourceNavigation {

  private baseUrl: any = "er/";

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
    this.router.navigateByUrl(this.baseUrl + 'er-home');
  }

  /**
   * 组织结构管理
   */
  openHrOrganizationStructure(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'hr-organization-structure');
  }

  /**
   * 款式销售分析表
   */
  openSaleSalesAnalysis(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'sale-sales-analysis');
  }

  /**
   * 商品计划管控表
   */
  openSaleCommodityPlanningControl(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'sale-commodity-planning-control');
  }

  /**
   * 销售下单明细表
   */
  openSaleSalesOrderDetails(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'sale-sales-order-details');
  }

  /**
   * 售后管理
   */
  openSaleAfterSalesManagement(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'sale-after-sales-management');
  }

  /**
   * 设计开发完成进度汇总表
   */
  openDevDesignProgressSummary(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'dev-design-progress-summary');
  }

  /**
   * 样品款式工序工时工价表
   */
  openDevSampleProcessHoursWages(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'dev-sample-process-hours-wages');
  }


}