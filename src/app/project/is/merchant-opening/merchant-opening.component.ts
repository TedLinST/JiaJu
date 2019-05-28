import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataMerchantOpeningHandler } from 'src/data/is/merchant-opening';
import { UtilsIs } from '../utils/utils-is';
import { PROVINCE_LIST, CITY_LIST, DISTRICT_LIST } from 'src/modules/utils/administrative-divisions';

@Component({
  selector: 'app-merchant-opening',
  templateUrl: './merchant-opening.component.html',
  styleUrls: ['./merchant-opening.component.scss']
})
export class MerchantOpeningComponent implements OnInit {

  // 横幅图片
  CH_IS_BANNER_SRC: any;

  // 横幅菜单
  CH_IS_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  bean: any = {};

  checkOptions_FuWuLeiXing = [
    { label: '干线物流', value: '干线物流', checked: true },
    { label: '支线物流配送', value: '支线物流配送' },
    { label: '搬运', value: '搬运' },
    { label: '安装', value: '安装' },
    { label: '售后服务', value: '售后服务' },
    { label: '仓储', value: '仓储' }
  ];

  // 行政划分 - 省
  provinceList: any[] = PROVINCE_LIST;

  // 行政划分 - 市
  cityList: any = CITY_LIST;

  // 行政划分 - 区
  districtList: any = DISTRICT_LIST;

  cityData: any[] = [];

  districtData: any[] = [];

  constructor(private router: Router, private notification: NzNotificationService) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_2_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataMerchantOpeningHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
  }

  submitForm() {
    if (!!!this.bean.PinPaiMingCheng) {
      this.notification.create(
        'warning',
        '提示',
        '请输入品牌名称',
      );
      return;
    }
    if (!!!this.bean.MenDianDiZhi) {
      this.notification.create(
        'warning',
        '提示',
        '请输入门店地址',
      );
      return;
    }
    if (!!!this.bean.LianXiRen) {
      this.notification.create(
        'warning',
        '提示',
        '请输入联系人',
      );
      return;
    }
    if (!!!this.bean.LianXiDianHua) {
      this.notification.create(
        'warning',
        '提示',
        '请输入联系电话',
      );
      return;
    }
    this.notification.create(
      'success',
      '提示',
      '提交商家开通申请表单成功！',
    );
    this.bean = {};
  }

  /**
   * 省
   * @param value 
   */
  onSelectProvince(value: any) {
    if (!!value) {
      this.cityData = this.cityList[value];
      this.bean.FuWuDiQu2 = null;
      this.bean.FuWuDiQu3 = null;
    }
  }

  /**
   * 市
   * @param value 
   */
  onSelectCity(value: any) {
    if (!!value) {
      this.districtData = this.districtList[value];
      this.bean.FuWuDiQu3 = null;
    }
  }

}
