import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekExpertComponent } from './seek-expert.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgKeyModule } from 'src/modules/key/key.module';
import { SecBannerMenuModule } from '../resource/banner-menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: SeekExpertComponent,
      }
    ]),
    NgZorroAntdModule,
    NgKeyModule,
    SecBannerMenuModule
  ],
  declarations: [
    SeekExpertComponent
  ]
})
export class SeekExpertModule { }
