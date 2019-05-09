import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoodShoppingComponent } from './wood-shopping.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: WoodShoppingComponent,
      }
    ]),
    NgZorroAntdModule,
    MeBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    WoodShoppingComponent
  ]
})
export class WoodShoppingModule { }
