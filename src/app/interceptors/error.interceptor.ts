import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  TAG = 'ErrorInterceptor';
  constructor(private _router: Router, private _matDialog: MatDialog) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        console.log('ErrorInterceptor > intercept > error', error);
        if (error.status === 400) {
          // Bad Request
          console.log('ErrorInterceptor > intercept > Bad Request', error);
          this.badRequest();
        }
        if (error.status === 401) {
          // Unauthorized
          console.log('ErrorInterceptor > intercept > Unauthorized', error);
          this.unauthorized();
        }
        if (error.status === 403) {
          // Forbidden
          console.log('ErrorInterceptor > intercept > Forbidden', error);
          this.forbidden();
        }
        if (error.status === 404) {
          // Not found
          console.log('ErrorInterceptor > intercept > Not found', error);
          this.notFound();
        }
        if (error.status === 500) {
          // Internal server error
          console.log(
            'ErrorInterceptor > intercept > Internal server error',
            error
          );
          this.internalServerError();
        }
        const errorDetail = this.getErrorDetail(error);
        return throwError(errorDetail);
      })
    );
  }

  private badRequest(): Observable<any> {
    // this._router.navigate(['pages/errors/error-400']);
    return empty();
  }

  private notFound(): Observable<any> {
    this._router.navigate(['pages/errors/error-404']);
    return empty();
  }

  private unauthorized(): Observable<any> {
    // this._authenticationService.logout();
    location.reload(true);
    return empty();
  }

  private forbidden(): Observable<any> {
    this._router.navigate(['pages/errors/error-403']);
    return empty();
  }

  private internalServerError(): Observable<any> {
    // this._router.navigate(['pages/errors/error-500']);
    return empty();
  }

  private getErrorDetail(response: Response): any {
    let message = 'No se pudo obtener un detalle del error.';
    let closeAllDialogs = true;
    try {
      if (
        response.status === 400 &&
        typeof response['error'] === 'string' &&
        response['error']
      ) {
        message = response['error'];
        closeAllDialogs = false;
      }
      if (
        response.status === 500 &&
        typeof response['error'] === 'object' &&
        (response['error'].ExceptionMessage || response['error'].Message)
      ) {
        message = response['error'].ExceptionMessage
          ? response['error'].ExceptionMessage
          : response['error'].Message;
        // closeAllDialogs = false;
      }
      if (response['_body']) {
        const body = JSON.parse(response['_body']);
        if (body && body.Message) {
          message = body.Message;
        }
      }
    } catch (e) {}
    if (closeAllDialogs) {
      this._matDialog.closeAll();
    }
    return {
      Status: response && response.status ? response.status : null,
      StatusText: response && response.statusText ? response.statusText : null,
      Message: message,
    };
  }
}
