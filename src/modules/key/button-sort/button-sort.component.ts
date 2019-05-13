import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'key-button-sort',
  templateUrl: './button-sort.component.html'
})
export class ButtonSortComponent implements OnInit {

  // 点击回调
  @Output() clickChange: EventEmitter<any> = new EventEmitter<any>();

  // 名称
  @Input() label: any;

  // 当前激活
  @Input() active: '-1' | '0' | '1' = '0';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    let active: any = parseInt(this.active, 10) + 1;
    if (active > 1) {
      active = -1;
    }
    // 点击排序后,等于零时暂不处理
    if (active == 0) {
      this.active = '1';
    } else {
      this.active = active;
    }
    this.clickChange.emit(this.active);
  }

}
