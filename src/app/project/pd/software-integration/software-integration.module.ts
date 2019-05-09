import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareIntegrationComponent } from './software-integration.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PdBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: SoftwareIntegrationComponent,
      }
    ]),
    NgZorroAntdModule,
    PdBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    SoftwareIntegrationComponent
  ]
})
export class SoftwareIntegrationModule { }
