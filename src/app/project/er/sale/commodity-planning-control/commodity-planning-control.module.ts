import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommodityPlanningControlComponent } from './commodity-planning-control.component';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: CommodityPlanningControlComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    CommodityPlanningControlComponent
  ]
})
export class CommodityPlanningControlModule { }
