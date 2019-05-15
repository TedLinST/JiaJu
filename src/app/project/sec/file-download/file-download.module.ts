import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDownloadComponent } from './file-download.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgKeyModule } from 'src/modules/key/key.module';
import { SecBannerMenuModule } from '../resource/banner-menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: FileDownloadComponent,
      }
    ]),
    NgZorroAntdModule,
    NgKeyModule,
    SecBannerMenuModule
  ],
  declarations: [
    FileDownloadComponent
  ]
})
export class FileDownloadModule { }
