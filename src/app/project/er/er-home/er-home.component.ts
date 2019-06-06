import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-er-home',
  templateUrl: './er-home.component.html',
  styleUrls: ['./er-home.component.scss']
})
export class ErHomeComponent implements OnInit {

  @HostBinding("class.key-flex-component-v") flex: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
