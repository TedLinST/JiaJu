import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSortComponent } from './button-sort.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    ButtonSortComponent
  ],
  declarations: [
    ButtonSortComponent
  ]
})
export class ButtonSortModule { }
