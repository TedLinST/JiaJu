import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsBannerMenuComponent } from './banner-menu.component';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    NgKeyModule
  ],
  exports: [IsBannerMenuComponent],
  declarations: [IsBannerMenuComponent],
  providers: []
})
export class IsBannerMenuModule { }
