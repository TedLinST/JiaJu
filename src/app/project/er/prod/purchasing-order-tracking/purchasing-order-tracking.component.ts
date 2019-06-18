import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilsTableMarkForCheck } from 'src/modules/utils/table-mark-for-check';
import { DataProdPurchasingOrderTrackingHandler } from 'src/data/er/prod/purchasing-order-tracking';
import { Utils } from 'src/modules/utils/utils';
import { IdCounter } from 'src/modules/utils/id-counter';

@Component({
  selector: 'app-purchasing-order-tracking',
  templateUrl: './purchasing-order-tracking.component.html',
  styleUrls: ['./purchasing-order-tracking.component.scss']
})
export class PurchasingOrderTrackingComponent extends UtilsTableMarkForCheck implements OnInit {

  @HostBinding("class.key-flex-component-v") flex: boolean = true;

  // 数据助手
  dataHandler: any;

  // 列表数据
  listData: any[] = [];

  selection: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.dataHandler = DataProdPurchasingOrderTrackingHandler;
    this.listData = Utils.applySignField(this.dataHandler.listData, 'id');
  }

}
