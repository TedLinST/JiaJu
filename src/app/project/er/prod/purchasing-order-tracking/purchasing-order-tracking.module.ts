import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasingOrderTrackingComponent } from './purchasing-order-tracking.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: PurchasingOrderTrackingComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    PurchasingOrderTrackingComponent
  ]
})
export class PurchasingOrderTrackingModule { }
