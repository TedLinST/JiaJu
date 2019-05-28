import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataMasterJoinedHandler } from 'src/data/is/master-joined';
import { UtilsIs } from '../utils/utils-is';
import { NzNotificationService } from 'ng-zorro-antd';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-master-joined',
  templateUrl: './master-joined.component.html',
  styleUrls: ['./master-joined.component.scss']
})
export class MasterJoinedComponent implements OnInit {

  // 横幅图片
  CH_IS_BANNER_SRC: any;

  // 横幅菜单
  CH_IS_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  bean: any = {};

  constructor(private router: Router, private notification: NzNotificationService) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_2_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataMasterJoinedHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
  }

  submitForm() {
    if (!!!this.bean.XingMing) {
      this.notification.create(
        'warning',
        '提示',
        '请输入姓名',
      );
      return;
    }
    if (!!!this.bean.DianHua) {
      this.notification.create(
        'warning',
        '提示',
        '请输入电话',
      );
      return;
    }
    this.notification.create(
      'success',
      '提示',
      '提交申请单成功！',
    );
    this.bean = {};
  }

}
