import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationStructureComponent } from './organization-structure.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';
import { TreePanelModule } from 'src/modules/admin-key/basics/tree-panel.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: OrganizationStructureComponent,
      }
    ]),
    NgAdminKeyModule,
    TreePanelModule
  ],
  declarations: [
    OrganizationStructureComponent
  ]
})
export class OrganizationStructureModule { }
