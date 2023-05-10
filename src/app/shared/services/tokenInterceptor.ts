import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HealthService } from './health.service';
import { AuthService } from './AuthService';


export interface Dataa{
  request:String;
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  dataa:Dataa={
    request:""
  }
  stackVisited = false;
  responseclient: Observable<HttpEvent<any>>;
  requestPath: string;
  constructor(public auth: AuthService, private router: Router, private jwtHelper: JwtHelperService,
    private healthService:HealthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.get('No-Auth') === 'True') {
      return next.handle(request.clone());
    }
    // const exp = this.jwtHelper.decodeToken(this.auth.getToken()).exp;
    // const currentTimestamp= Math.floor(Date.now() / 1000);
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    this.responseclient = next.handle(request).pipe(

      retry(1),
      catchError(
        (error: HttpErrorResponse) => {
        this.requestPath=error.url;
        
        while((this.requestPath.indexOf("/"))>=1 ) {
          this.requestPath = this.requestPath.replace("/","-");
        }

        if (error.status === 401) {
            //this.healthService.addError(1,this.requestPath).subscribe(d=> {console.log(d)},error => console.log(error));
           // this.healthService.getErrors(1).subscribe(d => console.log(d) );
           this.router.navigate(['/login']);

        } else if (error.status === 500) {
           // this.healthService.addError(2,this.requestPath).subscribe(d=> {console.log(d)},error => console.log(error));
           this.router.navigate(['/unauthorized']);
        } else if (error.status === 404) {
           // this.healthService.addError(3,this.requestPath).subscribe(d=> {console.log(d)},error => console.log(error));
           this.router.navigate(['/unauthorized']);
        } else if (error.status === 403) {
           // this.healthService.addError(4,this.requestPath).subscribe(d=> {console.log(d)},error => console.log(error));
           this.router.navigate(['/unauthorized']);
        }
        return throwError(new HttpErrorResponse({
          error: 'Something went wrong',
          status: 400, // set the status code
          statusText: 'Bad Request' // set the status text
        }));      })
    );
    return this.responseclient;
  }

}
