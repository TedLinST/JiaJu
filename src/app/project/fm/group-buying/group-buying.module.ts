import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupBuyingComponent } from './group-buying.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FmBannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: GroupBuyingComponent,
      }
    ]),
    NgZorroAntdModule,
    FmBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    GroupBuyingComponent
  ]
})
export class GroupBuyingModule { }
