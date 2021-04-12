import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authServiceService: AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authServiceService.getToken()}`
      }
    });
    
    return next.handle(request);
  }
}
