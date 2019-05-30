import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementsComponent } from './statements.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FmBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: StatementsComponent,
      }
    ]),
    NgZorroAntdModule,
    FmBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    StatementsComponent
  ]
})
export class StatementsModule { }
