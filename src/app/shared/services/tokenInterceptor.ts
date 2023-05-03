import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './authService';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  stackVisited = false;
  responseclient: Observable<HttpEvent<any>>;
  constructor(public auth: AuthService, private router: Router, private jwtHelper: JwtHelperService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const exp = this.jwtHelper.decodeToken(this.auth.getToken()).exp;
    // const currentTimestamp= Math.floor(Date.now() / 1000);
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    this.responseclient = next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          localStorage.setItem('user','admin');
          //this.router.navigate(['/shop/home']);
          return of(new HttpResponse());
        } else {
          return throwError(error);
        }
      })
    );
    return this.responseclient;
  }

}
