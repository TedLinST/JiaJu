import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-enterprise-resource',
  templateUrl: './enterprise-resource.component.html',
  styleUrls: ['./enterprise-resource.component.scss']
})
export class EnterpriseResourceComponent implements OnInit {


  constructor(private el: ElementRef) { }

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
      protalHeaderAuxiliaryEl.classList.add("protal-header-auxiliary");
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
      protalHeaderAuxiliaryEl.classList.remove("protal-header-auxiliary");
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

}
