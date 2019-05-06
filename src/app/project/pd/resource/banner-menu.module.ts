import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerMenuComponent } from './banner-menu.component';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    NgKeyModule
  ],
  exports: [BannerMenuComponent],
  declarations: [BannerMenuComponent],
  providers: []
})
export class BannerMenuModule { }
