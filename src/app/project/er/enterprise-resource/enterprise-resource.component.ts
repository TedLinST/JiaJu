import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise-resource',
  templateUrl: './enterprise-resource.component.html',
  styleUrls: ['./enterprise-resource.component.scss']
})
export class EnterpriseResourceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.handleProtalStyle();
  }

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

}
