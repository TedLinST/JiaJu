import { Component, OnInit } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { DataPreRegistrationHandler } from 'src/data/is/pre-registration';
import { UtilsIs } from '../utils/utils-is';
import { NzNotificationService, UploadFile } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pre-registration',
  templateUrl: './pre-registration.component.html',
  styleUrls: ['./pre-registration.component.scss']
})
export class PreRegistrationComponent implements OnInit {

  // 横幅图片
  CH_IS_BANNER_SRC: any;

  // 横幅菜单
  CH_IS_BANNER_MENU: KeyVerticalMenuEvent[];

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  activeItemNumber: number = 1;

  bean: any = {};

  cardUrl: any = "assets/imgs/pre-registration/mingpian.jpg";

  constructor(private router: Router, private notification: NzNotificationService) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_IS_BANNER_SRC = ConstantHandler.CH_IS_BANNER_SRC;
    this.CH_IS_BANNER_MENU = ConstantHandler.CH_IS_BANNER_MENU;
    this.dataHandler = DataPreRegistrationHandler;
  }

  /**
   * 点击横幅菜单
   * @param menu 
   */
  onClickBannerMenu(menu: KeyVerticalMenuEvent) {
    UtilsIs.clickBannerMenu(this.portalNav, menu);
  }

  /**
   * 下一步
   * @param activeItemNumber 
   */
  onNextStep(activeItemNumber: number, type?: boolean) {
    if (this.cardUrl == 'assets/imgs/pre-registration/mingpian.jpg' && type) {
      this.notification.create(
        'error',
        '提示',
        '请上传名片！',
      );
      return;
    }
    if (activeItemNumber == 3) {
      if (!!!this.bean.XingMing) {
        this.notification.create(
          'warning',
          '提示',
          '请输入姓名',
        );
        return;
      }
      if (!!!this.bean.ShouJiHaoMa) {
        this.notification.create(
          'warning',
          '提示',
          '请输入手机号码',
        );
        return;
      }
      if (!!!this.bean.GongSiMingCheng) {
        this.notification.create(
          'warning',
          '提示',
          '请输入公司名称',
        );
        return;
      }
      this.notification.create(
        'success',
        '提示',
        '提交成功！',
      );
    }
    this.activeItemNumber = activeItemNumber;
  }

  /**
   * 上一步
   * @param activeItemNumber 
   */
  onPreviousStep(activeItemNumber: number, type: boolean = false) {
    if (type) {
      this.bean = {};
    }
    this.activeItemNumber = activeItemNumber;
  }

  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp');
      if (!isJPG) {
        this.notification.create(
          'error',
          '提示',
          '只能上传图片文件！',
        );
        observer.complete();
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.notification.create(
          'warning',
          '提示',
          '图像必须小于2MB！',
        );
        observer.complete();
        return;
      }
      observer.next(isJPG && isLt2M);
      observer.complete();
    });
  };

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        break;
      case 'done':
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.cardUrl = img;
        });
        break;
      case 'error':
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.cardUrl = img;
        });
        /* this.notification.create(
          'error',
          '提示',
          '网络出错',
        );
        this.loading = false; */
        break;
    }
  }

  getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

}
