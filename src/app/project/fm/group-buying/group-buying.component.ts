import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataGroupBuyingHandler } from 'src/data/fm/group-buying';
import { UtilsFm } from '../utils/utils-fm';
import { Utils } from 'src/modules/utils/utils';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-group-buying',
  templateUrl: './group-buying.component.html',
  styleUrls: ['./group-buying.component.scss']
})
export class GroupBuyingComponent implements OnInit {

  // 横幅图片
  CH_FM_BANNER_SRC: any;

  // 横幅菜单
  CH_FM_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  // 列表数据
  listData: any[] = [];

  // 一页大小
  pageSize = 9;

  // 总数据
  total: number = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  // 搜索文本
  searchValue: any;

  // 按钮排序激活
  btnSortActiveMap: any = {
    JiaGe: 0,
    YiBaoMingShuLiang: 0,
    ZongShuLiang: 0
  };


  constructor(private router: Router, private notification: NzNotificationService) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_FM_BANNER_SRC = ConstantHandler.CH_FM_BANNER_SRC;
    this.CH_FM_BANNER_MENU = ConstantHandler.CH_FM_BANNER_MENU;
    this.dataHandler = DataGroupBuyingHandler;
    this.total = this.dataHandler.LIST_DATA.length;
    this.handleListDataPagination(this.dataHandler.LIST_DATA, this.activePagaIndex);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsFm.clickBannerMenu(this.portalNav, menu);
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

  /**
  * 点击按钮进行排序
  * @param event 
  */
  onClickButtonSortChange(event: any, id: any) {
    this.btnSortActiveMap = {
      JiaGe: 0,
      YiBaoMingShuLiang: 0,
      ZongShuLiang: 0
    };
    this.btnSortActiveMap[id] = event;
    this.listData = Utils.arrayKeySort(this.dataHandler.LIST_DATA, id, event, true);
    this.onSearch();
  }

  // 搜索
  onSearch() {
    this.activePagaIndex = 1
    if (this.dataHandler.LIST_DATA && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.dataHandler.LIST_DATA.filter((row: any) => {
        if (row.ChanPinBiaoTi) {
          let text = '' + row.ChanPinBiaoTi;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.PinPai) {
          let text = '' + row.PinPai;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.DianPu) {
          let text = '' + row.DianPu;
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
   * 加购
   * @param id 
   */
  onAddPurchase(id: any) {
    this.navigateDeveloping();
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }
}
