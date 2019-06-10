import { ViewChildren, QueryList } from "@angular/core";
import { KeyTableComponent } from '../admin-key/table/table.component';
import { KeyTableSplitComponent } from '../admin-key/table/table-split.component';
import { KeyTreeTableComponent } from '../admin-key/table/tree-table.component';
import { KeyTreeTableSplitComponent } from '../admin-key/table/tree-table-split.component';

export class UtilsTableMarkForCheck {

  @ViewChildren(KeyTableComponent)
  tableComponentList: QueryList<KeyTableComponent>;

  @ViewChildren(KeyTableSplitComponent)
  tableSplitComponentList: QueryList<KeyTableSplitComponent>;

  @ViewChildren(KeyTreeTableComponent)
  treeTableComponentList: QueryList<KeyTreeTableComponent>;

  @ViewChildren(KeyTreeTableSplitComponent)
  treeTableSplitComponentList: QueryList<KeyTreeTableSplitComponent>;

  constructor() {
    
  }

  /**
   * 全部
   */
  allTableComponentMarkForCheck() {
    let componentArray: any[] = [];
    if (!!this.tableComponentList) {
      componentArray.push(this.tableComponentList);
    }
    if (!!this.tableSplitComponentList) {
      componentArray.push(this.tableSplitComponentList);
    }
    if (!!this.treeTableComponentList) {
      componentArray.push(this.treeTableComponentList);
    }
    if (!!this.treeTableSplitComponentList) {
      componentArray.push(this.treeTableSplitComponentList);
    }
    this.componentArrayMarkForCheck(componentArray);
  }

  /**
   * 表格
   */
  tableComponentMarkForCheck() {
    let componentArray: any[] = [];
    if (!!this.tableComponentList) {
      componentArray.push(this.tableComponentList);
    }
    if (!!this.tableSplitComponentList) {
      componentArray.push(this.tableSplitComponentList);
    }
    this.componentArrayMarkForCheck(componentArray);
  }

  /**
   * 树形表格
   */
  treeTableComponentMarkForCheck() {
    let componentArray: any[] = [];
    if (!!this.treeTableComponentList) {
      componentArray.push(this.treeTableComponentList);
    }
    if (!!this.treeTableSplitComponentList) {
      componentArray.push(this.treeTableSplitComponentList);
    }
    this.componentArrayMarkForCheck(componentArray);
  }

  /**
   * 控件更新
   * @param componentArray 
   */
  componentArrayMarkForCheck(componentArray: any[]) {
    if (componentArray != null && componentArray.length > 0) {
      let array: any[] = [];
      for (let i = 0, len = componentArray.length; i < len; i++) {
        array = componentArray[i].toArray();
        if (array != null && array.length > 0) {
          array.forEach((component: any) => {
            component.tableInnerComponentMarkForCheck();
          });
        }
      }
    }
  }

}
