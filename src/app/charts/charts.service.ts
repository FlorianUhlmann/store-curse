import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }


  getCryptoData( mode: string = 'DIGITAL_CURRENCY_DAILY', symbol:string = 'BTC', market:string = 'EUR' ){
    const baseUrl = "https://www.alphavantage.co/query";
    /* const url = 'https://www.alphavantage.co/query?function=&symbol=${symbol}&market=${market}'; */
    let url1 = `${baseUrl}?function=${mode}&symbol=${symbol}&market=${market}`
    let url = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY'


    const headers = new HttpHeaders()
      .set('User-Agent', 'request');

    return this.http.get<Observable<any>>(url1, { headers})
      .pipe(
        map((data: any) => {
          const mappedDate = {...data['Time Series (Digital Currency Daily)']}
          Object.keys(mappedDate).map((key) => {
            mappedDate[key] = Object.keys(mappedDate[key]).reduce((acc: any, curr: string) => {
              if (curr.includes('USD') && !curr.includes('volume') && !curr.includes('market') ){
                return {
                  ...acc,
                  [`${curr}`]: mappedDate[key][curr]
                }
              }
              return acc;
            }, {})
          })
          data['Time Series (Digital Currency Daily)'] = mappedDate;
          console.log(data)
          return data;
        }))
      }
}
