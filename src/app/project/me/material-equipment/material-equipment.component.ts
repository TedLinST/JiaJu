import { Component, OnInit } from '@angular/core';
import { ConstantHandler } from 'src/modules/utils/constant-handler';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { DataMaterialEquipmentHandler } from 'src/data/me/material-equipment';

@Component({
  selector: 'app-material-equipment',
  templateUrl: './material-equipment.component.html',
  styleUrls: ['./material-equipment.component.scss']
})
export class MaterialEquipmentComponent implements OnInit {

  // 横幅图片
  CH_ME_MIN_BANNER_SRC: any;

  // 门户导航
  portalNav: any;

  // 数据助手
  dataHandler: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.CH_ME_MIN_BANNER_SRC = ConstantHandler.CH_ME_MIN_BANNER_SRC;
    this.dataHandler = DataMaterialEquipmentHandler;
  }

}
