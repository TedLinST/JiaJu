import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignersGardenComponent } from './designers-garden.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PdBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: DesignersGardenComponent,
      }
    ]),
    NgZorroAntdModule,
    PdBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    DesignersGardenComponent
  ]
})
export class DesignersGardenModule { }
