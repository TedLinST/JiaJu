import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialEquipmentComponent } from './material-equipment.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgKeyModule } from 'src/modules/key/key.module';
import { MeBannerModule } from '../resource/banner.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MaterialEquipmentComponent,
      }
    ]),
    NgZorroAntdModule,
    MeBannerModule,
    NgKeyModule
  ],
  declarations: [
    MaterialEquipmentComponent
  ]
})
export class MaterialEquipmentModule { }
