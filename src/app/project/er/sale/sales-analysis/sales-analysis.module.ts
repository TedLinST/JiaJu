import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesAnalysisComponent } from './sales-analysis.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: SalesAnalysisComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    SalesAnalysisComponent
  ]
})
export class SalesAnalysisModule { }
