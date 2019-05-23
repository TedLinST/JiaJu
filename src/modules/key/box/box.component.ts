import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'key-box',
  templateUrl: './box.component.html'
})
export class BoxComponent implements OnInit {

  // 上边框
  @Input() isTopBorder: boolean = true;

  // 盒子样式
  @Input() boxStyles: any;

  // 盒子标题
  @Input() title: any;

  constructor() { }

  ngOnInit() {
  }

}
