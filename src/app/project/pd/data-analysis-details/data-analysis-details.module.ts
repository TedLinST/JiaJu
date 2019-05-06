import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAnalysisDetailsComponent } from './data-analysis-details.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: DataAnalysisDetailsComponent,
      }
    ]),
    NgZorroAntdModule,
    BannerMenuModule,
    NgKeyModule,
    NgxEchartsModule
  ],
  declarations: [
    DataAnalysisDetailsComponent
  ]
})
export class DataAnalysisDetailsModule { }
