import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FmBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ShoppingCartComponent,
      }
    ]),
    NgZorroAntdModule,
    FmBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
