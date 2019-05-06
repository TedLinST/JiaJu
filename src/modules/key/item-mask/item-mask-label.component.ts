import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'key-item-mask-label',
  templateUrl: './item-mask-label.component.html'
})
export class ItemMaskLabelComponent implements OnInit {

  // 名称
  @Input() label: any = '';

  // 名称标题
  @Input() labelTitle: any;

  // 文本超出部分隐藏
  @Input() isTextBeyondHide = true;

  constructor() { }

  ngOnInit() {
  }

}
