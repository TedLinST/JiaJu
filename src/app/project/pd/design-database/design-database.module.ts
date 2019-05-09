import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignDatabaseComponent } from './design-database.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PdBannerMenuModule } from '../resource/banner-menu.module';
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
    PdBannerMenuModule,
    NgKeyModule
  ],
  declarations: [
    DesignDatabaseComponent
  ]
})
export class DesignDatabaseModule { }
