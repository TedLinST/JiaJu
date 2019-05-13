import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolProjectComponent } from './school-project.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PdBannerMenuModule } from '../../pd/resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';
import { SecBannerMenuModule } from '../resource/banner-menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: SchoolProjectComponent,
      }
    ]),
    NgZorroAntdModule,
    PdBannerMenuModule,
    NgKeyModule,
    SecBannerMenuModule
  ],
  declarations: [
    SchoolProjectComponent
  ]
})
export class SchoolProjectModule { }
