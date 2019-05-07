import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ItemChunkModule } from './item-chunk/item-chunk.module';
import { CarouselModule } from './carousel/carousel.module';
import { ItemMaskModule } from './item-mask/item-mask.module';
import { VerticalMenuModule } from './vertical-menu/vertical-menu.module';
import { DotTitleModule } from './dot-title/dot-title.module';
import { MenuTypeModule } from './menu-type/menu-type.module';
import { ButtonSortModule } from './button-sort/button-sort.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ItemChunkModule,
    CarouselModule,
    ItemMaskModule,
    VerticalMenuModule,
    DotTitleModule,
    MenuTypeModule,
    ButtonSortModule
  ]
})
export class NgKeyModule { }
