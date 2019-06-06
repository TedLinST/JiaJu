import { Router } from '@angular/router';

export class EnterpriseResourceNavigation {

  private baseUrl: any = "er/";

  constructor(private router: Router) {
    // 滚动条回到顶部
    if (!!window) {
      window.scrollTo(0, 0);
    }
  }

  /**
   * 首页
   */
  onHome(event?: any) {
    this.router.navigateByUrl(this.baseUrl + 'er-home');
  }

}