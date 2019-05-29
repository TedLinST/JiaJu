export const PortalRoutes = [
    { path: 'home', loadChildren: '../project/home/home.module#HomeModule' }, // 首页
    /* 产品设计开发服务系统模块 */
    { path: 'product-design', loadChildren: '../project/pd/product-design/product-design.module#ProductDesignModule' }, // 产品设计开发服务
    { path: 'data-analysis', loadChildren: '../project/pd/data-analysis/data-analysis.module#DataAnalysisModule' }, // 大数据分析
    { path: 'data-analysis-details/:id', loadChildren: '../project/pd/data-analysis-details/data-analysis-details.module#DataAnalysisDetailsModule' }, // 大数据分析详情
    { path: 'design-database', loadChildren: '../project/pd/design-database/design-database.module#DesignDatabaseModule' }, // 产品设计资料库
    { path: 'designers-garden', loadChildren: '../project/pd/designers-garden/designers-garden.module#DesignersGardenModule' }, // 设计师园地
    { path: 'software-integration', loadChildren: '../project/pd/software-integration/software-integration.module#SoftwareIntegrationModule' }, // 设计软件集成
    /* 企业资源管理系统系统模块 */
    // { path: 'enterprise-resource', loadChildren: '../project/er/enterprise-resource/enterprise-resource.module#EnterpriseResourceModule' }, // 企业资源管理系统
    // { path: 'organization', loadChildren: '../project/er/organization/organization.module#OrganizationModule' }, // 组织管理
    // { path: 'sale', loadChildren: '../project/er/sale/sale.module#SaleModule' }, // 销售管理
    // { path: 'development', loadChildren: '../project/er/development/development.module#DevelopmentModule' }, // 开发管理
    // { path: 'production', loadChildren: '../project/er/production/production.module#ProductionModule' }, // 生产管理
    /* 校企合作服务系统模块 */
    { path: 's-e-cooperation', loadChildren: '../project/sec/s-e-cooperation/s-e-cooperation.module#SECooperationModule' }, // 校企合作服务
    { path: 'school-project', loadChildren: '../project/sec/school-project/school-project.module#SchoolProjectModule' }, // 学校项目
    { path: 'enterprise-needs', loadChildren: '../project/sec/enterprise-needs/enterprise-needs.module#EnterpriseNeedsModule' }, // 企业需求
    { path: 'se-resources', loadChildren: '../project/sec/se-resources/se-resources.module#SeResourcesModule' }, // 校企资源
    { path: 'enterprise-recruitment', loadChildren: '../project/sec/enterprise-recruitment/enterprise-recruitment.module#EnterpriseRecruitmentModule' }, // 企业招聘
    { path: 'interaction-forum', loadChildren: '../project/sec/interaction-forum/interaction-forum.module#InteractionForumModule' }, // 互动讲堂
    { path: 'se-news', loadChildren: '../project/sec/se-news/se-news.module#SeNewsModule' }, // 校企新闻
    { path: 'seek-expert', loadChildren: '../project/sec/seek-expert/seek-expert.module#SeekExpertModule' }, // 有困难找专家
    { path: 'file-download', loadChildren: '../project/sec/file-download/file-download.module#FileDownloadModule' }, // 文件下载
    /* 综合服务系统模块 */
    { path: 'integrated-services', loadChildren: '../project/is/integrated-services/integrated-services.module#IntegratedServicesModule' }, // 综合服务
    { path: 'exhibition', loadChildren: '../project/is/exhibition/exhibition.module#ExhibitionModule' }, // 展会服务
    { path: 'furniture-fair', loadChildren: '../project/is/furniture-fair/furniture-fair.module#FurnitureFairModule' }, // 家具展会详细
    { path: 'pre-registration', loadChildren: '../project/is/pre-registration/pre-registration.module#PreRegistrationModule' }, // 预登记详细
    { path: 'apply-exhibitors', loadChildren: '../project/is/apply-exhibitors/apply-exhibitors.module#ApplyExhibitorsModule' }, // 申请参展详细
    { path: 'government', loadChildren: '../project/is/government/government.module#GovernmentModule' }, // 政府服务
    { path: 'furniture-standard', loadChildren: '../project/is/furniture-standard/furniture-standard.module#FurnitureStandardModule' }, // 家具国家标准
    { path: 'patent-service', loadChildren: '../project/is/patent-service/patent-service.module#PatentServiceModule' }, // 专利服务
    { path: 'finance', loadChildren: '../project/is/finance/finance.module#FinanceModule' }, // 金融服务
    { path: 'finding-funds', loadChildren: '../project/is/finding-funds/finding-funds.module#FindingFundsModule' }, // 找资金
    { path: 'selected-items', loadChildren: '../project/is/selected-items/selected-items.module#SelectedItemsModule' }, // 选项目
    { path: 'offline-financing', loadChildren: '../project/is/offline-financing/offline-financing.module#OfflineFinancingModule' }, // 线下融资活动
    { path: 'fund-information', loadChildren: '../project/is/fund-information/fund-information.module#FundInformationModule' }, // 资金信息详细
    { path: 'project-information', loadChildren: '../project/is/project-information/project-information.module#ProjectInformationModule' }, // 项目信息详细
    { path: 'furniture-delivery', loadChildren: '../project/is/furniture-delivery/furniture-delivery.module#FurnitureDeliveryModule' }, // 家具送装
    { path: 'delivery-order', loadChildren: '../project/is/delivery-order/delivery-order.module#DeliveryOrderModule' }, // 送装下单
    { path: 'service-introduction', loadChildren: '../project/is/service-introduction/service-introduction.module#ServiceIntroductionModule' }, // 服务介绍
    { path: 'master-joined', loadChildren: '../project/is/master-joined/master-joined.module#MasterJoinedModule' }, // 师傅加入
    { path: 'merchant-opening', loadChildren: '../project/is/merchant-opening/merchant-opening.module#MerchantOpeningModule' }, // 商家开通
    /* 原辅材料机械设备服务系统模块 */
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
    /* 家具商城系统模块 */
    { path: 'furniture-mall', loadChildren: '../project/fm/furniture-mall/furniture-mall.module#FurnitureMallModule' }, // 家具商城
    { path: 'channel-channel', loadChildren: '../project/fm/channel-channel/channel-channel.module#ChannelChannelModule' }, // 众筹频道    
    { path: 'brand', loadChildren: '../project/fm/brand/brand.module#BrandModule' }, // 品牌
    { path: 'group-buying', loadChildren: '../project/fm/group-buying/group-buying.module#GroupBuyingModule' }, // 团购
    // { path: 'commodity', loadChildren: '../project/fm/commodity/commodity.module#CommodityModule' }, // 商品
    // { path: 'commodity-details', loadChildren: '../project/fm/commodity-details/commodity-details.module#CommodityDetailsModule' }, // 商品详细
    // { path: 'shop', loadChildren: '../project/fm/shop/shop.module#ShopModule' }, // 商家店铺
    // { path: 'shop-details', loadChildren: '../project/fm/shop-details/shop-details.module#ShopDetailsModule' }, // 商家店铺详细
    // { path: 'shop-merchandise', loadChildren: '../project/fm/shop-merchandise/shop-merchandise.module#ShopMerchandiseModule' }, // 商家店铺商品
    // { path: 'shopping-cart', loadChildren: '../project/fm/shopping-cart/shopping-cart.module#ShoppingCartModule' }, // 购物车
    // { path: 'statements', loadChildren: '../project/fm/statements/statements.module#StatementsModule' }, // 结算

    // 正在开发中
    { path: 'developing', loadChildren: './developing/developing.module#DevelopingModule' },

    // 路由重定向
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
