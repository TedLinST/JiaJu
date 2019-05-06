import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemChunkComponent } from './item-chunk.component';
import { FormsModule } from '@angular/forms';
import { ItemChunkBodyComponent } from './item-chunk-body.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ItemChunkComponent,
    ItemChunkBodyComponent
  ],
  declarations: [
    ItemChunkComponent,
    ItemChunkBodyComponent
  ]
})
export class ItemChunkModule {

}
