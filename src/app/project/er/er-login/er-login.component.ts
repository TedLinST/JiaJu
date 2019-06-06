import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PortalNavigation } from 'src/app/portal/portal.navigation';
import { Utils } from 'src/modules/utils/utils';

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
    this.hasUserLogin();
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
      // 0.042 大约一个小时
      let date: any = new Date();
      let dateParse = Date.parse(date);
      Utils.setCookie("loginTime", dateParse, 0.042 * 3);
      this.portalNav.openEr();
    } else {
      this.hasError = true;
    }
  }

  /**
   * 判断用户是否登录
   */
  hasUserLogin() {
    // 获取用户登录信息
    let date: any = new Date();
    let dateParse = Date.parse(date);
    let loginTime: number = Utils.getCookie("loginTime");
    let hour: number = 3000 * 60 * 60;
    if (loginTime) {
      if (dateParse - loginTime < hour) {
        this.portalNav.openEr();
      }
    }
  }

  /**
   * 浏览器窗口大小发生改变执行
   */
  @HostListener("window:resize", ["$event"])
  public onResize(event: any) {
    this.setHeight();
  }

}
