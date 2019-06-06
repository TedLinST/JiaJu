import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Utils } from 'src/modules/utils/utils';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { EnterpriseResourceNavigation } from './enterprise-resource.navigation';

@Component({
  selector: 'app-enterprise-resource',
  templateUrl: './enterprise-resource.component.html',
  styleUrls: ['./enterprise-resource.component.scss']
})
export class EnterpriseResourceComponent implements OnInit {

  // 门户导航
  portalNav: any;

  // 企业资源管理系统导航
  erNav: any;

  isCollapsed = false;

  constructor(private router: Router, private el: ElementRef) {
    this.portalNav = new PortalNavigation(router);
    this.erNav = new EnterpriseResourceNavigation(router);
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
      this.el.nativeElement.querySelector('.enterprise-resource').style.height = height + 'px';
    }, 10);
  }

  onUserInfo() {

  }

  /**
   * 切换菜单
   */
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  /**
   * 退出登录
   */
  onLoginOut() {
    Utils.removeCookie("loginTime");
    this.portalNav.openErLogin();
  }

  /**
   * 浏览器窗口大小发生改变执行
   */
  @HostListener("window:resize", ["$event"])
  public onResize(event: any) {
    this.setHeight();
  }

}
