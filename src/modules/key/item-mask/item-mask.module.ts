import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMaskComponent } from './item-mask.component';
import { ItemMaskLabelComponent } from './item-mask-label.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ItemMaskComponent,
    ItemMaskLabelComponent
  ],
  declarations: [
    ItemMaskComponent,
    ItemMaskLabelComponent
  ]
})
export class ItemMaskModule { }
