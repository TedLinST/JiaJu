import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAnalysisComponent } from './inventory-analysis.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: InventoryAnalysisComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    InventoryAnalysisComponent
  ]
})
export class InventoryAnalysisModule { }
