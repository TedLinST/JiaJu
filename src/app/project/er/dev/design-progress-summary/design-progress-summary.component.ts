import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilsTableMarkForCheck } from 'src/modules/utils/table-mark-for-check';
import { Utils } from 'src/modules/utils/utils';
import { DataDevDesignProgressSummaryHandler } from 'src/data/er/dev/design-progress-summary';
import { IdCounter } from 'src/modules/utils/id-counter';

@Component({
  selector: 'app-design-progress-summary',
  templateUrl: './design-progress-summary.component.html',
  styleUrls: ['./design-progress-summary.component.scss']
})
export class DesignProgressSummaryComponent extends UtilsTableMarkForCheck implements OnInit {

  @HostBinding("class.key-flex-component-v") flex: boolean = true;

  // 数据助手
  dataHandler: any;

  // 列表数据
  listData: any[] = [];

  selection: any;

  bean: any;

  beanState: boolean = false;

  constructor() {
    super();
  }

  ngOnInit() {
    this.dataHandler = DataDevDesignProgressSummaryHandler;
    this.listData = Utils.applySignField(this.dataHandler.listData, 'id');
  }

  add() {
    this.bean = {};
    this.beanState = true;
  }

  cancel() {
    this.beanState = false;
    this.bean = null;
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
