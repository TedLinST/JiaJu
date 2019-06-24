import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilsTableMarkForCheck } from 'src/modules/utils/table-mark-for-check';
import { DataProdTeamTaskScheduleHandler } from 'src/data/er/prod/team-task-schedule';
import { Utils } from 'src/modules/utils/utils';

@Component({
  selector: 'app-team-task-schedule',
  templateUrl: './team-task-schedule.component.html',
  styleUrls: ['./team-task-schedule.component.scss']
})
export class TeamTaskScheduleComponent extends UtilsTableMarkForCheck implements OnInit {

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
    this.dataHandler = DataProdTeamTaskScheduleHandler;
    this.listData = Utils.applySignField(this.dataHandler.listData, 'id');
  }

}
