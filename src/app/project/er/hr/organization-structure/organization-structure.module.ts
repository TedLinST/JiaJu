import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationStructureComponent } from './organization-structure.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: OrganizationStructureComponent,
      }
    ])
  ],
  declarations: [
    OrganizationStructureComponent
  ]
})
export class OrganizationStructureModule { }
