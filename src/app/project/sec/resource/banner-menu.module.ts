import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecBannerMenuComponent } from './banner-menu.component';
import { NgKeyModule } from 'src/modules/key/key.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgKeyModule,
    NgZorroAntdModule
  ],
  exports: [SecBannerMenuComponent],
  declarations: [SecBannerMenuComponent],
  providers: []
})
export class SecBannerMenuModule { }
