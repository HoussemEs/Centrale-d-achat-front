import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './authService';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

<<<<<<< Updated upstream
    this.responseclient = next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          localStorage.setItem('user','user');
          this.router.navigate(['/shop/home']);
          return of(new HttpResponse());
        } else {
          return throwError(error);
        }
      })
    );
    return this.responseclient;
=======
    return next.handle(request);
>>>>>>> Stashed changes
  }
}
