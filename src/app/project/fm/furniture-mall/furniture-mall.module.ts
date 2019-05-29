import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureMallComponent } from './furniture-mall.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FmBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: FurnitureMallComponent,
      }
    ]),
    NgZorroAntdModule,
    FmBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    FurnitureMallComponent
  ]
})
export class FurnitureMallModule { }
