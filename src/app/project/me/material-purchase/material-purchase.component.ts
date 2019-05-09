import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataMaterialPurchaseHandler } from 'src/data/me/material-purchase';
import { Utils } from 'src/modules/utils/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { IdCounter } from 'src/modules/utils/id-counter';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { UtilsMe } from '../utils/banner-menu';

@Component({
  selector: 'app-material-purchase',
  templateUrl: './material-purchase.component.html',
  styleUrls: ['./material-purchase.component.scss']
})
export class MaterialPurchaseComponent implements OnInit {

  // 横幅图片
  CH_ME_MATERIAL_BANNER_SRC: any;

  // 横幅菜单
  CH_ME_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  listData: any[] = [];

  // 一页大小
  pageSize = 20;

  // 总数据
  total: number = 0;

  option1: any;
  option2: any;
  option3: any;
  minPrice: number;
  maxPrice: number;
  allQty: number;
  qty: number;
  searchValue: any;

  validateForm: FormGroup;

  constructor(private router: Router, private notification: NzNotificationService, private fb: FormBuilder) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_ME_MATERIAL_BANNER_SRC = ConstantHandler.CH_ME_MATERIAL_BANNER_SRC;
    this.CH_ME_BANNER_MENU = ConstantHandler.CH_ME_BANNER_MENU;
    this.dataHandler = DataMaterialPurchaseHandler;
    this.total = this.dataHandler.LIST_DATA.length;
    this.handleListData(this.dataHandler.LIST_DATA);

    this.validateForm = this.fb.group({
      PinMing: [null, [Validators.required]],
      GuiGe: [null, [Validators.required]],
      ChanDi: [null, [Validators.required]],
      JiaGe: [null, [Validators.required]],
      SuoZaiDi: [null, [Validators.required]],
      JieZhiRiQi: [null],
      ShuoMing: [null]
    });
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsMe.clickBannerMenu(this.portalNav, menu);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.listData.unshift({
      id: IdCounter.newId(),
      PinMing: this.validateForm.get('PinMing').value,
      GuiGe: this.validateForm.get('GuiGe').value,
      ChanDi: this.validateForm.get('ChanDi').value,
      JiaGe: this.validateForm.get('JiaGe').value,
      SuoZaiDi: this.validateForm.get('SuoZaiDi').value,
      JieZhiRiQi: this.validateForm.get('JieZhiRiQi').value,
      ShuoMing: this.validateForm.get('ShuoMing').value,
      LianXiRen: '***',
      ShouJi: '***'
    });
    this.total = this.total + 1;
    this.notification.create(
      'success',
      '提示',
      '发出求购成功！',
    );
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
   * 点击分类
   * @param event 
   */
  onClickType(event: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 点击按钮进行排序
   * @param event 
   */
  onClickButtonSortChange(event: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 价格输入框失去焦点
   */
  onBlurPriceChange() {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 所在地下拉框
   * @param option 
   */
  onSelectOption(option: any) {
    if (this.dataHandler.LIST_DATA && option != null) {
      const regExp = new RegExp(Utils.escapeRegexp(option), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.location) {
          let text = '' + row.location;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListData(listData);
    } else {
      this.handleListData(this.dataHandler.LIST_DATA);
    }
  }

  /**
   * 产地下拉框
   * @param option 
   */
  onSelectOption2(option: any) {
    if (this.dataHandler.LIST_DATA && option != null) {
      const regExp = new RegExp(Utils.escapeRegexp(option), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.area) {
          let text = '' + row.area;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListData(listData);
    } else {
      this.handleListData(this.dataHandler.LIST_DATA);
    }
  }

  /**
   * 截止日期下拉框
   * @param option 
   */
  onSelectOption3(option: any) {
    if (this.dataHandler.LIST_DATA && option != null) {
      const regExp = new RegExp(Utils.escapeRegexp(option), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.date) {
          let text = '' + row.date;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListData(listData);
    } else {
      this.handleListData(this.dataHandler.LIST_DATA);
    }
  }

  // 搜索
  onSearch() {
    if (this.dataHandler.LIST_DATA && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.title) {
          let text = '' + row.title;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListData(listData);
    } else {
      this.handleListData(this.dataHandler.LIST_DATA);
    }
  }

  /**
   * 分页
   */
  onPageIndexChange() {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  /**
   * 收藏
   * @param id 
   */
  onCollection(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

}
