/**
 * Created by Z.cr on 2018-1-30.
 *
 * 基本用例
 * <key-button icon="tasks">
 *     <key-sub-button-header label="标题名称"></key-sub-button>
 * </key-button>
 */

import { Component, Input } from "@angular/core";
import { KeySubButtonComponent } from "./sub-button.component";

@Component({
    selector: "key-sub-button-header",
    templateUrl: "./sub-button-header.component.html",
    providers: [
        {provide: KeySubButtonComponent, useExisting: KeySubButtonHeaderComponent}
    ]
})
export class KeySubButtonHeaderComponent {

    // 标题名称
    @Input() label: string;
}
