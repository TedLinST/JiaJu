import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessTaskSheetComponent } from './process-task-sheet.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: ProcessTaskSheetComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    ProcessTaskSheetComponent
  ]
})
export class ProcessTaskSheetModule { }
