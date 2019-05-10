import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecBannerMenuComponent } from './banner-menu.component';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    NgKeyModule
  ],
  exports: [SecBannerMenuComponent],
  declarations: [SecBannerMenuComponent],
  providers: []
})
export class SecBannerMenuModule { }
