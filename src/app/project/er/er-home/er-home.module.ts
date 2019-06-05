import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErHomeComponent } from './er-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ErHomeComponent,
      }
    ])
  ],
  declarations: [
    ErHomeComponent
  ]
})
export class ErHomeModule { }
