/**
 * Created by Z.cr on 2018-2-1.
 * 指令修饰器 - 属性型指令
 * 默认将类型为 month 的 input 的 max 设置为 9999-12
 */

import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: "input([type=month]):not([max])"
})
export class KeyMonthInputMaxValueDirective {
    constructor(el: ElementRef, renderer: Renderer2) {
        renderer.setAttribute(el.nativeElement, "max", "9999-12");
    }
}
