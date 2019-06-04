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
import { UtilsMe } from '../utils/utils-me';

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

  // 当前页下标
  activePagaIndex: number = 1;

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
    this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);

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
   * 处理列表数据分页
   * @param data 
   * @param pageIndex 
   */
  handleListDataPagination(data: any[], pageIndex: number) {
    this.listData = Utils.dataPagination(data, pageIndex, this.pageSize);
    this.total = data.length;
  }

  /**
   * 页码改变
   */
  onPageIndexChange(event: any) {
    this.activePagaIndex = event;
    this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);
  }

  /**
   * 点击分类
   * @param event 
   */
  onClickType(event: any) {
    this.listData = Utils.arrayRandomSort(this.listData);
  }

  // 搜索
  onSearch() {
    this.activePagaIndex = 1;
    if (this.dataHandler.LIST_DATA && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.PinMing) {
          let text = '' + row.PinMing;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.LeiXing) {
          let text = '' + row.LeiXing;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.ChanDi) {
          let text = '' + row.ChanDi;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListDataPagination(listData, this.activePagaIndex);
    } else {
      this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);
    }
  }

  /**
   * 收藏
   * @param id 
   */
  onCollection(id: any) {
    this.notification.create(
      'success',
      '提示',
      '收藏成功！',
    );
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

}
