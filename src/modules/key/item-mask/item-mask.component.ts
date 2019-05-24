import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'key-item-mask',
  templateUrl: './item-mask.component.html'
})
export class ItemMaskComponent implements OnInit {

  // 文字在左
  @Input() isTextLeft = false;

  // 文字居中
  @Input() isTextCenter = false;

  // 文字在右
  @Input() isTextRight = false;

  // 遮罩层铺满
  @Input() isMaskPaved = false;

  constructor() { }

  ngOnInit() {
  }

}
