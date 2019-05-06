import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'key-item-chunk-body',
  templateUrl: './item-chunk-body.component.html'
})
export class ItemChunkBodyComponent implements OnInit {

  // 切换下标回调
  @Output() clickMore: EventEmitter<any> = new EventEmitter<any>();

  // 最大化
  @Input() isMaxItem = false;

  // 更多按钮
  @Input() isMore = false;

  // 显示项目数
  @Input() showItemNumber;

  // 更多按钮对齐下拉框
  @Input() isMoreAlignSelect = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * 点击更多
   */
  onClickMore() {
    this.clickMore.emit();
  }

}
