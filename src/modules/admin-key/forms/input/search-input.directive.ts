/**
 * Created by Z.cr on 2018-2-1.
 * 指令修饰器
 * 类型为 search 的 input ,并且添加了 [keySearchInput] 属性
 * 监听用户的输入，并且执行相应的方法
 */

import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: "input([keySearchInput])"
})
export class KeySearchInputDirective implements OnInit, OnDestroy {

    // 接收搜索框输入内容后，要处理相应操作的方法
    @Input() keySearchInput: any;

    // 搜索超时
    timeout: any;

    // 记录搜索旧值
    oldValue: any;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): any {
        if (this.keySearchInput) {
            // 绑定搜索事件方法
            this.searchEvent = this.searchEvent.bind(this);
            setTimeout(() => {
                // 添加 input 标签的监听事件，事件为 input 事件
                this.renderer.listen(this.el.nativeElement, "input", this.searchEvent);
            }, 0);
        }
    }

    ngOnDestroy(): any {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    searchEvent(event: any) {
        if (this.timeout) {
            // 清理搜索超时
            clearTimeout(this.timeout);
        }
        // 搜索频率设置为 1 秒
        this.timeout = setTimeout(() => {
            // 判断新搜索值是否与旧搜索值相等，相等则不执行相应的方法
            if (this.oldValue != event.target.value) {
                this.keySearchInput(event.target.value);
                this.oldValue = event.target.value;
            }
        }, 1000);
    }

}
