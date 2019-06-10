/**
 * Created by Z.cr on 2018-2-2.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeyDomValidatorDirective } from "./dom-validators.directive";
import { KeyMinSelectValidatorDirective } from "./minSelect-validators.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        KeyDomValidatorDirective,
        KeyMinSelectValidatorDirective
    ],
    declarations: [
        KeyDomValidatorDirective,
        KeyMinSelectValidatorDirective
    ]
})
export class KeyValidatorsModule {

}
