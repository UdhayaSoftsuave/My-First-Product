import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {  tap } from "rxjs";

export class AppInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log("request got hitted");
        const headers = req.clone({headers : req.headers.append('Auth' , 'abc')})
        return next.handle(headers).pipe(tap(event=> {
            console.log(event.type);
        }));
        
    }
}