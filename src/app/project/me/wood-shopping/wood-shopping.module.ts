import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoodShoppingComponent } from './wood-shopping.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerModule } from '../resource/banner.module';
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
    MeBannerModule,
    NgKeyModule
  ],
  declarations: [
    WoodShoppingComponent
  ]
})
export class WoodShoppingModule { }
