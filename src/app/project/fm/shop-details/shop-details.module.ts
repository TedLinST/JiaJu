import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from './shop-details.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FmBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ShopDetailsComponent,
      }
    ]),
    NgZorroAntdModule,
    FmBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    ShopDetailsComponent
  ]
})
export class ShopDetailsModule { }
