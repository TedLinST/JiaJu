import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmBannerMenuComponent } from './banner-menu.component';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    NgKeyModule
  ],
  exports: [FmBannerMenuComponent],
  declarations: [FmBannerMenuComponent],
  providers: []
})
export class FmBannerMenuModule { }
