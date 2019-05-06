import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // 登录界面
  { path: 'login', loadChildren: './portal/login/login.module#LoginModule' },
  // 注册页面
  { path: 'register', loadChildren: './portal/register/register.module#RegisterModule' },
  // 门户 - 固定顶部与底部页
  { path: '', loadChildren: './portal/portal.module#PortalModule' }
  // 门户 - 空白页
  // { path: '', loadChildren: './portal/portal-blank.module#PortalBlankModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
