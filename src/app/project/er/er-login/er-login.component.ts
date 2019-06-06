import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';

@Component({
  selector: 'app-er-login',
  templateUrl: './er-login.component.html',
  styleUrls: ['./er-login.component.scss']
})
export class ErLoginComponent implements OnInit {

  // 门户导航
  portalNav: any;

  bean: any = {};

  hasError: boolean = false;

  constructor(private router: Router, private el: ElementRef) {
    this.portalNav = new PortalNavigation(router);
  }

  ngOnInit() {
    this.addProtalStyle();
    this.setHeight();
  }

  ngOnDestroy() {
    this.removeProtalStyle();
  }

  /**
   * 添加门户样式
   */
  addProtalStyle() {
    let portalFooterEl = document.getElementById("portal-footer-box");
    if (!!portalFooterEl) {
      portalFooterEl.style.display = "none";
    }

    let portalHeaderEl = document.getElementById("protal-header");
    if (!!portalHeaderEl) {
      portalHeaderEl.classList.add("protal-header-min");
    }

    let protalHeaderAuxiliaryEl = document.getElementById("protal-header-auxiliary");
    if (!!protalHeaderAuxiliaryEl) {
      protalHeaderAuxiliaryEl.classList.add("protal-header-auxiliary-min");
    }
  }

  /**
   * 移除门户样式
   */
  removeProtalStyle() {
    let portalFooterEl = document.getElementById("portal-footer-box");
    if (!!portalFooterEl) {
      portalFooterEl.style.display = "block";
    }

    let portalHeaderEl = document.getElementById("protal-header");
    if (!!portalHeaderEl) {
      portalHeaderEl.classList.remove("protal-header-min");
    }

    let protalHeaderAuxiliaryEl = document.getElementById("protal-header-auxiliary");
    if (!!protalHeaderAuxiliaryEl) {
      protalHeaderAuxiliaryEl.classList.remove("protal-header-auxiliary-min");
    }
  }

  /**
   * 设置高度
   */
  setHeight() {
    setTimeout(() => {
      let portalHeaderEl = document.getElementById("protal-header");
      let portalHeaderHeight: number = 60;
      if (portalHeaderEl) {
        portalHeaderHeight = portalHeaderEl.clientHeight;
      }
      let height = document.body.clientHeight - portalHeaderHeight;
      this.el.nativeElement.querySelector('.er-login').style.height = height + 'px';
    }, 10);
  }

  /**
   * 用户登录
   */
  onLogin() {
    if (this.bean.username == "admin" && this.bean.password == "admin") {
      this.hasError = false;
      this.portalNav.openEr();
    } else {
      this.hasError = true;
    }
  }

}
