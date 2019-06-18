import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataBrandHandler } from 'src/data/fm/brand';
import { UtilsFm } from '../utils/utils-fm';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  // 横幅图片
  CH_FM_BANNER_SRC: any;

  // 横幅菜单
  CH_FM_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  currentIndexCRC: number = 0;

  selectDatArray0: any[] = [
    {
      label: "实木家具",
      value: "实木家具"
    },
    {
      label: "板式家具",
      value: "板式家具"
    },
    
  ];
  selectDatArray1: any[] = [
    {
      label: "现代中式",
      value: "现代中式"
    },
    {
      label: "新中式",
      value: "新中式"
    },
    
  ];
  selectDatArray2: any[] = [
    {
      label: "华南",
      value: "华南"
    },
    {
      label: "华东",
      value: "华东"
    },
    
  ];
  selectDatArray: any[] = [
    {
      label: "国产",
      value: "国产"
    },
    {
      label: "进口",
      value: "进口"
    },
    
  ];

  selectedValue0 = "实木家具";
  selectedValue1 = "现代中式";
  selectedValue2 = "华南";
  selectedValue3 = "国产";

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_FM_BANNER_SRC = ConstantHandler.CH_FM_BANNER_SRC;
    this.CH_FM_BANNER_MENU = ConstantHandler.CH_FM_BANNER_MENU;
    this.dataHandler = DataBrandHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsFm.clickBannerMenu(this.portalNav, menu);
  }

  onSelectChange0() {
    this.dataHandler.BR.data0 = Utils.arrayRandomSort(this.dataHandler.BR.data0)
  }

  onSelectChange1() {
    this.dataHandler.BR.data1 = Utils.arrayRandomSort(this.dataHandler.BR.data1)
  }

  onSelectChange2() {
    this.dataHandler.BR.data2 = Utils.arrayRandomSort(this.dataHandler.BR.data2)
  }

  onSelectChange3() {
    this.dataHandler.BR.data3 = Utils.arrayRandomSort(this.dataHandler.BR.data3)
  }
}
