import { Component, OnInit, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DataHomeHandler } from '../../../data/home';
import { KeyCarouselLabelEvent } from 'src/modules/key/carousel/carousel-label.event';
import { Utils } from 'src/modules/utils/utils';
import { PortalNavigation } from 'src/app/portal/portal.navigation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  // 首页数据助手
  dataHandler: any;

  // 企业资源管理系统当前下标
  currentIndexER = 0;

  // 产品设计开发服务当前下标
  currentIndexPD = 0;

  // 校企合作服务当前下标
  currentIndexSEC = 0;

  // 综合服务当前下标
  currentIndexIS = 0;

  // 原辅材料机械设备服务当前下标
  currentIndexME = 0;

  // 家具商城当前下标
  currentIndexFM = 0;

  // 展会服务下拉框值
  selectValueIS2: any;

  iSdata2: any[] = [];

  labelArrayPD2: KeyCarouselLabelEvent[] = [
    {
      key: 'title',
    },
    {
      // label: '头衔',
      key: 'rank',
    }
  ];

  labelArraySEC3: KeyCarouselLabelEvent[] = [
    { key: 'title' },
    { key: 'text' }
  ];

  FMdata3: any[] = [];

  searchValueFM3: any;

  // 门户导航
  portalNav: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.dataHandler = DataHomeHandler;
    this.iSdata2 = this.dataHandler.IS.data2;
    this.FMdata3 = this.dataHandler.FM.data3;
  }

  ngAfterContentInit() {
  }

  switchER(index: number) {
    this.currentIndexER = this.currentIndexER + index;
    if (this.currentIndexER < 0) {
      this.currentIndexER = 3;
    }
    if (this.currentIndexER > 3) {
      this.currentIndexER = 0;
    }
  }

  /**
   * 打开产品设计资料库详情页
   * @param id 
   */
  openDesignDatabaseDetails(id: any) {
    this.router.navigateByUrl('design-database');
  }

  /**
   * 打开设计师园地详情页
   * @param id 
   */
  openDesignersGardenDetails(id: any) {
    console.log("打开设计师园地详情页");
    // this.navigateDeveloping();
  }

  /**
   * 打开设计软件集成详情页
   * @param id 
   */
  openSoftwareIntegrationDetails(id: any) {
    console.log("打开设计软件集成详情页");
    // this.navigateDeveloping();
  }

  /**
   * 打开学校项目详情页
   * @param id 
   */
  openSchoolProjectDetails(id: any) {
    console.log("打开学校项目详情页");
    // this.navigateDeveloping();
  }

  /**
   * 打开企业需求详情页
   * @param id 
   */
  openEnterpriseNeedsDetails(id: any) {
    console.log("打开企业需求详情页");
    // this.navigateDeveloping();
  }

  /**
   * 有困难找专家详情页
   * @param id 
   */
  openSeekExpertDetails(id: any) {
    console.log("有困难找专家详情页");
    // this.navigateDeveloping();
  }

  /**
   * 展会服务详情页
   * @param id 
   */
  openExhibitionDetails(id: any) {
    console.log("展会服务详情页");
    // this.navigateDeveloping();
  }

  /**
   * 政府服务详情页
   * @param id 
   */
  openGovernmentDetails(id: any) {
    console.log("政府服务详情页");
    // this.navigateDeveloping();
  }

  /**
   * 金融服务详情页
   * @param id 
   */
  openFinanceDetails(id: any) {
    console.log("金融服务详情页");
    // this.navigateDeveloping();
  }

  /**
   * 物流售后服务页
   * @param id 
   */
  openLogistics(id: any) {
    console.log("物流售后服务页");
    // this.navigateDeveloping();
  }

  /**
   * 木材团购详情页
   * @param id 
   */
  openWoodShoppingDetails(id: any) {
    console.log("木材团购详情页");
    // this.navigateDeveloping();
  }

  /**
   * 机械设备页
   * @param id 
   */
  openMechanicsEquipmentDetails(id: any) {
    console.log("机械设备页");
    // this.navigateDeveloping();
  }

  /**
   * 品牌详情页
   * @param id 
   */
  openBrandDetails(id: any) {
    console.log("品牌详情页");
    // this.navigateDeveloping();
  }

  /**
   * 众筹频道详情页
   * @param id 
   */
  openChannelChannelDetails(id: any) {
    console.log("众筹频道详情页");
    // this.navigateDeveloping();
  }

  /**
   * 快速入口
   * @param id 
   */
  openQuickAccess(id: any) {
    if (id == 1) {
      // 产品设计开发服务 - 大数据分析
      this.portalNav.openDataAnalysis();
    } else if (id == 4) {
      // 校企合作服务 - 有困难找专家
      this.portalNav.openSeekExpert();
    } else if (id == 5) {
      // 综合服务 - 展会服务
      this.portalNav.openExhibition();
    } else if (id == 6) {
      // 原辅材料机械设备服务 - 原辅材料商城
      this.portalNav.openMaterialMart();
    } else if (id == 7) {
      // 原辅材料机械设备服务 - 机械设备供应商
      this.portalNav.openEquipmentSupplier();
    } else {
      this.navigateDeveloping();
    }
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

  /**
   * 展会下拉框选择项目
   */
  onSelectIS2() {
    // 数组随机
    this.iSdata2 = Utils.arrayRandomSort(this.dataHandler.IS.data2);
  }

  // 搜索众筹频道项目
  onSearchFM3() {
    if (this.dataHandler.FM.data3 && this.searchValueFM3 != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValueFM3), 'ig');
      this.FMdata3 = this.dataHandler.FM.data3.filter((row: any) => {
        if (row.title) {
          let text = '' + row.title;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
    } else {
      this.FMdata3 = this.dataHandler.FM.data3;
    }
  }

  onPlay(item: any) {
    // console.log("开始播放");
    item.state = false;
  }

  onEnded(item: any) {
    // console.log("播放结束");
    item.state = true;
  }

  onClickChange(item: any) {
    item.state = false;
    let media: any = document.getElementById(item.src);
    if(media){
      media.play();
    }
    
  }

}
