import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTypeComponent } from './component-type.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAdminKeyModule } from 'src/modules/admin-key/admin-key.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: ComponentTypeComponent,
      }
    ]),
    NgAdminKeyModule
  ],
  declarations: [
    ComponentTypeComponent
  ]
})
export class ComponentTypeModule { }
