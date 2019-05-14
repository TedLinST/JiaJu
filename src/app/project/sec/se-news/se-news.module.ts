import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeNewsComponent } from './se-news.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgKeyModule } from 'src/modules/key/key.module';
import { SecBannerMenuModule } from '../resource/banner-menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: SeNewsComponent,
      }
    ]),
    NgZorroAntdModule,
    NgKeyModule,
    SecBannerMenuModule
  ],
  declarations: [
    SeNewsComponent
  ]
})
export class SeNewsModule { }
