import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeBannerComponent } from './banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MeBannerComponent],
  declarations: [MeBannerComponent],
  providers: []
})
export class MeBannerModule { }
