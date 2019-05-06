
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Injectable()
export class LoginService {

    public constructor(private appService: AppService) {
    }

    /**
     * 用户登录
     * @param params 
     */
    public login(params: any): Observable<any> {
        return this.appService.request({
            controller: 'userLogin',
            method: 'login',
            params: params
        });
    }

}
