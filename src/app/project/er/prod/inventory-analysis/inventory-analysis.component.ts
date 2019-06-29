import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilsTableMarkForCheck } from 'src/modules/utils/table-mark-for-check';
import { DataProdInventoryAnalysisHandler } from 'src/data/er/prod/inventory-analysis';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-inventory-analysis',
  templateUrl: './inventory-analysis.component.html',
  styleUrls: ['./inventory-analysis.component.scss']
})
export class InventoryAnalysisComponent extends UtilsTableMarkForCheck implements OnInit {

  @HostBinding("class.key-flex-component-h") flex: boolean = true;

  // 数据助手
  dataHandler: any;

  // 列表数据
  listData: any[] = [];

  selection: any;

  subListData: any[] = [];

  selectionSub: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.dataHandler = DataProdInventoryAnalysisHandler;
    this.listData = Utils.applySignField(this.dataHandler.listData, 'id');
  }

  onRowSelect(event: any) {
    if (!!event && !!event.value) {
      this.subListData = event.value.row.subListData;
    }
  }

  onRowUnselect() {
    this.selection = null;
    this.subListData = [];
    this.selectionSub = null;
  }

}
