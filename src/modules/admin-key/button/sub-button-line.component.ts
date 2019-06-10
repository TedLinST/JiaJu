/**
 * Created by Z.cr on 2018-1-30.
 *
 * 基本用例
 * <key-button icon="tasks">
 *     <key-sub-button-line></key-sub-button-line>
 * </key-button>
 */

import { Component, Input } from "@angular/core";
import { KeySubButtonComponent } from "./sub-button.component";

@Component({
    selector: "key-sub-button-line",
    templateUrl: "./sub-button-line.component.html",
    providers: [
        {provide: KeySubButtonComponent, useExisting: KeySubButtonLineComponent}
    ]
})
export class KeySubButtonLineComponent {

    // css 样式
    @Input() styles: string;
}
