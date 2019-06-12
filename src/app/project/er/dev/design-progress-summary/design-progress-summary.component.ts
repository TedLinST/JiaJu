import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilsTableMarkForCheck } from 'src/modules/utils/table-mark-for-check';
import { Utils } from 'src/modules/utils/utils';
import { DataDevDesignProgressSummaryHandler } from 'src/data/er/dev/design-progress-summary';

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

  constructor() {
    super();
  }

  ngOnInit() {
    this.dataHandler = DataDevDesignProgressSummaryHandler;
    this.listData = Utils.applySignField(this.dataHandler.listData, 'id');
  }

}
