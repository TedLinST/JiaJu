import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceIntroductionComponent } from './service-introduction.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IsBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ServiceIntroductionComponent,
      }
    ]),
    NgZorroAntdModule,
    IsBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    ServiceIntroductionComponent
  ]
})
export class ServiceIntroductionModule { }
