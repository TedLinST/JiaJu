import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashFlowGraphComponent } from './cash-flow-graph.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PdBannerMenuModule } from 'src/app/project/pd/resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CashFlowGraphComponent,
      }
    ]),
    NgZorroAntdModule,
    PdBannerMenuModule,
    NgKeyModule,
    NgxEchartsModule
  ],
  declarations: [
    CashFlowGraphComponent
  ]
})
export class CashFlowGraphModule { }
