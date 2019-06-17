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

  selectDatArray: any[] = [
    {
      label: "实木家具",
      value: "实木家具"
    },
    {
      label: "板式家具",
      value: "板式家具"
    },
    {
      label: "定制家具",
      value: "定制家具"
    },
    {
      label: "古典红木",
      value: "古典红木"
    },
    {
      label: "办公家具",
      value: "办公家具"
    },
    {
      label: "户外家具",
      value: "户外家具"
    },
    {
      label: "金属家具",
      value: "金属家具"
    },
    {
      label: "塑料家具",
      value: "塑料家具"
    },
    {
      label: "软体家具",
      value: "软体家具"
    },
    {
      label: "床垫",
      value: "床垫"
    },
  ];

  selectedValue0 = "主营业务";
  selectedValue1 = "主营风格";
  selectedValue2 = "主营地区";
  selectedValue3 = "产品来源";

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
