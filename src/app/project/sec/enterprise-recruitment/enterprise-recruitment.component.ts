import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataEnterpriseRecruitmentHandler } from 'src/data/sec/enterprise-recruitment';
import { UtilsSec } from '../utils/utils-sec';
import { PROVINCE_LIST, CITY_LIST } from 'src/modules/utils/administrative-divisions';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-enterprise-recruitment',
  templateUrl: './enterprise-recruitment.component.html',
  styleUrls: ['./enterprise-recruitment.component.scss']
})
export class EnterpriseRecruitmentComponent implements OnInit {

  // 横幅图片
  CH_SEC_BANNER_SRC: any;

  // 横幅菜单
  CH_SEC_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  // 行政划分 - 省
  provinceList: any[] = PROVINCE_LIST;

  // 行政划分 - 市
  cityList: any = CITY_LIST;

  cityData: any[] = [];

  // 学位等级
  educationalLevel: any[] = [];

  currentIndexGA: number = 0;
  currentIndexEA: number = 0;
  currentIndexUA: number = 0;

  bean: any = {};
  searchData: any[] = [];

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_SEC_BANNER_SRC = ConstantHandler.CH_SEC_BANNER_SRC;
    this.CH_SEC_BANNER_MENU = ConstantHandler.CH_SEC_BANNER_MENU;
    this.educationalLevel = ConstantHandler.CH_EDUCATIONAL_LEVEL;
    this.dataHandler = DataEnterpriseRecruitmentHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsSec.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 工作地点 - 省
   * @param value 
   */
  onSelectGongZuoDiDian1(value: any) {
    if (!!value) {
      this.cityData = this.cityList[value];
      this.bean.GongZuoDiDian2 = null;
    }
  }

  submitForm() {
    let data = this.dataHandler.UA.data0.concat(this.dataHandler.UA.data1);
    if (data != null && data.length > 0) {
      let filters: any = {};
      if (this.bean.XueLi) {
        filters.XueWei = this.bean.XueLi;
      }
      if (this.bean.GongZuoDiDian2) {
        filters.DiDian = this.bean.GongZuoDiDian2;
      }
      if (this.bean.GongZuoJingYan) {
        filters.JingYan = this.bean.GongZuoJingYan;
      }
      if (this.bean.QiYeGuiMo) {
        filters.GongSiGuiMo = this.bean.QiYeGuiMo;
      }
      // 待整理
      let XinShui = [];
      if (this.bean.XinZiFanWei1) {
        XinShui.push(this.bean.XinZiFanWei1 + 'K');
      }
      if (this.bean.XinZiFanWei2) {
        XinShui.push(this.bean.XinZiFanWei2 + 'K');
      }
      if (this.bean.XinZiFanWei1 != null && this.bean.XinZiFanWei2 != null && this.bean.XinZiFanWei2 > this.bean.XinZiFanWei1) {
        for (let i = this.bean.XinZiFanWei1; i <= this.bean.XinZiFanWei2; i++) {
          XinShui.push(this.bean.XinZiFanWei1 + 'K-' + i + 'K');
          XinShui.push(i + 'K');
        }
      }
      if (XinShui != null && XinShui.length > 0) {
        filters.XinShui = XinShui;
      }
      this.searchData = Utils.dataFilter(data, filters);
    }
  }

  /**
   * 研究生应聘详情
   * @param id 
   */
  openGADetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 本专科生应聘详情
   * @param id 
   */
  openUADetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 专家应聘
   * @param id 
   */
  openEADetails(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

}
