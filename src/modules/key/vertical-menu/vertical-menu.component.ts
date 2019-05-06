import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyVerticalMenuEvent } from './vertical-menu.event';

@Component({
  selector: 'key-vertical-menu',
  templateUrl: './vertical-menu.component.html'
})
export class VerticalMenuComponent implements OnInit {

  // 点击菜单
  @Output() clickMenu: EventEmitter<any> = new EventEmitter<any>();

  // 宽度200px
  @Input() isWidth200 = false;

  // 菜单数据
  @Input() data: KeyVerticalMenuEvent[] = [];

  // 样式
  @Input() styles: any;

  constructor() { }

  ngOnInit() {
  }

  /**
   * 点击菜单
   * @param menu 
   */
  onClickMenu(menu: KeyVerticalMenuEvent) {
    this.clickMenu.emit(menu);
  }

}
