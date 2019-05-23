import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box.component';
import { BoxLabelComponent } from './box-label.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BoxComponent,
    BoxLabelComponent
  ],
  declarations: [
    BoxComponent,
    BoxLabelComponent
  ]
})
export class BoxModule { }
