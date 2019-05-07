import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentMartComponent } from './equipment-mart.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerModule } from '../resource/banner.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: EquipmentMartComponent,
      }
    ]),
    NgZorroAntdModule,
    MeBannerModule,
    NgKeyModule
  ],
  declarations: [
    EquipmentMartComponent
  ]
})
export class EquipmentMartModule { }
