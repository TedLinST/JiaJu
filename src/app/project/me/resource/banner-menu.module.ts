import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeBannerMenuComponent } from './banner-menu.component';
import { NgKeyModule } from 'src/modules/key/key.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgKeyModule,
    NgZorroAntdModule
  ],
  exports: [MeBannerMenuComponent],
  declarations: [MeBannerMenuComponent],
  providers: []
})
export class MeBannerMenuModule { }
