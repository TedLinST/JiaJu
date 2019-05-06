import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'key-dot-title',
  templateUrl: './dot-title.component.html'
})
export class DotTitleComponent implements OnInit {
  
  // 是否为内联
  @Input() isDotTitleInline = false;

  // 标题
  @Input() title = '';

  // 自定义
  @Input() isTemplate = false;

  // 圆点样式
  @Input() dotStyles;

  // 样式
  @Input() styles;
  
  constructor() { }

  ngOnInit() {
  }

}
