import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataDeliveryOrderHandler } from 'src/data/is/delivery-order';
import { UtilsIs } from '../utils/utils-is';
import { PROVINCE_LIST, CITY_LIST, DISTRICT_LIST } from 'src/modules/utils/administrative-divisions';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.scss']
})
export class DeliveryOrderComponent implements OnInit {

  // 横幅图片
  CH_IS_BANNER_SRC: any;

  // 横幅菜单
  CH_IS_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  bean: any = {};

  // 行政划分 - 省
  provinceList: any[] = PROVINCE_LIST;

  // 行政划分 - 市
  cityList: any = CITY_LIST;

  // 行政划分 - 区
  districtList: any = DISTRICT_LIST;

  cityData1: any[] = [];

  districtData1: any[] = [];

  cityData2: any[] = [];

  districtData2: any[] = [];

  listData: any[] = [
    {
      ChanPinLeiXing: '',
      ChanPinMingCheng: '',
      ShuLiang: '',
      TiJi: '',
      ZhongLiang: '',
      CaiZhi: '',
      BeiZhu: ''
    },
    {
      ChanPinLeiXing: '',
      ChanPinMingCheng: '',
      ShuLiang: '',
      TiJi: '',
      ZhongLiang: '',
      CaiZhi: '',
      BeiZhu: ''
    },
    {
      ChanPinLeiXing: '',
      ChanPinMingCheng: '',
      ShuLiang: '',
      TiJi: '',
      ZhongLiang: '',
      CaiZhi: '',
      BeiZhu: ''
    },
  ];

  activeItem: any;

  constructor(private router: Router, private notification: NzNotificationService) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_2_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataDeliveryOrderHandler;

    this.activeItem = this.listData[0];
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 省
   * @param value 
   * @param type 
   */
  onSelectProvince(value: any, type: any) {
    if (!!value) {
      if (type == 1) {
        this.cityData1 = this.cityList[value];
        this.bean.JiJianDiZhi2 = null;
        this.bean.JiJianDiZhi3 = null;
      } else if (type == 2) {
        this.cityData2 = this.cityList[value];
        this.bean.ShouJianDiZhi2 = null;
        this.bean.ShouJianDiZhi3 = null;
      }
    }
  }

  /**
   * 市
   * @param value 
   * @param type 
   */
  onSelectCity(value: any, type: any) {
    if (!!value) {
      if (type == 1) {
        this.districtData1 = this.districtList[value];
        this.bean.JiJianDiZhi3 = null;
      } else if (type == 2) {
        this.districtData2 = this.districtList[value];
        this.bean.ShouJianDiZhi3 = null;
      }
    }
  }

  submitForm() {
    if (!!!this.bean.FaHuoRen) {
      this.notification.create(
        'warning',
        '提示',
        '请输入发货人',
      );
      return;
    }
    if (!!!this.bean.FaHuoRenDianHua) {
      this.notification.create(
        'warning',
        '提示',
        '请输入发货人联系电话',
      );
      return;
    }
    if (!!!this.bean.ShouHuoRen) {
      this.notification.create(
        'warning',
        '提示',
        '请输入收货人',
      );
      return;
    }
    if (!!!this.bean.ShouHuoRenDianHua) {
      this.notification.create(
        'warning',
        '提示',
        '请输入收货人联系电话',
      );
      return;
    }
    this.notification.create(
      'success',
      '提示',
      '提交成功！',
    );
    this.bean = {};
  }

  /**
   * 添加列表数据
   */
  onAdd() {
    if (!!!this.listData) {
      this.listData = [];
    }
    this.listData.push({
      ChanPinLeiXing: '',
      ChanPinMingCheng: '',
      ShuLiang: '',
      TiJi: '',
      ZhongLiang: '',
      CaiZhi: '',
      BeiZhu: ''
    });
  }

  /**
   * 删除列表数据
   */
  onDelete() {
    Utils.arrayRemove(this.listData, this.activeItem);
    this.activeItem = null;
  }

}
