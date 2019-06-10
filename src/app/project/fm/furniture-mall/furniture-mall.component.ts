import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataFurnitureMallHandler } from 'src/data/fm/furniture-mall';
import { UtilsFm } from '../utils/utils-fm';

@Component({
  selector: 'app-furniture-mall',
  templateUrl: './furniture-mall.component.html',
  styleUrls: ['./furniture-mall.component.scss']
})
export class FurnitureMallComponent implements OnInit {

  // 横幅图片
  CH_FM_BANNER_SRC: any;

  // 横幅菜单
  CH_FM_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  maskLabelArray: any[] = [
    {
      title: "产品品类",
      key: 'ChanPinPinLei'
    },
    {
      title: "品牌",
      key: 'PinPai'
    },
    {
      title: "价格",
      key: 'JiaGe'
    }
  ];

  maskLabelArrayCC: any[] = [
    {
      title: "产品标题",
      key: 'ChanPinBiaoTi'
    },
    {
      title: "产品品类",
      key: 'ChanPinPinLei'
    },
    {
      title: "产品价格",
      key: 'ChanPinJiaGe'
    }
  ];

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_FM_BANNER_SRC = ConstantHandler.CH_FM_BANNER_SRC;
    this.CH_FM_BANNER_MENU = ConstantHandler.CH_FM_BANNER_MENU;
    this.dataHandler = DataFurnitureMallHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsFm.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 打开频道
   * @param item 
   */
  openType(item: any) {
    if (item.title == '团购频道') {
      this.portalNav.openGroupBuying();
    } else if (item.title == '众筹频道') {
      this.portalNav.openChannelChannel();
    } else if (item.title == '品牌频道') {
      this.portalNav.openBrand();
    } else if (item.title == '店铺频道') {
      this.portalNav.openShop();
    }
  }

}
