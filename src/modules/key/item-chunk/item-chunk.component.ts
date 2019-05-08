import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'key-item-chunk',
  templateUrl: 'item-chunk.component.html'
})
export class ItemChunkComponent implements OnInit, AfterContentInit {

  // 切换下标回调
  @Output() switchIndexChange: EventEmitter<any> = new EventEmitter<any>();

  // 标题
  @Input() title = '';

  // 英文标题
  @Input() enTitle = '';

  // 标题线条
  @Input() isTitleLine = false;

  // 菜单数据 {title:''}
  @Input() menuData = [];

  // 当前下标
  @Input() currentIndex = 0;

  // 上边距
  @Input() marginTop = 45;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
  }

  /**
   * 切换下标
   * @param index 
   */
  switchIndex(index: number) {
    this.currentIndex = index;
    this.switchIndexChange.emit(this.currentIndex);
  }

}
