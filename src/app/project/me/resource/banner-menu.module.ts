import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeBannerMenuComponent } from './banner-menu.component';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    NgKeyModule
  ],
  exports: [MeBannerMenuComponent],
  declarations: [MeBannerMenuComponent],
  providers: []
})
export class MeBannerMenuModule { }
