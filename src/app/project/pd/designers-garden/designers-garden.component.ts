import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataDesignersGardenHandler } from 'src/data/pd/designers-garden';
import { KeyCarouselLabelEvent } from 'src/modules/key/carousel/carousel-label.event';
import { Utils } from 'src/modules/utils/utils';
import { UtilsPd } from '../utils/utils-pd';

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

  // 一页大小
  pageSize = 4;

  // 总数据
  total = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  // 搜索文本
  searchValue: any;

  listData: any[] = [];

  // 按钮排序激活
  btnSortActiveMap: any = {
    experience: 0,
    score: 0
  };

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_PD_BANNER_SRC = ConstantHandler.CH_PD_BANNER_SRC;
    this.CH_PD_BANNER_MENU = ConstantHandler.CH_PD_BANNER_MENU;
    this.dataHandler = DataDesignersGardenHandler;
    this.total = this.dataHandler.DL.data.length;
    this.handleListDataPagination(this.dataHandler.DL.data, this.activePagaIndex);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsPd.clickBannerMenu(this.portalNav, menu);
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
    this.handleListDataPagination(this.dataHandler.DL.data, this.activePagaIndex);
  }

  /**
   * 点击按钮进行排序
   * @param event 
   */
  onClickButtonSortChange(event: any, id: any) {
    this.btnSortActiveMap = {
      experience: 0,
      score: 0
    };
    this.btnSortActiveMap[id] = event;
    this.listData = Utils.arrayKeySort(this.dataHandler.DL.data, id, event);
    this.onSearch();
  }

  // 搜索
  onSearch() {
    this.activePagaIndex = 1;
    if (this.dataHandler.DL.data && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.dataHandler.DL.data.filter((row: any) => {
        if (row.name) {
          let text = '' + row.name;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.style) {
          let text = '' + row.style;
          if (text.match(regExp)) {
            return true;
          }
        }
        if (row.place) {
          let text = '' + row.place;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListDataPagination(listData, this.activePagaIndex);
    } else {
      this.handleListDataPagination(this.dataHandler.DL.data, this.activePagaIndex);
    }
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
