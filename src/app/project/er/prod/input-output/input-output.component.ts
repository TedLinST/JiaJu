import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilsTableMarkForCheck } from 'src/modules/utils/table-mark-for-check';
import { DataProdInputOutputHandler } from 'src/data/er/prod/input-output';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent extends UtilsTableMarkForCheck implements OnInit {

  @HostBinding("class.key-flex-component-v") flex: boolean = true;

  // 数据助手
  dataHandler: any;

  // 列表数据
  listData: any[] = [];

  selection: any;

  // 出库数据
  ChuKuData: any = {};

  // 入库数据
  RuKuData: any = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this.dataHandler = DataProdInputOutputHandler;
    this.listData = Utils.applySignField(this.dataHandler.listData, 'id');
  }

  onRowSelect(event: any) {
    if (!!event && !!event.value) {
      this.ChuKuData = event.value.row.ChuKuData;
      this.RuKuData = event.value.row.RuKuData;
    }
  }

  onRowUnselect() {
    this.selection = null;
    this.ChuKuData = {};
    this.RuKuData = {};
  }


}
