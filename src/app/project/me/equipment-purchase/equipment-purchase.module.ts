import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentPurchaseComponent } from './equipment-purchase.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerModule } from '../resource/banner.module';
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
    MeBannerModule,
    NgKeyModule
  ],
  declarations: [
    EquipmentPurchaseComponent
  ]
})
export class EquipmentPurchaseModule { }
