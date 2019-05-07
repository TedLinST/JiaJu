import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'me-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class MeBannerComponent implements OnInit {

  // 小横幅
  @Input() isMinBanner = false;

  // 图片 url
  @Input() srcUrl: any = '';

  constructor() { }

  ngOnInit() {
  }

}
