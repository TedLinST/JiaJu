import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalNavigation } from '../portal.navigation';

@Component({
  selector: 'protal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // 门户导航
  portalNav: any;

  constructor(private router: Router) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
  }

}
