import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyTreeComponent } from './tree.component';
import { KeyTreeCellComponent } from './tree-cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    KeyTreeComponent,
    KeyTreeCellComponent
  ],
  declarations: [
    KeyTreeComponent,
    KeyTreeCellComponent
  ]
})
export class KeyTreeModule { }
