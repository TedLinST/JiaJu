import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'key-menu-type',
  templateUrl: './menu-type.component.html'
})
export class MenuTypeComponent implements OnInit {

  // 点击分类
  @Output() clickType: EventEmitter<any> = new EventEmitter<any>();

  // 标题
  @Input() title: any;

  // 数据
  @Input() data: any[] = [];

  // 显示冒号
  @Input() isShowColon = true;

  // 显示下划线
  @Input() isShowLine = true;

  // 选中 MAP
  @Input() selectMap: any = {};

  // 子级选中
  @Input() selectSubMap: any = {};

  subData: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * 点击分类
   * @param col 
   */
  onClockLabel(col: any) {
    if (col.subData != null && col.subData.length > 0) {
      let map = true;
      if (this.selectMap[col.id]) {
        map = false;
      }
      this.selectMap = {};
      this.subData = [];
      if (map) {
        this.selectMap[col.id] = true;
        this.subData = col.subData;
      }
    } else {
      this.selectMap[col.id] = !this.selectMap[col.id];
    }

    this.clickType.emit({
      selectMap: this.selectMap,
      selectSubMap: this.selectSubMap
    });
  }

  /**
   * 点击子级分类
   * @param col 
   */
  onClockSubLabel(subCol: any) {
    this.selectSubMap[subCol.id] = !this.selectSubMap[subCol.id];
    this.clickType.emit({
      selectMap: this.selectMap,
      selectSubMap: this.selectSubMap
    });
  }

}
