import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureRawShoppingComponent } from './furniture-raw-shopping.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: FurnitureRawShoppingComponent,
      }
    ]),
    NgZorroAntdModule,
    MeBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    FurnitureRawShoppingComponent
  ]
})
export class FurnitureRawShoppingModule { }
