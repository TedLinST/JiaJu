export const EnterpriseResourceRoutes = [
  { path: 'er-home', loadChildren: '../er-home/er-home.module#ErHomeModule' }, // 企业资源管理系统首页
  { path: 'hr-organization-structure', loadChildren: '../hr/organization-structure/organization-structure.module#OrganizationStructureModule' }, // 组织结构管理
  { path: 'sale-sales-analysis', loadChildren: '../sale/sales-analysis/sales-analysis.module#SalesAnalysisModule' }, // 款式销售分析表
  { path: 'sale-commodity-planning-control', loadChildren: '../sale/commodity-planning-control/commodity-planning-control.module#CommodityPlanningControlModule' }, // 商品计划管控表
  { path: 'sale-sales-order-details', loadChildren: '../sale/sales-order-details/sales-order-details.module#SalesOrderDetailsModule' }, // 销售下单明细表
  { path: 'sale-after-sales-management', loadChildren: '../sale/after-sales-management/after-sales-management.module#AfterSalesManagementModule' }, // 售后管理
  { path: 'dev-design-progress-summary', loadChildren: '../dev/design-progress-summary/design-progress-summary.module#DesignProgressSummaryModule' }, // 设计开发完成进度汇总表
  { path: 'dev-sample-process-hours-wages', loadChildren: '../dev/sample-process-hours-wages/sample-process-hours-wages.module#SampleProcessHoursWagesModule' }, // 样品款式工序工时工价表
  { path: 'prod-purchasing-order-tracking', loadChildren: '../prod/purchasing-order-tracking/purchasing-order-tracking.module#PurchasingOrderTrackingModule' }, // 采购订单跟踪表
  { path: 'prod-production-planning-control', loadChildren: '../prod/production-planning-control/production-planning-control.module#ProductionPlanningControlModule' }, // 生产计划管控表
  { path: 'prod-scheduling-rules', loadChildren: '../prod/scheduling-rules/scheduling-rules.module#SchedulingRulesModule' }, // 生产计划排单规则
  { path: 'prod-process-task-sheet', loadChildren: '../prod/process-task-sheet/process-task-sheet.module#ProcessTaskSheetModule' }, // 工序任务单
  { path: 'prod-team-task-schedule', loadChildren: '../prod/team-task-schedule/team-task-schedule.module#TeamTaskScheduleModule' }, // 生产班组任务完成进度表
  { path: 'prod-material-release-list', loadChildren: '../prod/material-release-list/material-release-list.module#MaterialReleaseListModule' }, // 材料出库单
  { path: 'prod-material-consumption-analysis', loadChildren: '../prod/material-consumption-analysis/material-consumption-analysis.module#MaterialConsumptionAnalysisModule' }, // 材料消耗分析表
  { path: 'prod-component-type', loadChildren: '../prod/component-type/component-type.module#ComponentTypeModule' }, // 部件类型表
  { path: 'prod-location-information', loadChildren: '../prod/location-information/location-information.module#LocationInformationModule' }, // 部位信息表
  { path: 'prod-process-sheet', loadChildren: '../prod/process-sheet/process-sheet.module#ProcessSheetModule' }, // 工艺表
  { path: 'prod-process-hours-wages', loadChildren: '../prod/process-hours-wages/process-hours-wages.module#ProcessHoursWagesModule' }, // 工序工时工价表
  { path: 'prod-summary-production-costs', loadChildren: '../prod/summary-production-costs/summary-production-costs.module#SummaryProductionCostsModule' }, // 订单生产实际成本汇总表
  // { path: 'prod-cash-flow-graph', loadChildren: '../prod/cash-flow-graph/cash-flow-graph.module#CashFlowGraphModule' }, // 现金流曲线图
  // { path: 'prod-inventory-analysis', loadChildren: '../prod/inventory-analysis/inventory-analysis.module#InventoryAnalysisModule' }, // 成品库存分析
  { path: 'prod-input-output', loadChildren: '../prod/input-output/input-output.module#InputOutputModule' }, // 投入产出分析

  // 路由重定向
  { path: '', loadChildren: '../er-home/er-home.module#ErHomeModule' },
  { path: '**', loadChildren: '../er-home/er-home.module#ErHomeModule' }
]