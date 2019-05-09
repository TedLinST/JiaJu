import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialEquipmentComponent } from './material-equipment.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgKeyModule } from 'src/modules/key/key.module';
import { MeBannerMenuModule } from '../resource/banner-menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MaterialEquipmentComponent,
      }
    ]),
    NgZorroAntdModule,
    MeBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    MaterialEquipmentComponent
  ]
})
export class MaterialEquipmentModule { }
