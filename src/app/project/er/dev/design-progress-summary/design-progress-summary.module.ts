import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';
import { DesignProgressSummaryComponent } from './design-progress-summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: DesignProgressSummaryComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    DesignProgressSummaryComponent
  ]
})
export class DesignProgressSummaryModule { }
