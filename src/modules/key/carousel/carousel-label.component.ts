import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'key-carousel-label',
  templateUrl: './carousel-label.component.html'
})
export class CarouselLabelComponent implements OnInit {

  @Input() label: any = '';

  @Input() value: any = '';

  @Input() unit: any = '';

  constructor() { }

  ngOnInit() {
  }

}
