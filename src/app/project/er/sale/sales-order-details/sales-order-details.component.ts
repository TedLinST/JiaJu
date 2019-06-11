import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilsTableMarkForCheck } from 'src/modules/utils/table-mark-for-check';
import { DataSaleSalesOrderDetailsHandler } from 'src/data/er/sale/sales-order-details';
import { Utils } from 'src/modules/utils/utils';
import { IdCounter } from 'src/modules/utils/id-counter';

@Component({
  selector: 'app-sales-order-details',
  templateUrl: './sales-order-details.component.html',
  styleUrls: ['./sales-order-details.component.scss']
})
export class SalesOrderDetailsComponent extends UtilsTableMarkForCheck implements OnInit {

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
    this.dataHandler = DataSaleSalesOrderDetailsHandler;
    this.listData = Utils.applySignField(this.dataHandler.listData, 'id');
  }

}
