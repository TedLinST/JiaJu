import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseRecruitmentComponent } from './enterprise-recruitment.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgKeyModule } from 'src/modules/key/key.module';
import { SecBannerMenuModule } from '../resource/banner-menu.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: EnterpriseRecruitmentComponent,
      }
    ]),
    NgZorroAntdModule,
    NgKeyModule,
    SecBannerMenuModule
  ],
  declarations: [
    EnterpriseRecruitmentComponent
  ]
})
export class EnterpriseRecruitmentModule { }
