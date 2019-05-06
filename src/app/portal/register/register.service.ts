
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Injectable()
export class RegisterService {

    public constructor(private appService: AppService) {
    }

    /**
     * 用户注册
     * @param params 
     */
    public register(params: any): Observable<any> {
        return this.appService.request({
            controller: 'userRegister',
            method: 'register',
            params: params
        });
    }

}
