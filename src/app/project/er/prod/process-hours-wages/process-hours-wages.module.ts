import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessHoursWagesComponent } from './process-hours-wages.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: ProcessHoursWagesComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    ProcessHoursWagesComponent
  ]
})
export class ProcessHoursWagesModule { }
