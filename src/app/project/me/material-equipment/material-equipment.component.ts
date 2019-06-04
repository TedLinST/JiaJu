import { Component, OnInit } from '@angular/core';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { DataMaterialEquipmentHandler } from 'src/data/me/material-equipment';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-material-equipment',
  templateUrl: './material-equipment.component.html',
  styleUrls: ['./material-equipment.component.scss']
})
export class MaterialEquipmentComponent implements OnInit {

  // 横幅图片
  CH_ME_MIN_MATERIAL_BANNER_SRC: any;

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  constructor(private router: Router, private notification: NzNotificationService) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_ME_MIN_MATERIAL_BANNER_SRC = ConstantHandler.CH_ME_MIN_MATERIAL_BANNER_SRC;
    this.dataHandler = DataMaterialEquipmentHandler;
  }

  /**
   * 导航到正在开发中页面
   */
  navigateDeveloping() {
    this.router.navigateByUrl('developing');
  }

  /**
   * 原辅材料商城详情
   * @param id 
   */
  openMaterialMartDetails(id: any) {
    console.log("原辅材料商城详情");
    // this.navigateDeveloping();
  }

  /**
   * 原辅材料团购详情
   * @param id 
   */
  openmMaterialShoppingDetails(id: any) {
    console.log("原辅材料团购详情");
    // this.navigateDeveloping();
  }

  /**
   * 原辅材料求购详情
   * @param id 
   */
  openMaterialPurchaseDetails(id: any) {
    console.log("原辅材料求购详情");
    // this.navigateDeveloping();
  }

  /**
   * 原辅材料供应商详情
   * @param id 
   */
  openMaterialSupplierDetails(id: any) {
    console.log("原辅材料供应商详情");
    // this.navigateDeveloping();
  }

  /**
   * 木材拍卖行详情
   * @param id 
   */
  openTimberAuctionDetails(id: any) {
    console.log("木材拍卖行详情");
    // this.navigateDeveloping();
  }

  /**
   * 机械设备商城详情
   * @param id 
   */
  openEquipmentMartDetails(id: any) {
    console.log("机械设备商城详情");
    // this.navigateDeveloping();
  }

  /**
   * 机械设备供应商
   * @param id 
   */
  openEquipmentSupplierDetails(id: any) {
    console.log("机械设备供应商");
    // this.navigateDeveloping();
  }

  /**
   * 加购
   * @param id 
   */
  onPurchase(id: any) {
    this.navigateDeveloping();
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
   * 联系方式
   * @param id 
   */
  onTel(id: any) {
    this.navigateDeveloping();
  }

}
