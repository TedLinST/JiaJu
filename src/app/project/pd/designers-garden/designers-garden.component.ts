import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataDesignersGardenHandler } from 'src/data/designers-garden';
import { KeyCarouselLabelEvent } from 'src/modules/key/carousel/carousel-label.event';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-designers-garden',
  templateUrl: './designers-garden.component.html',
  styleUrls: ['./designers-garden.component.scss']
})
export class DesignersGardenComponent implements OnInit {

  // 横幅图片
  CH_PD_BANNER_SRC: any;

  // 横幅菜单
  CH_PD_BANNER_MENU: KeyVerticalMenuEvent[];

  // 产品设计资料库数据助手
  dataHandler: any;

  // 门户导航
  portalNav: any;

  option1: any = false;
  option2: any = true;
  option3: any = '擅长风格 1';
  option4: any = '';
  option5: any = '';
  option6: any = '';

  labelArray: KeyCarouselLabelEvent[] = [
    {
      key: 'title',
    },
    {
      label: '工作年龄',
      key: 'number',
    },
    {
      label: '头衔',
      key: 'rank',
    }
  ];

  pageSize = 4;

  total = 0;

  listData: any[] = [];

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_PD_BANNER_SRC = ConstantHandler.CH_PD_BANNER_SRC;
    this.CH_PD_BANNER_MENU = ConstantHandler.CH_PD_BANNER_MENU;
    this.dataHandler = DataDesignersGardenHandler;
    this.total = this.dataHandler.DL.data.length;
    this.handleListData(this.dataHandler.DL.data);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    if (!!menu) {
      if (menu.id == '1') {
        // 大数据分析
        this.portalNav.openDataAnalysis();
      } else if (menu.id == '2') {
        // 产品设计资料库
        this.portalNav.openDesignDatabase();
      } else if (menu.id == '3') {
        // 设计师园地
        this.portalNav.openDesignersGarden();
      } else if (menu.id == '4') {
        // 设计软件集成
        this.portalNav.openSoftwareIntegration();
      }
    }
  }

  /**
   * 打开优秀设计师详情页
   * @param id 
   */
  openDesignersGardenDetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

  /**
   * 处理列表数据
   */
  handleListData(listData: any[]) {
    if (listData != null && listData.length > 0) {
      let listDataTemp = Utils.arrayRandomSort(listData);
      this.listData = [];
      let len = listData.length > this.pageSize ? this.pageSize : listData.length;
      for (let i = 0; i < len; i++) {
        this.listData.push(listDataTemp[i]);
      }
    } else {
      this.listData = [];
    }
  }

  /**
   * 分页
   */
  onPageIndexChange() {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 设置下拉框选项
   */
  onSelectOption(key: any, value: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 联系设计师
   * @param id 
   */
  onTel(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 发起合作
   * @param id 
   */
  onCooperate(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 家具论坛 - 更多
   */
  onClickMoreFF() {
    this.navigateDeveloping();
  }

  /**
   * 家具论坛详情
   */
  openFFDetails() {
    this.navigateDeveloping();
  }

}
