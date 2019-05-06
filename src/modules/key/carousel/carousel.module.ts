import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CarouselLabelComponent } from './carousel-label.component';
import { ItemMaskModule } from '../item-mask/item-mask.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ItemMaskModule
  ],
  exports: [
    CarouselComponent
  ],
  declarations: [
    CarouselComponent,
    CarouselLabelComponent
  ]
})
export class CarouselModule { }
