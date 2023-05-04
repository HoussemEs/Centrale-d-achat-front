import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HealthService } from './health.service';
import { AuthService } from './authService';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  stackVisited = false;
  responseclient: Observable<HttpEvent<any>>;
  constructor(public auth: AuthService, private router: Router, private jwtHelper: JwtHelperService,
    private healthService:HealthService) {}

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
          this.healthService.addError(1).subscribe(d=> {console.log(d)},error => console.log(error));
          this.healthService.getErrors(1).subscribe(d => console.log(d) );
        } else if (error.status === 500) {
            this.healthService.addError(2).subscribe(d=> {console.log(d)},error => console.log(error));
        } else if (error.status === 404) {
          this.healthService.addError(3).subscribe(d=> {console.log(d)},error => console.log(error));
        } else {
          this.healthService.addError(4).subscribe(d=> {console.log(d)},error => console.log(error));
        }
        return throwError(error);
      })
    );
    return this.responseclient;
  }

}
