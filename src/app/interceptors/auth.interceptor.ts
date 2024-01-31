import type { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IAuthenticationResponse } from '../auth/interfaces/login.interface';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const parsedToken: IAuthenticationResponse = JSON.parse(sessionStorage.getItem('token') || 'null');
    const token = parsedToken?.token;

    if(parsedToken) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(clonedReq);
    }

    return next.handle(req);
  }

}
