import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSupplierComponent } from './material-supplier.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MeBannerModule } from '../resource/banner.module';
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
    MeBannerModule,
    NgKeyModule
  ],
  declarations: [
    MaterialSupplierComponent
  ]
})
export class MaterialSupplierModule { }
