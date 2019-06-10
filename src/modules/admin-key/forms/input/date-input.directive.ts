/**
 * Created by Z.cr on 2018-2-1.
 * 指令修饰器 - 属性型指令
 * 默认将类型为 date 的 input 的 max 设置为 9999-12-31
 */

import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: "input([type=date]):not([max])"
})
export class KeyDateInputMaxValueDirective {
    constructor(el: ElementRef, renderer: Renderer2) {
        renderer.setAttribute(el.nativeElement, "max", "9999-12-31");
    }
}
