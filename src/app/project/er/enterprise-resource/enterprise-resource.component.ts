import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-enterprise-resource',
  templateUrl: './enterprise-resource.component.html',
  styleUrls: ['./enterprise-resource.component.scss']
})
export class EnterpriseResourceComponent implements OnInit {


  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    this.handleProtalStyle();
    this.setHeight();
  }

  /**
   * 处理门户样式
   */
  handleProtalStyle() {
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
