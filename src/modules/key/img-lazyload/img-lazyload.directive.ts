import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: "[imgLazyload]"
})
export class KeyImgLazyloadDirective {

  // 图片懒加载URL
  @Input() imgLazyload: any;

  // 图片EL
  imgEl: any;

  constructor(el: ElementRef) {
    this.imgEl = el.nativeElement;
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    setTimeout(() => {
      if (this.imgLazyload != this.imgEl.keysrc) {
        if (this.isVisualizationArea()) {
          this.loadImg();
        }
      }
    }, 10);
  }

  ngDoCheck() {
    if (this.imgLazyload != this.imgEl.keysrc) {
      if (this.isVisualizationArea()) {
        this.loadImg();
      }
    }
  }

  /**
   * 判断是否在可视化区域
   */
  isVisualizationArea() {
    const bound = this.imgEl.getBoundingClientRect();
    const clientHeight = window.innerHeight;
    // 可视化区域再加上100px
    return bound.top <= clientHeight + 100;
  }

  /**
   * 加载图片
   */
  loadImg() {
    // 判断img标签中src属性值是否与 imgLazyload 值相等
    if (this.imgLazyload != this.imgEl.keysrc) {
      this.imgEl.src = this.imgLazyload;
      this.imgEl.keysrc = this.imgLazyload;
    }
  }
}
