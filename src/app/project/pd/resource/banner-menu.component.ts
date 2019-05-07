import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';

@Component({
  selector: 'pd-banner-menu',
  templateUrl: './banner-menu.component.html',
  styleUrls: ['./banner-menu.component.scss']
})
export class BannerMenuComponent implements OnInit {

  // 点击菜单
  @Output() clickMenu: EventEmitter<any> = new EventEmitter<any>();

  // 图片 url
  @Input() srcUrl: any = '';

  // 菜单数据
  @Input() dataMenu: KeyVerticalMenuEvent[] = [];

  // 当前要激活的标题
  @Input() activeTitle: any;

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
