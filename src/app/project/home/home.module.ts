import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NzNotificationService } from 'ng-zorro-antd';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent,
      }
    ]),
    NgZorroAntdModule,
    NgKeyModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    NzNotificationService
  ]
})
export class HomeModule { }
