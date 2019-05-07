import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentPurchaseComponent } from './equipment-purchase.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerModule } from '../resource/banner.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: EquipmentPurchaseComponent,
      }
    ]),
    NgZorroAntdModule,
    MeBannerModule,
    NgKeyModule
  ],
  declarations: [
    EquipmentPurchaseComponent
  ]
})
export class EquipmentPurchaseModule { }
