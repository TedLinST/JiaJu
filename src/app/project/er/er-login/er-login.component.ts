import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnterpriseResourceNavigation } from '../enterprise-resource/enterprise-resource.navigation';

@Component({
  selector: 'app-er-login',
  templateUrl: './er-login.component.html',
  styleUrls: ['./er-login.component.scss']
})
export class ErLoginComponent implements OnInit {

  // 企业资源管理系统导航
  erNav: any;

  constructor(private router: Router) {
    this.erNav = new EnterpriseResourceNavigation(router);
  }

  ngOnInit() {

  }

  onLogin() {
    this.erNav.onHome();
  }

}
