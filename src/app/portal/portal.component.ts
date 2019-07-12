import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(private router: Router) {
  }

  // 门户导航
  portalNav: any;

  ngOnInit() {
  }

  onQQ(event){
    event.stopPropagation();
  }

  onTel(event){
    event.stopPropagation();
  }

  onBj(event){
    this.router.navigateByUrl('shopping-cart');
  }

  onWx(event){
    event.stopPropagation();
  }
}
