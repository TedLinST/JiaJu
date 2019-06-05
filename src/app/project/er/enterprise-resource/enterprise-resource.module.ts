import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseResourceComponent } from './enterprise-resource.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgKeyModule } from 'src/modules/key/key.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: EnterpriseResourceComponent,
      }
    ]),
    NgZorroAntdModule,
    NgKeyModule
  ],
  declarations: [
    EnterpriseResourceComponent
  ]
})
export class EnterpriseResourceModule { }
