import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataFundInformationHandler } from 'src/data/is/fund-information';
import { UtilsIs } from '../utils/utils-is';
import { Utils } from 'src/modules/utils/utils';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-fund-information',
  templateUrl: './fund-information.component.html',
  styleUrls: ['./fund-information.component.scss']
})
export class FundInformationComponent implements OnInit {

  // 横幅图片
  CH_IS_BANNER_SRC: any;

  // 横幅菜单
  CH_IS_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  infoParams: any;

  // 列表数据
  listData: any[] = [];

  // 一页大小
  pageSize = 8;

  // 总数据
  total: number = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  bean: any = {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private notification: NzNotificationService) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataFundInformationHandler;
    this.total = this.dataHandler.data.length;
    this.handleListDataPagination(this.dataHandler.data, this.activePagaIndex);

    // 获取参数
    let itemInfo = this.getUrlParams('itemInfo');
    if (!!itemInfo) {
      this.infoParams = JSON.parse(itemInfo);
      console.log('infoParams:' + this.infoParams);
    }
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
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
    this.handleListDataPagination(this.dataHandler.data, this.activePagaIndex);
  }


  /**
   * 获取浏览器地址栏
   * @param paramsName 参数名称
   * @returns {any}
   */
  getUrlParams(paramsName: any) {
    let value: any;
    // 获取单个参数
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      value = queryParams[paramsName];
    });
    return value;
  }

  /**
   * 收藏项目
   */
  onInvestment(item: any) {
    item.ShouCangShu = item.ShouCangShu + 1;
    this.notification.create(
      'success',
      '提示',
      '收藏项目成功！',
    );
  }

  submitForm() {
    if (!!!this.bean.YiXiangZiJin) {
      this.notification.create(
        'warning',
        '提示',
        '请输入意向资金',
      );
      return;
    }
    if (!!!this.bean.LiuYanXinXi) {
      this.notification.create(
        'warning',
        '提示',
        '请输入留言信息',
      );
      return;
    }
    if (this.dataHandler.data != null && this.dataHandler.data.length > 0) {
      let item = Utils.clone(this.dataHandler.data[0]);
      item.YiXiangZiJin = this.bean.YiXiangZiJin;
      item.LiuYanXinXi = this.bean.LiuYanXinXi;
      this.listData.unshift(item);
      this.dataHandler.data.unshift(item);
      this.total = this.total + 1;
      this.notification.create(
        'success',
        '提示',
        '发布成功！',
      );
      this.bean = {};
    }

  }

}
