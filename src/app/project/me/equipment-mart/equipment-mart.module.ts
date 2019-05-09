import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentMartComponent } from './equipment-mart.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerMenuModule } from '../resource/banner-menu.module';
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
    MeBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    EquipmentMartComponent
  ]
})
export class EquipmentMartModule { }
