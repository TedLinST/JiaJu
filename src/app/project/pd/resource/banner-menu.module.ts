import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdBannerMenuComponent } from './banner-menu.component';
import { NgKeyModule } from 'src/modules/key/key.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgKeyModule,
    NgZorroAntdModule
  ],
  exports: [PdBannerMenuComponent],
  declarations: [PdBannerMenuComponent],
  providers: []
})
export class PdBannerMenuModule { }
