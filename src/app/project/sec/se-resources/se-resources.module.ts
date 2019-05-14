import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeResourcesComponent } from './se-resources.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgKeyModule } from 'src/modules/key/key.module';
import { SecBannerMenuModule } from '../resource/banner-menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: SeResourcesComponent,
      }
    ]),
    NgZorroAntdModule,
    NgKeyModule,
    SecBannerMenuModule
  ],
  declarations: [
    SeResourcesComponent
  ]
})
export class SeResourcesModule { }
