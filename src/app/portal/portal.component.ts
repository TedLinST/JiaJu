import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onQQ(event){
    event.stopPropagation();
  }

  onTel(event){
    event.stopPropagation();
  }

  onBj(event){
    event.stopPropagation();
  }

  onWx(event){
    event.stopPropagation();
  }
}
