import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ChartsInterceptor implements HttpInterceptor {
  constructor() {}

  API_KEY = 'ZNPAMC7T7ZHODG26' as const
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.url.search("alphavantage") > 1){
      console.log("req.url.searchalphavantage",req.url.search("alphavantage"))
      const newReq = req.clone({ url: `${req.url}&apikey=${this.API_KEY}`});
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
