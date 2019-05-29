import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelChannelComponent } from './channel-channel.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FmBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ChannelChannelComponent,
      }
    ]),
    NgZorroAntdModule,
    FmBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    ChannelChannelComponent
  ]
})
export class ChannelChannelModule { }
