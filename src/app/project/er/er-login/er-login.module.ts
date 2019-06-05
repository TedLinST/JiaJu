import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErLoginComponent } from './er-login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ErLoginComponent,
      }
    ])
  ],
  declarations: [
    ErLoginComponent
  ]
})
export class ErLoginModule { }
