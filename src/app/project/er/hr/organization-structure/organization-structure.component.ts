import { Component, OnInit, HostBinding } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
import { DataHrOrganizationStructureHandler } from 'src/data/er/hr/organization-structure';
import { Utils } from 'src/modules/utils/utils';
import { KeyTreeNode } from 'src/modules/admin-key/tree/tree-node';
import { UtilsTableMarkForCheck } from 'src/modules/utils/table-mark-for-check';
import { IdCounter } from 'src/modules/utils/id-counter';

@Component({
  selector: 'app-organization-structure',
  templateUrl: './organization-structure.component.html',
  styleUrls: ['./organization-structure.component.scss']
})
export class OrganizationStructureComponent extends UtilsTableMarkForCheck implements OnInit {

  @HostBinding("class.key-flex-component-v") flex: boolean = true;

  // 数据助手
  dataHandler: any;

  // 树形数据
  treeData: KeyTreeNode[];

  // 列表数据
  listData: any[] = [];

  selection: any;

  bean: any;

  beanState: boolean = false;

  constructor() {
    super();
  }

  ngOnInit() {
    this.dataHandler = DataHrOrganizationStructureHandler;
    this.treeData = Utils.listToTreeData({ data: this.dataHandler.treeData });
  }

  onTreeRowSelect(event: any) {
    console.log(event);
    if (event.value != null && event.value.data != null) {
      this.listData = this.dataHandler.listData[event.value.data.key];
      this.listData = Utils.applySignField(this.listData, 'id');
    }
  }

  add() {
    this.bean = {};
    this.beanState = true;
  }

  cancel() {
    this.bean = null;
    this.beanState = false;
  }

  save() {
    if (!!this.bean.id) {
      if (this.selection) {
        let selection = this.selection.row;
        Utils.copy(selection, this.bean);
      }
    } else {
      this.selection = null;
      this.bean.id = IdCounter.newId();
      Utils.arrayInsert(this.listData, 0, this.bean);
    }
    this.cancel();
    this.tableComponentMarkForCheck();
  }

  view() {
    if (this.selection) {
      this.bean = Utils.clone(this.selection.row);
      this.beanState = true;
    }
  }

  delete() {
    if (this.selection) {
      let selection = this.selection.row;
      this.selection = null;
      Utils.arrayRemove(this.listData, selection);
      this.tableComponentMarkForCheck();
    }
  }


}
