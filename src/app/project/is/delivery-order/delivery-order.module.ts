import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryOrderComponent } from './delivery-order.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IsBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: DeliveryOrderComponent,
      }
    ]),
    NgZorroAntdModule,
    IsBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    DeliveryOrderComponent
  ]
})
export class DeliveryOrderModule { }
