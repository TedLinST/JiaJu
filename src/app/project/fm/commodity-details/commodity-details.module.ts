import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommodityDetailsComponent } from './commodity-details.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FmBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CommodityDetailsComponent,
      }
    ]),
    NgZorroAntdModule,
    FmBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    CommodityDetailsComponent
  ]
})
export class CommodityDetailsModule { }
