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

  /**
   * 采购订单跟踪表
   */
  openProdPurchasingOrderTracking(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-purchasing-order-tracking');
  }


  /**
   * 生产计划管控表
   */
  openProdProductionPlanningControl(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-production-planning-control');
  }

  /**
   * 生产计划排单规则
   */
  openProdSchedulingRules(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-scheduling-rules');
  }

  /**
   * 工序任务单
   */
  openProdProcessTaskSheet(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-process-task-sheet');
  }

  /**
   * 生产班组任务完成进度表
   */
  openProdTeamTaskSchedule(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-team-task-schedule');
  }

  /**
   * 材料出库单
   */
  openProdMaterialReleaseList(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-material-release-list');
  }

  /**
   * 材料消耗分析表
   */
  openProdMaterialConsumptionAnalysis(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-material-consumption-analysis');
  }

  /**
   * 部件类型表
   */
  openProdComponentType(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-component-type');
  }

  /**
   * 部位信息表
   */
  openProdLocationInformation(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-location-information');
  }

  /**
   * 工艺表
   */
  openProdProcessSheet(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-process-sheet');
  }

  /**
   * 工序工时工价表
   */
  openProdProcessHoursWages(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-process-hours-wages');
  }

  /**
   * 订单生产实际成本汇总表
   */
  openProdSummaryProductionCosts(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-summary-production-costs');
  }

  /**
   * 成品库存分析
   */
  openProdInventoryAnalysis(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-inventory-analysis');
  }

  /**
   * 投入产出分析
   */
  openProdInputOutput(event?: any) {
    if (!!event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(this.baseUrl + 'prod-input-output');
  }

}