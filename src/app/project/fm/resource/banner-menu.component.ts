import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyVerticalMenuEvent } from 'src/modules/key/vertical-menu/vertical-menu.event';

@Component({
  selector: 'fm-banner-menu',
  templateUrl: './banner-menu.component.html',
  styleUrls: ['./banner-menu.component.scss']
})
export class FmBannerMenuComponent implements OnInit {

  // 点击菜单
  @Output() clickMenu: EventEmitter<any> = new EventEmitter<any>();

  // 小横幅
  @Input() isMinBanner = false;

  // 图片 url
  @Input() srcUrl: any = '';

  // 显示菜单
  @Input() isMenu = true;

  // 菜单数据
  @Input() dataMenu: KeyVerticalMenuEvent[] = [];

  // 当前要激活的标题
  @Input() activeTitle: any;

  // 当前要激活的子标题
  @Input() activeSubTitle: any;

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
