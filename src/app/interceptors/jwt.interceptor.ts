import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  TAG = 'JwtInterceptor';
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(`${this.TAG} > intercept > request.url`, request.url);
    const noIntercept =
      request.url.startsWith('http://') ||
      request.url.startsWith('https://') ||
      request.url.startsWith('assets/') ||
      request.url.indexOf('/assets/') >= 0;
    if (noIntercept) return next.handle(request);
    // const currentUser = this._authenticationService.user;
    const currentUser = null;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`,
        },
        url: environment.api.baseUrl + request.url,
      });
    } else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
        },
        url: environment.api.baseUrl + request.url,
      });
    }
    return next.handle(request);
  }
}
