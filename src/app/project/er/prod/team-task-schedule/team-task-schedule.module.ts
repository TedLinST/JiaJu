import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamTaskScheduleComponent } from './team-task-schedule.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: TeamTaskScheduleComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    TeamTaskScheduleComponent
  ]
})
export class TeamTaskScheduleModule { }
