import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDesignComponent } from './product-design.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PdBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ProductDesignComponent,
      }
    ]),
    NgZorroAntdModule,
    PdBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    ProductDesignComponent
  ]
})
export class ProductDesignModule { }
