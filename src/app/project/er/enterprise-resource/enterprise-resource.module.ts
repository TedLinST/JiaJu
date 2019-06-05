import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseResourceComponent } from './enterprise-resource.component';
import { RouterModule } from '@angular/router';
import { EnterpriseResourceRoutes } from './enterprise-resource.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EnterpriseResourceComponent,
        children: EnterpriseResourceRoutes
      }
    ]),
  ],
  declarations: [
    EnterpriseResourceComponent
  ],
  providers: [
  ]
})
export class EnterpriseResourceModule { }
