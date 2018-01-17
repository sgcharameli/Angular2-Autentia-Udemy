import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class AddTokenInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'token-interceptor';
        const authReq = req.clone({headers: req.headers.set('X-TOKEN-INT', token)});
        return next.handle(authReq);
    }
}
