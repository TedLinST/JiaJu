import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'key-box-label',
  templateUrl: './box-label.component.html'
})
export class BoxLabelComponent implements OnInit {

  // 标签内联样式
  @Input() isBoxLabelInline: boolean = false;

  // 标签样式
  @Input() boxLabelStyle: any;

  // 标签
  @Input() label: any;

  // 值
  @Input() value: any;

  // 值样式
  @Input() boxValueStyle: any;

  // 冒号
  @Input() colon: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
