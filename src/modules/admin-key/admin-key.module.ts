/*
 * @Author: ZengChuangRong 
 * @Date: 2018-08-31 16:31:29 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-11-21 10:34:40
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { KeyTableModule } from './table/table.module';
import { KeyTreeModule } from './tree/tree.module';
import { KeyLoadingModule } from './loading/loading.module';
import { KeyPaginatorModule } from './paginator/paginator.module';
import { KeyFormsModule } from './forms/forms.module';
import { KeyValidatorsModule } from './forms/validators/validators.module';
import { KeyButtonModule } from './button/button.module';
import { KeyWindowModule } from './window/window.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    KeyTableModule,
    KeyTreeModule,
    KeyLoadingModule,
    KeyPaginatorModule,
    KeyFormsModule,
    KeyValidatorsModule,
    KeyButtonModule,
    KeyWindowModule
  ]
})
export class NgAdminKeyModule { }
