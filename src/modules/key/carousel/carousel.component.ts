import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyCarouselLabelEvent } from './carousel-label.event';

@Component({
  selector: 'key-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {

  // 切换下标回调
  @Output() clickItem: EventEmitter<any> = new EventEmitter<any>();

  // 数据源
  @Input() data: any[] = [];

  // 显示多少个
  @Input() nzSpan = 3;

  // 间隔
  @Input() space = 3;

  // 主体背景
  @Input() isBodyBg = true;

  // 字段数组 {label:'',key:'',unit:''}
  @Input() labelArray: KeyCarouselLabelEvent[] = [];

  // 遮罩模式
  @Input() maskMode = false;

  // 行数
  @Input() rowArray = [0];

  // body 样式
  @Input() bodyStyle: any;

  // 箭头类型
  @Input() arrowType: 'horizontal-out' | 'vertical-right-out' = 'horizontal-out';

  constructor() { }

  ngOnInit() {
  }

  /**
   * 点击
   */
  onClick(id: any) {
    this.clickItem.emit(id);
  }

}
