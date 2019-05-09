import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentPurchaseComponent } from './equipment-purchase.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: EquipmentPurchaseComponent,
      }
    ]),
    NgZorroAntdModule,
    MeBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    EquipmentPurchaseComponent
  ]
})
export class EquipmentPurchaseModule { }
