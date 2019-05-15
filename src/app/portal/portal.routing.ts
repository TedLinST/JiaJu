export const PortalRoutes = [
    // 首页
    // { path: 'home', loadChildren: '../project/home/home.module#HomeModule' },
    // 产品设计开发服务
    // { path: 'product-design', loadChildren: '../project/product-design/product-design.module#ProductDesignModule' },
    // 产品设计开发服务 - 大数据分析
    // { path: 'data-analysis', loadChildren: '../project/data-analysis/data-analysis.module#DataAnalysisModule' },
    // 产品设计开发服务 - 大数据分析 - 详情
    // { path: 'data-analysis-details/:id', loadChildren: '../project/data-analysis-details/data-analysis-details.module#DataAnalysisDetailsModule' },
    // 产品设计开发服务 - 产品设计资料库
    // { path: 'design-database', loadChildren: '../project/design-database/design-database.module#DesignDatabaseModule' },
    // 产品设计开发服务 - 设计师园地
    // { path: 'designer-garden', loadChildren: '../project/designer-garden/designer-garden.module#DesignerGardenModule' },
    // 产品设计开发服务 - 设计软件集成
    // { path: 'software-integration', loadChildren: '../project/software-integration/software-integration.module#SoftwareIntegrationModule' },
    // 原辅材料机械设备服务
    // { path: 'raw-material', loadChildren: '../project/raw-material/raw-material.module#RawMaterialModule' },
    // 原辅材料机械设备服务 - 原辅材料 - 木材团购
    // { path: 'wood-group-buy', loadChildren: '../project/wood-group-buy/wood-group-buy.module#WoodGroupBuyModule' },


    { path: 'home', loadChildren: '../project/home/home.module#HomeModule' }, // 首页
    { path: 'product-design', loadChildren: '../project/pd/product-design/product-design.module#ProductDesignModule' }, // 产品设计开发服务
    { path: 'data-analysis', loadChildren: '../project/pd/data-analysis/data-analysis.module#DataAnalysisModule' }, // 大数据分析
    { path: 'data-analysis-details/:id', loadChildren: '../project/pd/data-analysis-details/data-analysis-details.module#DataAnalysisDetailsModule' }, // 大数据分析详情
    { path: 'design-database', loadChildren: '../project/pd/design-database/design-database.module#DesignDatabaseModule' }, // 产品设计资料库
    { path: 'designers-garden', loadChildren: '../project/pd/designers-garden/designers-garden.module#DesignersGardenModule' }, // 设计师园地
    { path: 'software-integration', loadChildren: '../project/pd/software-integration/software-integration.module#SoftwareIntegrationModule' }, // 设计软件集成
    // { path: 'enterprise-resource', loadChildren: '../project/er/enterprise-resource/enterprise-resource.module#EnterpriseResourceModule' }, // 企业资源管理系统
    // { path: 'organization', loadChildren: '../project/er/organization/organization.module#OrganizationModule' }, // 组织管理
    // { path: 'sale', loadChildren: '../project/er/sale/sale.module#SaleModule' }, // 销售管理
    // { path: 'development', loadChildren: '../project/er/development/development.module#DevelopmentModule' }, // 开发管理
    // { path: 'production', loadChildren: '../project/er/production/production.module#ProductionModule' }, // 生产管理
    { path: 's-e-cooperation', loadChildren: '../project/sec/s-e-cooperation/s-e-cooperation.module#SECooperationModule' }, // 校企合作服务
    { path: 'school-project', loadChildren: '../project/sec/school-project/school-project.module#SchoolProjectModule' }, // 学校项目
    { path: 'enterprise-needs', loadChildren: '../project/sec/enterprise-needs/enterprise-needs.module#EnterpriseNeedsModule' }, // 企业需求
    { path: 'se-resources', loadChildren: '../project/sec/se-resources/se-resources.module#SeResourcesModule' }, // 校企资源
    { path: 'enterprise-recruitment', loadChildren: '../project/sec/enterprise-recruitment/enterprise-recruitment.module#EnterpriseRecruitmentModule' }, // 企业招聘
    { path: 'interaction-forum', loadChildren: '../project/sec/interaction-forum/interaction-forum.module#InteractionForumModule' }, // 互动讲堂
    { path: 'se-news', loadChildren: '../project/sec/se-news/se-news.module#SeNewsModule' }, // 校企新闻
    { path: 'seek-expert', loadChildren: '../project/sec/seek-expert/seek-expert.module#SeekExpertModule' }, // 有困难找专家
    { path: 'file-download', loadChildren: '../project/sec/file-download/file-download.module#FileDownloadModule' }, // 文件下载
    // { path: 'integrated-services', loadChildren: '../project/is/integrated-services/integrated-services.module#IntegratedServicesModule' }, // 综合服务
    // { path: 'exhibition', loadChildren: '../project/is/exhibition/exhibition.module#ExhibitionModule' }, // 展会服务
    // { path: 'government', loadChildren: '../project/is/government/government.module#GovernmentModule' }, // 政府服务
    // { path: 'finance', loadChildren: '../project/is/finance/finance.module#FinanceModule' }, // 金融服务
    // { path: 'logistics', loadChildren: '../project/is/logistics/logistics.module#LogisticsModule' }, // 物流售后服务
    { path: 'material-equipment', loadChildren: '../project/me/material-equipment/material-equipment.module#MaterialEquipmentModule' }, // 原辅材料机械设备服务
    { path: 'material-mart', loadChildren: '../project/me/material-mart/material-mart.module#MaterialMartModule' }, // 原辅材料商城
    // { path: 'material-shopping', loadChildren: '../project/me/material-shopping/material-shopping.module#MaterialShoppingModule' }, // 原辅材料团购
    { path: 'wood-shopping', loadChildren: '../project/me/wood-shopping/wood-shopping.module#WoodShoppingModule' }, // 木材团购
    { path: 'furniture-raw-shopping', loadChildren: '../project/me/furniture-raw-shopping/furniture-raw-shopping.module#FurnitureRawShoppingModule' }, // 家具辅料团购
    { path: 'material-purchase', loadChildren: '../project/me/material-purchase/material-purchase.module#MaterialPurchaseModule' }, // 原辅材料求购
    { path: 'material-supplier', loadChildren: '../project/me/material-supplier/material-supplier.module#MaterialSupplierModule' }, // 原辅材料供应商
    // { path: 'timber-auction', loadChildren: '../project/me/timber-auction/timber-auction.module#TimberAuctionModule' }, // 木材拍卖行
    { path: 'equipment-mart', loadChildren: '../project/me/equipment-mart/equipment-mart.module#EquipmentMartModule' }, // 机械设备商城
    { path: 'equipment-supplier', loadChildren: '../project/me/equipment-supplier/equipment-supplier.module#EquipmentSupplierModule' }, // 机械设备供应商
    { path: 'equipment-purchase', loadChildren: '../project/me/equipment-purchase/equipment-purchase.module#EquipmentPurchaseModule' }, // 机械设备求购
    // { path: 'furniture-mall', loadChildren: '../project/fm/furniture-mall/furniture-mall.module#FurnitureMallModule' }, // 家具商城
    // { path: 'commodity', loadChildren: '../project/fm/commodity/commodity.module#CommodityModule' }, // 商品
    // { path: 'group-buying', loadChildren: '../project/fm/group-buying/group-buying.module#GroupBuyingModule' }, // 团购
    // { path: 'brand', loadChildren: '../project/fm/brand/brand.module#BrandModule' }, // 品牌
    // { path: 'channel-channel', loadChildren: '../project/fm/channel-channel/channel-channel.module#ChannelChannelModule' }, // 众筹频道

    // 正在开发中
    { path: 'developing', loadChildren: './developing/developing.module#DevelopingModule' },

    // 路由重定向
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
