import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'key-item-mask',
  templateUrl: './item-mask.component.html'
})
export class ItemMaskComponent implements OnInit {

  // 点击
  @Output() clickChange: EventEmitter<any> = new EventEmitter<any>();

  // 文字在左
  @Input() isTextLeft = false;

  // 文字居中
  @Input() isTextCenter = false;

  // 文字在右
  @Input() isTextRight = false;

  // 遮罩层铺满
  @Input() isMaskPaved = false;

  // 激活
  @Input() isActive = false;

  // 样式
  @Input() maskStyle: any;

  constructor() { }

  ngOnInit() {
  }

  onMaskChange() {
    this.clickChange.emit();
  }

}
