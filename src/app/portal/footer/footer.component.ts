import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalNavigation } from '../portal.navigation';

@Component({
  selector: 'protal-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // 门户导航
  portalNav: any;
  // 数据助手
  dataHandler: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }
  
  ngOnInit() {
    this.dataHandler = { link: 'http://www.beian.miit.gov.cn' }
  }

}
