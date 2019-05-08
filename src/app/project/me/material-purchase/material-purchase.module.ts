import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialPurchaseComponent } from './material-purchase.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerModule } from '../resource/banner.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MaterialPurchaseComponent,
      }
    ]),
    NgZorroAntdModule,
    MeBannerModule,
    NgKeyModule
  ],
  declarations: [
    MaterialPurchaseComponent
  ]
})
export class MaterialPurchaseModule { }
