import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignDatabaseComponent } from './design-database.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BannerMenuModule } from '../resource/banner-menu.module';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: DesignDatabaseComponent,
      }
    ]),
    NgZorroAntdModule,
    BannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    DesignDatabaseComponent
  ]
})
export class DesignDatabaseModule { }
