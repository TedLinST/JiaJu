import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSupplierComponent } from './material-supplier.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MaterialSupplierComponent,
      }
    ]),
    NgZorroAntdModule,
    MeBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    MaterialSupplierComponent
  ]
})
export class MaterialSupplierModule { }
