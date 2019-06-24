import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialConsumptionAnalysisComponent } from './material-consumption-analysis.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: MaterialConsumptionAnalysisComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    MaterialConsumptionAnalysisComponent
  ]
})
export class MaterialConsumptionAnalysisModule { }
