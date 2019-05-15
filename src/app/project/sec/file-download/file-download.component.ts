import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataFileDownloadHandler } from 'src/data/sec/file-download';
import { UtilsSec } from '../utils/utils-sec';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss']
})
export class FileDownloadComponent implements OnInit {

  // 横幅图片
  CH_SEC_BANNER_SRC: any;

  // 横幅菜单
  CH_SEC_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  allListData: any[] = [];

  listData: any[] = [];

  // 一页大小
  pageSize = 16;

  // 总数据
  total: number = 0;

  // 当前页下标
  activePagaIndex: number = 1;

  // 搜索文本
  searchValue: any;

  currentIndexFD: number = 0;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_SEC_BANNER_SRC = ConstantHandler.CH_SEC_BANNER_SRC;
    this.CH_SEC_BANNER_MENU = ConstantHandler.CH_SEC_BANNER_MENU;
    this.dataHandler = DataFileDownloadHandler;
    this.getTypeData(0);
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsSec.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 获取分类数据
   */
  getTypeData(type: number) {
    let data: any[] = [];
    if (type == 0) {
      let len = this.dataHandler.FD.menuData.length - 1;
      for (let i = 0; i < len; i++) {
        data = data.concat(this.dataHandler.FD['data' + i]);
      }
      this.allListData = data;
    } else {
      data = this.dataHandler.FD['data' + (type - 1)]
    }
    this.total = data.length;
    this.handleListDataPagination(data, this.activePagaIndex);
  }

  // 搜索
  onSearch() {
    if (this.allListData && this.searchValue != null) {
      const regExp = new RegExp(Utils.escapeRegexp(this.searchValue), 'ig');
      let listData = this.allListData.filter((row: any) => {
        if (row.WenDangMingCheng) {
          let text = '' + row.WenDangMingCheng;
          if (text.match(regExp)) {
            return true;
          }
        }
      });
      this.handleListDataPagination(listData, this.activePagaIndex);
    } else {
      this.handleListDataPagination(this.allListData, this.activePagaIndex);
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
    this.getTypeData(this.currentIndexFD);
  }

  /**
   * 菜单切换
   */
  switchIndexChange(event: any) {
    this.currentIndexFD = event;
    this.getTypeData(event);
  }

  /**
   * 下载文件
   * @param id 
   */
  onDownloadFile(id: any, url: any) {
    // window.open(url); // 新窗口下载
    //获取文件名，不带后缀
    let fileName = url.replace(/(.*\/)*([^.]+).*/ig, "$2");
    //获取文件后缀
    let FileExt = url.replace(/.+\./, "");
    // 创建隐藏的可下载链接
    let eleLink = document.createElement('a');
    eleLink.download = fileName + '.' + FileExt;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    /* let blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob); */
    eleLink.href = url;
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  }
}
