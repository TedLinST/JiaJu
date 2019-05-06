import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { RouterModule } from '@angular/router';
import { PortalRoutes } from './portal.routing';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PortalComponent,
        children: PortalRoutes
      }
    ]),
    HeaderModule,
    FooterModule,
    NgZorroAntdModule
  ],
  declarations: [
    PortalComponent
  ],
  providers: [
  ]
})
export class PortalModule {
}
