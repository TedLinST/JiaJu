import { NgModule } from "@angular/core";
import { TreePanelComponent } from "./tree-panel.component";
import { NgAdminKeyModule } from '../admin-key.module';

@NgModule({
    imports: [
        NgAdminKeyModule
    ],
    exports: [
        TreePanelComponent
    ],
    declarations: [
        TreePanelComponent
    ],
    providers: [

    ]
})
export class TreePanelModule {

}
