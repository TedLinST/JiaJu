import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopingComponent } from './developing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: DevelopingComponent,
      }
    ]),
  ],
  declarations: [
    DevelopingComponent
  ]
})
export class DevelopingModule { }
