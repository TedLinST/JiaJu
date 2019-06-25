import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilsTableMarkForCheck } from 'src/modules/utils/table-mark-for-check';
import { DataProdComponentTypeHandler } from 'src/data/er/prod/component-type';
import { Utils } from 'src/modules/utils/utils';
import { KeyTreeNode } from 'src/modules/admin-key/tree/tree-node';

@Component({
  selector: 'app-component-type',
  templateUrl: './component-type.component.html',
  styleUrls: ['./component-type.component.scss']
})
export class ComponentTypeComponent extends UtilsTableMarkForCheck implements OnInit {

  @HostBinding("class.key-flex-component-v") flex: boolean = true;

  // 数据助手
  dataHandler: any;

  // 列表数据
  listData: any[] = [];

  selection: any;

  listDataTree: KeyTreeNode[];

  selectionTree: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.dataHandler = DataProdComponentTypeHandler;
    this.listData = Utils.applySignField(this.dataHandler.listData, 'id');
  }

  onRowSelect(event: any) {
    if (!!event && !!event.value) {
      let treeData = event.value.row.treeData;
      this.listDataTree = Utils.listToTreeData({ data: treeData });
    }
  }

  onRowUnselect() {
    this.selectionTree = null;
    this.listDataTree = [];
  }
}
